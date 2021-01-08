---
title: "[SQL] Day2 - 연산자, 정렬, 단일행 함수(1)"
categories:
- sql
tags:
- sql
- oracle
- database
classes: wide
---


## 학습 정리

### 비교 연산자

- 날짜형식에도 비교 연산 가능

```sql
SELECT empno, ename, sal, hiredate
FROM emp
WHERE hiredate >= '81/11/17'; -- 81년 11월 17일 이후
```

- BETWEEN a AND b: a와 b 사이 (a, b 포함)

```sql
SELECT empno, ename, sal
FROM emp
WHERE sal BETWEEN 1000 AND 2000; -- 정수

SELECT empno, ename, sal, hiredate
FROM emp
WHERE hiredate BETWEEN '81/01/01' AND '81/12/31'; -- 날짜
```

- IN(a,b,c,...): 괄호 안의 값과 일치하는

```sql
SELECT empno, ename, job
FROM emp
WHERE empno IN(7839, 7844, 7876);
```

- null 비교할땐 IS NULL, IS NOT NULL 사용
	- '=' 연산자 사용 불가

```sql
SELECT comm
FROM emp
WHERE comm IS NOT NULL;
```

- 다중 리스트

```sql
SELECT ename, job, deptno
FROM emp
WHERE (job, deptno) IN (('MANAGER', 20),('CLERK', 30));
```

- LIKE: 검색할 문자열을 정확히 알수없을 때 사용
	- %: 0글자 이상의 임의 문자
	- _: 1글자의 임의 문자

```sql
SELECT empno, ename, job
FROM emp
WHERE ename LIKE 'A%'; -- A로 시작하는 문자열 or A

SELECT empno, ename, job
FROM emp
WHERE ename LIKE '%A'; -- A로 끝나는 문자열 or A

SELECT empno, ename, job
FROM emp
WHERE ename LIKE '%A%'; -- A가 포함된 문자열 or A

SELECT empno, ename, job
FROM emp
WHERE ename LIKE '_L%'; -- L앞에 한글자 반드시 포함, 뒤는 무관

SELECT empno, ename, job
FROM emp
WHERE ename LIKE '____'; -- 4자리 글자
```

- 검색할 문자열에 '%' 나 '_' 가 들어가 있을땐 ESCAPE 사용
	- ESCAPE로 지정한 문자 다음에 나오는 문자를 일반문자로 인식

```sql
-- '_'가 포함된 문자열을 찾고자 함

SELECT empno, ename, job
FROM emp
WHERE ename LIKE '%_%'; -- 모든 문자 다나옴(X)

SELECT empno, ename, job
FROM emp
WHERE ename LIKE '%\_%' ESCAPE '\'; -- '_'를 일반문자로 인식(O)
```

- 부정 비교연산자 3가지
	- !=
	- ^=
	- <> 

### 논리 연산자

- AND, OR, NOT

```sql
SELECT DISTINCT job, sal
FROM emp
WHERE NOT job = 'SALESMAN'
AND/OR NOT sal <= 3000;

SELECT ename, job, empno, sal
FROM emp
WHERE sal NOT IN (800, 900);

SELECT ename
FROM emp
WHERE ename NOT LIKE 'J%';
```

- 연산자 우선순위
1. 괄호
2. NOT
3. 비교
4. AND
5. OR

```sql
SELECT ename, job, sal, comm
FROM emp
WHERE job = 'CLERK' OR job = 'ANALYST'
AND comm IS NULL
AND sal >= 1000
AND sal <= 3000;

-- AND 가 뒤에있어도 우선순위 때문에 OR보다 먼저 연산됨
-- 괄호로 묶어줘야함

SELECT ename, job, sal, comm
FROM emp
WHERE (job = 'CLERK' OR job = 'ANALYST')
AND comm IS NULL
AND sal >= 1000
AND sal <= 3000;
```


### 정렬

- ORDER BY 컬럼: 컬럼 기준으로 정렬 (ASC가 기본)
	- 숫자, 문자, 날짜 다 가능
	- ASC: 오름차순 (생략 가능)
	- DESC: 내림차순

- FROM -> WHERE -> ORDER BY 순으로 써야 에러 안남

```sql
SELECT empno
FROM emp
ORDER BY empno; -- 오름

SELECT ename
FROM emp
ORDER BY ename DESC; -- 내림
```

- ORDER BY의 기준이 되는 열은 별칭이나 쓰인 순서로 지정할 수 있음

```sql
SELECT ename, empno, sal 월급
FROM emp
ORDER BY 월급; -- sal 기준 정렬

SELECT ename, empno, sal
FROM emp
ORDER BY 2; -- empno 기준 정렬
```

- 다중 정렬도 가능
	- 앞 컬럼 기준으로 먼저 정렬 후, 뒤 컬럼 기준으로 정렬

```sql
SELECT ename, deptno, sal as 월급
FROM emp
ORDER BY 2, 3;
-- deptno 기준으로 먼저 정렬한 뒤
-- deptno가 같은 레코드끼리 sal 기준으로 정렬함
```

- null값이 있는 컬럼에선 null이 가장 큰값으로 인식됨
	- 내림차순 정렬하면 가장 위에 뜸

- 중첩 쿼리문

```sql
SELECT student_name
FROM tb_student
WHERE absence_yn = 'Y'
AND department_no =
(SELECT department_no
FROM tb_department
WHERE department_name = '국어국문학과');
```


### 함수

- 단일행 함수
	- 모든 행에 대해 각각 적용됨
	- 행의 개수와 동일한 개수의 결과 리턴
	- SELECT, WHERE, ORDER BY 절에 사용 가능
- 다중행 함수 (그룹함수)
	- 검색되는 모든 행에 대해 한번만 적용됨
	- 한 건의 결과만을 리턴
	- ex) 여러 행의 총 합계, 평균 등


### 단일행 함수 - 문자열 함수(1)

- INITCAP: 각 단어의 첫글자를 대문자로, 나머지는 소문자로 변경

```sql
SELECT deptno, INITCAP(dname), INITCAP(loc)
FROM dept;

SELECT INITCAP('ORACLE database') FROM dual; -- Oracle Database
```

- LOWER: 모든 글자를 소문자로 변경
- UPPER: 모든 글자를 대문자로 변경

```sql
SELECT empno, deptno, job
FROM emp
WHERE LOWER(ename) = 'king';

SELECT empno, ename, job, deptno
FROM emp
WHERE ename = UPPER('king');
```

- CONCAT: 두개의 문자열 합성 ('&#124;&#124;' 과 같음)
	- 두개의 매개변수만 사용 가능

```sql
SELECT CONCAT('으악', ' 뭐야')
FROM dual; -- 으악 뭐야
```

- LENGTH: 문자열 길이 출력

```sql
SELECT LENGTH('으악 뭐야')
FROM dual; -- 5
```

```sql
-- 이름 길이 내림차순 정렬 후 알파벳순 정렬
SELECT ename, LENGTH(ename)
FROM emp
ORDER BY 2 DESC, 1;
```

- INSTR: 문자열에서 특정 문자의 위치 반환
	- 인덱스는 1부터 시작
	- 없으면 0 반환

```sql
SELECT INSTR('MILLER', 'L', 1, 2) FROM dual;
-- 'MILLER'의 1번째 글자부터 탐색 시작
-- 2번째로 나오는 'L'의 위치 반환 (반환값: 4)
```

- LPAD/RPAD: 문자열의 왼쪽/오른쪽에 문자를 끼워넣음
	- 문자열의 총 길이가 지정한 길이가 될때까지
	- 첫번째 문자열이 지정한 길이보다 크면 첫번째 문자열을 n길이만큼만 반환함

```sql
SELECT LPAD('yyy', 6, '*') FROM dual; -- ***yyy
SELECT RPAD('yyy', 6, '*') FROM dual; -- yyy***
SELECT LPAD('yyy', 2, '*') FROM dual; -- yy
```

- SUBSTR: 부분 문자열 추출
	- 문자열 끝까지 추출시 세번째 인자 생략 가능

```sql
SELECT SUBSTR('abcdefg', 3, 2) FROM dual;
-- 'abcdefg'의 3번째 글자부터 길이가 2인 문자열 반환 (반환값: cd)

SELECT SUBSTR('abcdefg', -3, 2) FROM dual;
-- 뒤에서 3번째 글자부터 길이가 2인 문자열 반환 (반환값: ef)

SELECT SUBSTR('abcdefg', 4) FROM dual;
-- 'abcdefg'의 4번째 글자부터 끝까지 반환 (반환값: defg)
```

```sql
-- 예제) 주민번호 뒷글자 처리
SELECT RPAD(SUBSTR('000101-3234232', 1, 8), 14, '*')
FROM dual;
-- 000101-3******
```

- REPLACE: 특정 문자열을 다른 문자열로 치환

```sql
SELECT REPLACE('JACK and JUE', 'J', 'X') FROM dual;
-- XACK and XUE
```