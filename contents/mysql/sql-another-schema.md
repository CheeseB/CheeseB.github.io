---
date: '2021-01-18'
title: '[SQL] Day10 - 기타 스키마 객체'
categories: ['MySQL']
summary: 'SQL 공부'
thumbnail: '../images/thumbnail/mysql.png'
---


## 뷰(VIEW)

### 개요

- 뷰(VIEW): 테이블이나 다른 뷰를 기초롤 하는 논리적 테이블
	- 그 자체로 소유하는 데이터는 없음
	- 창문처럼 어떤 데이터를 보거나 변경 가능
	- 뷰에서 참조하는 테이블을 기본 테이블(Base Table)이라 함

- 뷰 사용 목적 및 특징
	- DB에서 선택적으로 데이터를 보여줌으로써 DB접근 제한 가능
	- 복잡한 질의로부터 결과를 검색하기 위한 단순한 질의를 만들수 있음
	- 조인을 한것처럼 여러 테이블에 대한 테이터를 뷰를 통해 볼 수 있음

- 뷰 종류
	- 단순 뷰: 1개의 테이블로 구성
	- 복합 뷰: 여러개의 테이블로 구성


### 뷰 작성

- CREATE VIEW 권한을 가져야 뷰 생성 가능
- 서브쿼리에 복잡한 SELECT문을 정의 가능하며, ORDER BY를 사용하려면 검색 시 뷰에 기술함

```sql
-- sys --
GRANT CREATE VIEW TO scott;

-- scott --
CREATE VIEW emp_view
AS
SELECT empno, ename, sal, hiredate
FROM emp
WHERE empno = 10;
```

- 작성한 뷰 확인

```sql
SELECT view_name
FROM user_views;
```

- 뷰를 수정하려면 CREATE OR REPLACE 사용

```sql
CREATE OR REPLACE VIEW emp_view
AS
SELECT e.empno, e.ename, d.dname, d.deptno
FROM emp e JOIN dept d
ON e.deptno = e.deptno
WHERE e.deptno = 20;
```

- 뷰에서 함수 사용 시 반드시 결과값에 별칭을 부여해야 함

```sql
CREATE VIEW emp_view4
AS
SELECT deptno, SUM(sal) 총합
FROM emp
GROUP BY deptno;
```

- 뷰에서 DML을 사용하면 원본 테이블에도 적용됨

```sql
DELETE FROM emp_view5
WHERE deptno = 20;
```

- WITH CHECK OPTION 사용 시 WHERE 조건에 해당하는 데이터만 INSERT, UPDATE를 수행할 수 있음

```sql
CREATE OR REPLACE VIEW emp_view6
AS
SELECT empno, ename, sal, deptno
FROM emp
WHERE deptno = 30
WITH CHECK OPTION;

UPDATE emp_view6
SET deptno = 40
WHERE empno = 7521; -- error!
```

- WITH READ ONLY 옵션이 붙은 뷰는 DML작업이 불가함

```sql
CREATE OR REPLACE VIEW dpet_view
AS
SELECT * FROM dept
WHERE deptno = 10
WITH READ ONLY;

UPDATE emp_view
SET deptno = 20
WHERE ename = 'KING';
```

- 뷰 제거
	- 기본 테이블에는 영향을 미치지 않음

```sql
DROP VIEW dept_view;
```

- 인라인 뷰도 뷰의 일종
	- SQL문이 실행되는 동안만 임시적으로 사용

```sql
SELECT e.deptno, total_sum, total_avg, cnt
FROM (SELECT deptno, SUM(sal) total_sum, AVG(sal) total_avg, COUNT(*) cnt
      FROM emp
      GROUP BY deptno) e, dept d
WHERE e.deptno = d.deptno;
```


## 시퀀스(SEQUENCE)

### 개요

- 시퀀스(SEQUENCE): 여러 사용자들이 공유하는 DB객체로서, 호출될 때마다 중복되지 않은 고유한 숫자를 리턴함
	- 기본키 컬럼에 사용할 값을 발생시키는 데 주로 사용함

```sql
CREATE SEQUENCE 시퀀스명
INCREMENT BY n -- 얼마씩 증가할지
START WITH n -- 시작할 값
MAXVALUE n / NOMAXVALUE -- 시퀀스 최대값
MINVALUE n / NOMINVALUE -- 사이클일 경우 다음 사이클부터 시작할 값
CYCLE / NOCYCLE -- 반복할지 안할지
CACHE n / NOCACHE -- 미리 값 지정
-- CACHE는 오라클 강제종료 시 이상한 값이 될수 있으므로
-- 가급적 노캐시로 하는것 추천
```


### 시퀀스 작성

```sql
CREATE SEQUENCE emp_seq
INCREMENT BY 1
START WITH 100
MAXVALUE 9999
NOCACHE
NOCYCLE;

SELECT sequence_name
FROM user_sequences; -- 만든 시퀀스 확인
```

- NEXTVAL: 지정된 시퀀스에서 순차적인 시퀀스 번호 추출
	- 시퀀스명.NEXTVAL

- CURRVAL: 방금 추출한 시퀀스 번호 참조
	- 시퀀스명.CURRVAL
	- 반드시 NEXTVAL로 번호를 추출한 후에 사용해야 함

```sql
SELECT emp_seq.NEXTVAL, emp_seq.CURRVAL
FROM dual;
```

- INCREMENT BY를 음수로 하고 사이클 돌리면 값이 점점 감소하며, MINVALUE 도달 시 MAXVALUE로 다음 사이클 넘어감

```sql
CREATE SEQUENCE emp_seq2
START WITH 100
INCREMENT BY -10
MINVALUE 10
MAXVALUE 150
NOCACHE
CYCLE;
```

- ALTER SEQUENCE로 시퀀스 수정 가능
	- START WITH 부분은 수정이 안되므로 DROP 후에 다시 생성해야함

```sql
ALTER SEQUENCE emp_seq2
INCREMENT BY -20
NOCYCLE
NOCACHE;
```

- 테이블에 시퀀스 사용

```sql
CREATE TABLE dept06
(deptno NUMBER(4) PRIMARY KEY,
 dname  VARCHAR2(15),
 loc VARCHAR2(15));

CREATE SEQUENCE dept_deptno_seq4
START WITH 10
INCREMENT BY 10
NOCACHE;

INSERT INTO dept06
VALUES (dept_deptno_seq4.NEXTVAL, '개발', '서울');
INSERT INTO dept06
VALUES (dept_deptno_seq4.NEXTVAL, '인사', '경기');

SELECT * FROM dept06;
-- 10	개발	서울
-- 20	인사	경기
```

- 시퀀스 삭제

```sql
DROP SEQUENCE dept_deptno_seq4;
```


## 동의어(SYNONYM)

### 정의

- 시노님(SYNONYM: 동의어): 객체에 대한 별칭
	- 객체에 대한 접근방법을 단순화 할 수 있음(보안문제 해결)
	- 객체이름 길이 단축 가능

```sql
CREATE SYNONYM 동의어 이름
FOR 테이블명;
```


### 동의어 작성

```sql
-- sys --
GRANT CREATE SYNONYM TO scott;

-- scott --
CREATE SYNONYM d_syn
FOR dept;

SELECT * FROM d_syn;
INSERT INTO d_syn VALUES (80, 'AA', 'AA');
```

- 다른 계정에서 동의어를 생성하면 스키마.테이블명 이렇게 쓸 필요 없이 동의어 사용 가능

```sql
-- sys --
SELECT * FROM scott.dept;
CREATE SYNONYM dept_s FOR scott.dept;
SELECT * FROM dept_s;
```


## 인덱스(INDEX)

### 개요

- 인덱스(INDEX): 테이블에서 행을 검색할 때 검색속도를 높이기 위해 오라클 서버에서 사용하는 스키마 객체 (데이터의 실제 저장위치인 ROWID를 저장, 관리함)
	- 인덱스 없이 데이터를 검색하면 테이블의 모든 데이터를 읽고 선별함(Full Scan)
	- 인덱스를 사용하면 디스크 I/O 를 감소시킬 수 있음
	- 해당 테이블과 논리적으로 독립적임
	- 오라클 서버에 의해 자동으로 사용 및 관리됨
	- 테이블을 삭제하면 관련 인덱스는 자동 삭제됨

- 인덱스 생성
	- 자동 생성
		- PRIMARY KEY, UNIQUE 제약조건 지정 시 UNIQUE INDEX가 자동 생성됨
	- 수동 생성: non-unique 인덱스/ unique 인덱스
		- 한 개의 컬럼이나 여러 컬럼(복합 인덱스)을 이용해 인덱스 생성 가능

- 인덱스를 사용할 컬럼 선정
	- 값의 범위가 넓은 컬럼 (값이 다양할수록 좋음)
	- NULL값이 많은 컬럼 (NULL은 인덱스에 포함 안되므로 인덱스 크기가 감소)
	- WHERE절이나 JOIN조건에 사용되는 컬럼

- 인덱스가 반드시 성능을 향상시키는 것은 아님.
- 테이블에 DML작업을 수행하면 관련 인덱스도 변경되어야 하므로 오히려 속도가 저하됨

- 인덱스를 작성할 필요가 없는경우
	- 테이블이 작을때
	- 쿼리문의 조건에 자주 사용되지 않는 컬럼
	- 테이블이 자주 변경될때
	- 대부분의 쿼리문이 전체 데이터의 2~4% 이상을 검색하는 경우
	- 인덱스가 작성된 컬럼이 조건의 표현식(함수, not 등)에 포함된 경우


### 인덱스 작성

```sql
SELECT * FROM emp WHERE ename = 'SMITH'; -- 0.055초

CREATE INDEX emp_ename_idx ON emp(ename);

SELECT * FROM emp WHERE ename = 'SMITH'; -- 0.025초
```