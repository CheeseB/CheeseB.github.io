---
date: '2021-01-05'
title: '[SQL] Day1 - SQL기본, Select, Where'
categories: ['MySQL']
summary: 'SQL 공부'
thumbnail: './thumbnail/mysql.png'
---


## 활동 정리

1. 오라클 DBMS 설치
	- 11g XE
2. 관리자 설정
	- sys/oracle
3. SQLdeveloper 설치
	- sys계정 접속 추가
4. sys계정으로부터 scott/tiger 계정 생성
	- 권한 부여: 접속, 테이블 사용 권한
5. sys로부터 scott의 테이블 생성
6. 데이터베이스 개요, select, where문 학습


## 학습 정리

### 초기 세팅

- 유저 생성, 변경 및 권한 부여

```sql
CREATE USER scott IDENTIFIED BY tiger; -- scott/tiger 계정의 생성
ALTER USER scott IDENTIFIED BY tiger; -- scott 계정의 비밀번호를 tiger로 변경
GRANT CONNECT, RESOURCE TO scott; -- 관리자가 scott에게 db접속 및 사용 권한 부여
```

- 계정 잠금 설정 및 해제

```sql
ALTER USER hr ACCOUNT LOCK/UNLOCK; -- 계정 잠금 설정/해제
ALTER USER hr IDENTIFIED BY hr ACCOUNT UNLOCK; -- 계정 잠금 해제 및 비밀번호 변경
```


### 관계형 데이터베이스

<img src="{{site.url}}/assets/img/post/sql1.jpg">

- 데이터 구조 (2차원 테이블)
	- 열: column
	- 행: record

<img src="{{site.url}}/assets/img/post/sql2.jpg">

- SQL은 대소문자 구분이 없지만 권장사항은 있음
- SQL 명명 규칙
	- 대문자: SQL 예약어
	- 소문자: 테이블, 뷰, 컬럼을 비롯한 모든 식별자


### SELECT

- 기본 select, from 구문

```sql
SELECT * FROM emp;
SELECT ename FROM emp;
SELECT empno, ename FROM emp; -- 쉼표로 여러 컬럼 열거하면 쓴 순서대로 출력됨
```

- 3줄에 걸쳐 쓴 select, from, where 구문

```sql
SELECT empno, ename
FROM emp
WHERE ROWNUM < 10;
```

- 테이블 정보 조회

```sql
SELECT * FROM TAB; -- 현재 갖고있는 모든 테이블 조회
DESC dept; -- dept테이블의 컬럼정보 조회
```

- 컬럼에 별칭(alias)사용 가능
	- 원본 컬럼명이 바뀌진 않음
	- 별칭에서 AS는 생략 가능함
	- 별칭에 공백문자 등 특수문자를 사용하려면 쌍따옴표로 묶어줘야 함

```sql
SELECT ename AS 성명, empno AS 사번, sal AS 급여 FROM emp;

SELECT ename AS 이름 FROM emp;
SELECT ename 이름 FROM emp; -- 윗줄과 동일

SELECT ename AS "사원 이름" FROM emp;
```

- SQL에선 반드시
	- 작은따옴표 사용: 문자, 문자열, 날짜데이터
	- 큰따옴표 사용: only 별칭

- '&#124;&#124;' 이건 여러개의 문자열을 연결해서 하나의 문자열로 생성함

```sql
SELECT ename||sal AS "이름+월급" FROM emp; -- 컬럼+컬럼
SELECT ename||'사원' "이름 직업" FROM emp; -- 컬럼+문자열
SELECT ename||'의 직급은 '||job||'이다.' AS "사원별 직급" FROM emp;
```

- 숫자, 날짜형에 사칙연산(+,-,*,/,()) 쓰면 가상의 컬럼으로 결과 보여짐
	- 연산식이 컬럼명으로 표시됨
	- 원본 데이터가 바뀌거나 연산 결과가 테이블에 추가된건 아님

- 오라클은 컬럼에 기본적으로 null 허용. (허용 안하도록 변경 가능)
- null값을 비교하려면 IS NULL, IS NOT NULL 사용
- null 값을 가진 컬럼 연산하려면 NVL이나 NVL2 써야함
	- NVL(컬럼, 기본값): 컬럼값이 null이면 기본값으로 표시
	- NVL2(컬럼, A, B): 컬럼값이 null이 아니면 A, null이면 B로 표시
	- 역시나 원본값은 안바뀜

```sql
SELECT empno 번호, ename 이름, sal 월급, sal*12+NVL(comm, 0) 연봉 FROM emp;
```

- dual 테이블은 연산값을 테스트하고 테이블로 출력해보고 싶을때 씀
	- sys에 디폴트로 dual이란 테이블 있음

```sql
SELECT 10*10 FROM dual; -- 100
SELECT SYSDATE FROM dual; -- 21/01/05
```

- DISTINCT 키워드는 중복값 제거

```sql
SELECT DISTINCT job FROM emp;
```


### WHERE

- WHERE 키워드는 검색조건 지정

```sql
SELECT empno, ename, job, deptno
FROM emp
WHERE deptno = 30; -- SQL에서는 '같다'라는 표현식을 = 하나만 씀 (== 아님)
```

```sql
SELECT empno, ename, sal, sal*12 연봉
FROM emp
WHERE ename = 'BLAKE'; -- '=' 연산자로 문자 비교 시 대소문자까지 정확히 일치해야함
```

```sql
SELECT empno, ename, job, deptno
FROM emp
WHERE hiredate = '81/11/17'; -- 날짜 데이터 비교
```