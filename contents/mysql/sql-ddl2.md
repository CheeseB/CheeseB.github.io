---
date: '2021-01-15'
title: '[SQL] Day9 - DDL(2)'
categories: ['MySQL']
summary: 'SQL 공부'
thumbnail: '../images/thumbnail/mysql.png'
---


### 테이블 삭제 (DROP, TRUNCATE)

- DROP: 테이블 삭제
	- 테이블에 저장된 모든 데이터, 인덱스 및 제약조건이 전부 삭제됨 (FK 제외)
	- FK까지 삭제하려면 CASCADE CONSTRAINTS 옵션 사용
- FLASHBACK: 삭제된 테이블 복구

```sql
DROP TABLE 테이블명;
```

```sql
DROP TABLE dept_new CASCADE CONSTRAINTS;

SHOW RECYCLEBIN; -- DB휴지통 보기
FLASHBACK TABLE dept_new TO BEFORE DROP;
```

- TRUNCATE: 테이블 잘라내기
	- 테이블의 모든 행들을 삭제함
	- 테이블이 사용하던 저장공간을 해제 (DELETE는 저장공간을 해제하진 않음)
	- ROLLBACK 정보를 발생시키지 않아 DELETE보다 수행속도가 빠르지만 ROLLBACK이 불가함

```sql
TRUNCATE TABLE 테이블명;
```


### 테이블 변경 (ALTER)

- RENAME: 테이블 이름 변경

```sql
RENAME 테이블명 TO 새 테이블명;
```

- ALTER: 테이블 변경
	- 컬럼: 새 컬럼 추가, 기존 컬럼 수정/삭제/이름변경
	- 제약조건: 추가/삭제, 활성화/비활성화
	- 테이블 읽기모드(READ ONLY)

- 컬럼 추가

```sql
ALTER TABLE 테이블명
ADD (컬럼명 데이터타입,
	 컬럼명 데이터타입,
	 ...);
```

```sql
ALTER TABLE emp04
ADD (email		VARCHAR2(10),
	 address	VARCHAR2(20));
```

- 컬럼 변경
	- 숫자, 문자 컬럼의 전체 길이 증가/축소
		- 축소는 모든 행의 컬럼값이 NULL이거나 행이 없는경우 가능
	- 데이터 타입 변경
		- 모든 행의 컬럼값이 NULL일 때만 가능
	- 디폴트 값을 변경하면 변경 이후에 입력된 행에만 적용됨

```sql
ALTER TABLE 테이블명
MODIFY (컬럼명 데이터타입,
		컬럼명 데이터타입,
		...);
```

```sql
ALTER TABLE scott_t
MODIFY (num		NUMBER(6),
        name	VARCHAR2(20));
```

- 컬렴 이름 변경

```sql
ALTER TABLE 테이블명
RENAME COLUMN 컬럼명 TO 새 컬럼명;
```

```sql
ALTER TABLE scott_t
RENAME COLUMN address TO addr;
```

- 컬렴 삭제
	- CASCADE CONSTRAINTS 옵션 사용하면 해당 컬럼 참조하는 모든 제약조건 삭제됨
	- 삭제된 컬럼이 포함된 모든 제약조건도 삭제

```sql
ALTER TABLE 테이블명
DROP (컬럼명);
```

```sql
ALTER TABLE emp04
DROP (email);
```

```sql
CREATE TABLE scott_cas
(pk NUMBER PRIMARY KEY,
 fk NUMBER,
 c1 NUMBER,
 c2 NUMBER,
 CONSTRAINT scott_cas_fk FOREIGN KEY(fk) REFERENCES scott_cas(pk),
 CONSTRAINT scott_cas_ck1 CHECK(pk>10 AND c1>10),
 CONSTRAINT scott_cas_ck2 CHECK(c2 > 10));

INSERT INTO scott_cas VALUES(11, 11, 21, 22);
INSERT INTO scott_cas VALUES(12, 11, 31, 32);

SELECT constraint_name, column_name
FROM user_cons_columns
WHERE table_name = 'SCOTT_CAS';
-- SCOTT_CAS_CK1	PK
-- SCOTT_CAS_CK1	C1
-- SCOTT_CAS_CK2	C2
-- SYS_C007157		PK
-- SCOTT_CAS_FK		FK

ALTER TABLE scott_cas
DROP(pk); -- error! (cannot drop parent key column)

ALTER TABLE scott_cas
DROP(c1); -- error! (column is referenced in a multi-column constraint)

ALTER TABLE scott_cas
DROP(pk) CASCADE CONSTRAINTS;

SELECT constraint_name, column_name
FROM user_cons_columns
WHERE table_name = 'SCOTT_CAS';
-- SCOTT_CAS_CK2	C2
```

- 제약조건 추가

```sql
ALTER TABLE 테이블명
ADD CONSTRAINT 제약조건명 제약종류(컬럼)
```

```sql
CREATE TABLE scott_t3
(num    NUMBER(4),
 name   VARCHAR2(10));

-- PK 추가 --
ALTER TABLE scott_t3
ADD CONSTRAINT scott_t3_num_pk PRIMARY KEY(num);

-- NN 추가 --
ALTER TABLE scott_t3
MODIFY (name VARCHAR2(10) NOT NULL);
```

- 제약조건 삭제
	- CASCADE 옵션은 모든 종속적인 제약조건을 같이 삭제함
	- PK, UK는 그냥 써도 되고 나머진 제약조건명을 명시해야 함

```sql
ALTER TABLE 테이블명
DROP PRIMARY KEY/ UNIQUE(컬럼)/
	 CONSTRAINT 제약조건명;
```

```sql
SELECT constraint_name, table_name, column_name
FROM user_cons_columns
WHERE table_name = 'SCOTT_T3';
--SCOTT_T3_NUM_PK	SCOTT_T3	NUM
--SYS_C007152		SCOTT_T3	NAME

ALTER TABLE scott_t3
DROP CONSTRAINT sys_c007148;

SELECT constraint_name, table_name, column_name
FROM user_cons_columns
WHERE table_name = 'SCOTT_T3';
--SCOTT_T3_NUM_PK	SCOTT_T3	NUM

ALTER TABLE scott_t3
DROP PRIMARY KEY CASCADE;

SELECT constraint_name, table_name, column_name
FROM user_cons_columns
WHERE table_name = 'SCOTT_T3';
-- (비어있음)
```

- 제약조건 활성화/비활성화
	- CASCADE 옵션 추가 시 해당 제약조건과 관련된 제약조건 모두를 비활성화함

```sql
ALTER TABLE 테이블명
DISABLE/ENABLE CONSTRAINT 제약조건명;
```

```sql
CREATE TABLE scott_t4
(num    NUMBER(4) CONSTRAINT scott_t4_num_pk PRIMARY KEY,
 name   VARCHAR(10));

SELECT STATUS
FROM user_constraints
WHERE table_name = 'SCOTT_T4';  -- ENABLED

ALTER TABLE scott_t4
DISABLE CONSTRAINT scott_t4_num_pk;

SELECT STATUS
FROM user_constraints
WHERE table_name = 'SCOTT_T4'; -- DISABLED

ALTER TABLE scott_t4
ENABLE CONSTRAINT scott_t4_num_pk;

SELECT STATUS
FROM user_constraints
WHERE table_name = 'SCOTT_T4'; -- ENABLED
```
