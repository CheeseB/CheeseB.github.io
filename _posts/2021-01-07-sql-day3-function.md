---
title: "[SQL] Day3 - 단일행 함수(2)"
categories:
- sql
tags:
- sql
- oracle
- database
classes: wide
---


## 학습 정리

### 단일행 함수 - 문자열 함수(2)

- LTRIM/RTRIM: 첫 문자/끝 문자부터 지정 문자 제거
	- 지정문자 생략하면 공백문자 제거

```sql
-- LTRIM --
SELECT LTRIM('OMG', 'O'), LTRIM(1234, 1)
FROM dual; -- 'MG', 234

SELECT LTRIM('   MILLER   '), LENGTH(LTRIM('   MILLER   '))
FROM dual; -- 'MILLER   ', 9

-- RTRIM --
SELECT RTRIM('MILLER', 'R')
FROM dual; -- 'MILLE'

SELECT RTRIM('   MILLER   '), LENGTH(RTRIM('   MILLER   '))
FROM dual; -- '   MILLER', 9
```

- TRIM(LEADING/TRAILING/BOTH): 처음/끝/양쪽 에서 지정문자 제거
	- 방향이 생략되면 both가 기본
	- 제거할 문자 생략하면 공백문자 제거

```sql
-- 양옆의 공백만 제거할거면 문자열만 인자로 넣어도 됨
-- 제거할 문자나 방향을 지정할거면 FROM 필요
SELECT TRIM(0 FROM 00012345000)
FROM dual; -- 12345

SELECT TRIM(LEADING FROM '   aa   ')
FROM dual; -- 'aa   '

SELECT TRIM(TRAILING FROM '   aa   ')
FROM dual; -- '   aa'

SELECT TRIM('  ABC  '), LENGTH(TRIM('  ABC  '))
FROM dual; -- 'ABC', 3
```


### 단일행 함수 - 수학 함수

- CEIL/FLOOR: 올림/버림

```sql
SELECT CEIL(10.1), FLOOR(10.7)
FROM dual; -- 11, 10
```

- ROUND: 반올림
	- 두번째 인자 n이 양수면 소수 n+1자리, 음수면 정수 n자리에서 반올림
	- n이 생략되면 기본값은 0

```sql
SELECT ROUND(4567.678), ROUND(4567.678, 0), ROUND(4567.678, 2), ROUND(4567.678, -2)
FROM dual; -- 4568, 4568, 4567.68, 4600
```

- TRUNC: 절삭함수
	- 두번째 인자 n이 양수면 소수 n+1자리, 음수면 정수 n자리에서 절삭
	- n이 생략되면 기본값은 0

```sql
SELECT TRUNC(4567.678), TRUNC(4567.678, 0), TRUNC(4567.678, 2), TRUNC(4567.678, -2)
FROM dual; -- 4567, 4567, 4567.67, 4500
```

- MOD: 나머지 연산
	- 첫번째 인자 m을 두번째 인자 n으로 나눈 나머지
	- n이 0이면 m 자체를 반환

```sql
SELECT MOD(10, 3), MOD(10, 0)
FROM dual; -- 1, 10
```

- SIGN: 값이 양수/음수/0 인지 판단 (양수:1, 음수:-1, 0:0)

```sql
SELECT SIGN(100), SIGN(-20), SIGN(0)
FROM dual; -- 1, -1, 0
```


### 단일행 함수 - 날짜 함수

- SYSDATE/SYSTIMESTAMP: 서버에 설정된 날짜/날짜+시간 리턴
	- 날짜에 사칙연산 가능

<img src="{{site.url}}/assets/img/post/sql3.jpg">

```sql
SELECT SYSDATE 오늘, SYSDATE+1 내일, SYSDATE-1 어제
FROM dual; -- 21/01/07, 21/01/08, 21/01/06
```

```sql
-- 근무 년도수 구하기
SELECT TRUNC((SYSDATE - hiredate)/365) "년"
FROM emp
ORDER BY 년 DESC;

-- 근무일 수가 몇주 몇일인지 구하기
SELECT SYSDATE - hiredate "Total Days",
    TRUNC((SYSDATE - hiredate)/7) Weeks,
    ROUND(MOD((SYSDATE - hiredate),7)) Days
FROM emp;
```

- MONTHS_BETWEEN: 날짜와 날짜 사이의 월수를 계산함
	- 결과는 양수, 음수 둘다 될수 있음
	- 결과의 소수 부분은 월의 부분을 나타냄

```sql
-- 월의 부분을 제외하고 월만 구하기 위해 TRUNC 사용
SELECT TRUNC(MONTHS_BETWEEN(SYSDATE, TO_DATE('200101', 'YYMMDD')))
FROM dual;
```

- ADD_MONTHS: 날짜에 월을 더하거나 뺌
	- 두번째 인자가 양수면 더하기, 음수면 빼기

```sql
SELECT sysdate 현재, ADD_MONTHS(SYSDATE, 1) 다음달, ADD_MONTHS(SYSDATE, -1) 이전달
FROM dual; -- 21/01/07, 21/02/07, 20/12/07
```

- NEXT_DAY: 지정 날짜로부터 돌아오는 요일에 해당하는 가장 가까운 날짜 반환
	- 요일 지정은 '일요일', '일', 1 과 같이 가능함
	- 일:1, 월:2, ..., 토:7

```sql
SELECT NEXT_DAY(SYSDATE, '일') FROM dual; -- 21/01/10
SELECT NEXT_DAY(SYSDATE, 1) FROM dual; -- 21/01/10
```

```sql
-- 오늘부터 5개월 뒤 돌아오는 토요일의 날짜 계산
SELECT NEXT_DAY(ADD_MONTHS(SYSDATE, 5), '토')
FROM dual; -- 21/06/12
```

- LAST_DAY: 지정 날짜에 해당하는 월의 마지막 날짜 반환
	- 윤년, 평년은 자동계산

```sql
SELECT LAST_DAY(SYSDATE)
FROM dual; -- 21/01/31
```

- ROUND/TRUNC: 날짜를 가장 가까운 년도나 월로 반올림/절삭

```sql
SELECT ROUND(hiredate, 'YEAR'), ROUND(hiredate, 'MONTH')
FROM emp
WHERE empno = 7839; -- 81/11/17, 82/01/01, 81/12/01

SELECT TRUNC(hiredate, 'YEAR'), TRUNC(hiredate, 'MONTH')
FROM emp
WHERE empno = 7839; -- 81/11/17, 81/01/01, 81/11/01
```


### 단일행 함수 - 변환함수

- sql에선 묵시적 변환이 허용되지만 권장되진 않음.
- 명시적 변환 종류
	- TO_NUMBER, TO_DATE, TO_CHAR

```sql
SELECT empno, ename
FROM emp
WHERE empno = '7900'; -- 숫자형으로 묵시적 변환

SELECT empno, ename
FROM emp
WHERE empno = TO_NUMBER('7900'); -- 명시적 변환

SELECT empno, ename, hiredate
FROM emp
WHERE hiredate = '82/01/23'; -- 날짜형으로 묵시적 변환

SELECT empno, ename, hiredate
FROM emp
WHERE hiredate = TO_DATE('82/01/23'); -- 명시적 변환
```

- TO_CHAR 함수는 변환 시 형식을 지정할 수 있음

<img src="{{site.url}}/assets/img/post/sql4.jpg">
<img src="{{site.url}}/assets/img/post/sql5.jpg">

```sql
SELECT SYSDATE, TO_CHAR(SYSDATE, 'YYYY/MM/DD, (AM)DY HH24:MI:SS')
FROM dual;
-- 21/01/07
-- 2021/01/07, (오후)목 12:39:22
```

- 문자열 변환 시 안에 문자열을 넣고자 할 땐 안에 큰따옴표 써야함

```sql
SELECT TO_CHAR(SYSDATE, 'YYYY"년" MM"월" DD"일"')
FROM dual; -- 2021년 01월 07일
```

```sql
-- 입사한 달이 9월인 사람을 빨리 입사한 순으로 정렬
SELECT empno, ename, hiredate
FROM emp
WHERE TO_CHAR(hiredate, 'MM') = '09'
ORDER BY 3;
```

- TO_DATE는 왼쪽의 문자열을 오른쪽의 날짜 형식으로 변환함

```sql
SELECT TO_DATE('20170802181030', 'YYYYMMDDHH24MISS')
FROM dual; -- 17/08/02

-- SQL의 기본 날짜 표현방식 바꾸기
ALTER SESSION SET NLS_DATE_FORMAT='YYYY/MM/DD HH24:MI:SS';

SELECT TO_DATE('20170802181030', 'YYYYMMDDHH24MISS')
FROM dual; -- 2017/08/02 18:10:30
```

```sql
-- 현재 나이 구하기
SELECT (TO_CHAR(SYSDATE, 'YYYY') - 1997)+1 AS "나이"
FROM dual;
```


### 단일행 함수 - 조건함수

- DECODE: switch문과 같음

```sql
SELECT empno, ename, sal, job,
	DECODE(job, 'ANALYST', sal*1.1, -- job이 'ANALYST'면 sal*1.1 
            	'CLERK', sal*1.2,
            	'MANAGER', sal*1.3,
            	'PRESIDENT', sal*1.4,
				sal) AS "급여" -- 마지막은 디폴트
FROM emp;
```

- **CASE**: if문과 같음 (switch처럼 쓸수있지만 범위 조건도 가능)
	- DECODE와 달리 조건마다 쉼표를 붙이지 않고 WHEN, THEN, ELSE 사용
	- CASE문의 끝엔 END를 붙여줘야 함

```sql
SELECT empno, ename, sal, job,
	CASE job WHEN 'ANALYST' THEN sal*1.1
         	 WHEN 'CLERK' THEN sal*1.2
         	 WHEN 'MANAGER' THEN sal*1.3
         	 WHEN 'PRESIDENT' THEN sal*1.4
         	 ELSE sal -- 디폴트
	END "급여"
FROM emp;
```

```sql
SELECT empno, ename,
	CASE WHEN sal>=0 AND sal <=1000 THEN 'E'
		 WHEN sal>1000 AND sal <=2000 THEN 'D'
    	 WHEN sal>2000 AND sal <=3000 THEN 'C'
     	 WHEN sal>3000 AND sal <=4000 THEN 'B'
     	 WHEN sal>4000 AND sal <=5000 THEN 'A'
	END "등급"
FROM emp;

-- 어차피 CASE에서 위의 조건이 맞지 않으면 그 조건 제외하고 아래로 내려가므로 다음처럼 써도 됨

SELECT empno, ename,
	CASE WHEN sal <=1000 THEN 'E'
		 WHEN sal <=2000 THEN 'D'
    	 WHEN sal <=3000 THEN 'C'
     	 WHEN sal <=4000 THEN 'B'
     	 WHEN sal <=5000 THEN 'A'
	END "등급"
FROM emp;
```

