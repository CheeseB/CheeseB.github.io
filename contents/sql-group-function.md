---
date: '2021-01-08'
title: '[SQL] Day4 - 그룹함수'
categories: ['MySQL']
summary: 'SQL 공부'
thumbnail: './thumbnail/mysql.png'
---


## 학습 정리

### 그룹함수

- 그룹함수는 GROUP BY 로 그룹화, HAVING 으로 조건을 제한함

- AVG/MAX/MIN/SUM: 컬럼의 평균, 최대값, 최소값, 합계 구함
	- DISTINCT: 중복값은 제외하고 처리됨
	- 디폴트는 ALL인데 일반적으로 생략

```sql
SELECT AVG(sal), MAX(sal), MIN(sal), SUM(DISTINCT sal)
FROM emp
WHERE job LIKE 'SAL%';
```

- MIN/MAX 함수는 문자, 날짜 데이터에도 사용 가능
	- 다른 함수는 안됨

```sql
SELECT MIN(hiredate), MAX(hiredate)
from emp; -- 80/12/17, 82/01/23
```

- COUNT: 컬럼에 저장된 null을 제외한 행 개수 반환
	- 인자로 컬럼이 아닌 '*' 을 넣으면 null을 포함한 테이블의 전체 행 개수 반환

```sql
SELECT COUNT(*), COUNT(ename), COUNT(comm), COUNT(mgr)
FROM emp; -- 12, 12, 4, 11
```

```sql
-- 그냥 AVG하면 null값을 제외하고 계산
-- 전체 평균을 구하고자 하면 null값을 0으로 바꿔야함
SELECT AVG(comm), AVG(NVL(comm, 0))
FROM emp;
```

- GROUP BY 없이 SELECT 뒤에 일반 컬럼과 그룹함수 동시 사용 불가

```sql
SELECT ename, MAX(sal)
FROM emp; -- error!
```

- GROUP BY: 행들을 특정 그룹으로 묶을때 사용
	- GROUP BY뒤에 기술된 컬럼, 그룹함수가 적용된 컬럼만 SELECT 뒤에 사용 가능 (리터럴은 예외)
	- GROUP BY절에는 컬럼 별칭, 컬럼순서 정수값 사용 불가
	- SELECT - FROM - WHERE - GROUP BY - ORDER BY 순서

```sql
SELECT ename, AVG(sal) -- error!
FROM emp
GROUP BY deptno;

-- 부서별로 행 수, 평균, 최소/최대, 총합 출력
-- 총합 별로 내림차순 정렬
SELECT deptno, COUNT(*), AVG(sal), MIN(sal), MAX(sal), SUM(sal)
FROM emp
GROUP BY deptno
ORDER BY SUM(sal) DESC;
```

- 다중 그룹화 가능

```sql
SELECT deptno, job, COUNT(*), AVG(sal), SUM(sal)
FROM emp
GROUP BY deptno, job; -- deptno로 그룹화 후 job으로 그룹화
```

```sql
-- 예제) 입사년도별, 월별로 입사한 사람의 월급의 합계를 출력
-- 월급의 합계가 높은순으로 정렬
SELECT TO_CHAR(hiredate, 'YYYY'), TO_CHAR(hiredate, 'MM'), SUM(sal)
FROM emp
GROUP BY TO_CHAR(hiredate, 'YYYY'), TO_CHAR(hiredate, 'MM')
ORDER BY 3 DESC;
```

- WHERE: 그룹으로 분류하기 전, 행 제한 (1차 필터)
- HAVING: 그룹으로 분류된 후, 분류된 그룹을 제한 (2차 필터)

```sql
SELECT deptno, AVG(sal)
FROM emp
WHERE AVG(sal) > 1500 -- error!
GROUP BY deptno;

-- WHERE절엔 그룹함수 사용불가
-- 그룹함수는 HAVING절에 사용해야 함!

SELECT deptno, SUM(sal)
FROM emp
WHERE sal > 800
GROUP BY deptno
HAVING SUM(sal) > 8000;
```

```sql
-- 예제) 급여합이 5000을 초과하는 각 업무에 대해 업무, 급여합 출력
-- 판매원은 제외하고 급여합 별로 정렬
SELECT job 업무, SUM(sal) 급여합
FROM emp
WHERE job != 'SALESMAN'
GROUP BY job
HAVING SUM(sal) >= 5000
ORDER BY 2;

-- WHERE 사용하지 않고 아래와 같이 써도 됨
SELECT job 업무, SUM(sal) 급여합
FROM emp
GROUP BY job
HAVING SUM(sal) > 5000 AND job != 'SALESMAN'
ORDER BY 2;
```

<img src="{{site.url}}/assets/img/post/sql6.jpg">

```sql
-- 위 사진과 같이 만들기
SELECT
    SUM(CASE job WHEN 'CLERK' THEN 1 ELSE 0 END) "CLERK",
    SUM(CASE job WHEN 'SALESMAN' THEN 1 ELSE 0 END) "SALESMAN",
    SUM(CASE job WHEN 'MANAGER' THEN 1 ELSE 0 END) "MANAGER",
    SUM(CASE job WHEN 'ANALYST' THEN 1 ELSE 0 END) "ALANYST",
    SUM(CASE job WHEN 'PRESIDENT' THEN 1 ELSE 0 END) "PRESIDENT",
    COUNT(*)
FROM emp
GROUP BY job;
```