---
date: '2021-01-12'
title: '[SQL] Day6 - 서브쿼리'
categories: ['MySQL']
summary: 'SQL 공부'
thumbnail: './images/thumbnail/mysql.png'
---


## 학습 정리

### 서브쿼리

- 서브쿼리: SELECT문 안에 또다른 SELECT문이 포함되어 있는것
	- 하나의 중첩된 SELECT 문으로 여러번의 SELECT문을 수행한 결과를 얻음

- 서브쿼리 특징
	- 서브쿼리가 먼저 실행되고, 그 결과가 메인 쿼리에 전달되어 실행됨
	- 메인쿼리에서 서브쿼리 안의 컬럼을 사용할순 없음
	- SELECT 뿐 아니라 FROM, WHERE, HAVING, ORDER BY, UPDATE, INSERT INTO 절에도 사용 가능
	- 서브쿼리엔 반드시 괄호를 써야하며, 서브쿼리 안에선 ORDER BY절 사용 불가함

```sql
SELECT sal
FROM emp
WHERE ename = 'SMITH'; -- 800

SELECT ename, sal
FROM emp
WHERE sal < 800;

-- 위 두개의 쿼리문을 합친 결과

SELECT ename, sal
FROM emp
WHERE sal < (SELECT sal
             FROM emp
             WHERE ename = 'SMITH');
```

- 서브쿼리 종류
	- 실행 결과 개수에 따라
		- 단일행 서브쿼리
		- 복수행 서브쿼리
		- 다중컬럼 서브쿼리
	- 서브쿼리 위치에 따라
		- 일반 서브쿼리
		- 인라인뷰 (FROM절에 위치)
		- 상관 서브쿼리 (일반적으로 SELECT절에 위치)


### 단일행 서브쿼리

- 단일행 서브쿼리: 서브쿼리가 한개의 행을 리턴
	- 반드시 단일행 연산자를 사용해야 함(=, >, <, >=, <=, !=)

```sql
SELECT ename, sal
FROM emp
WHERE sal > (SELECT AVG(sal)
             FROM emp);
```

- 하나의 메인 쿼리에 여러개의 서브쿼리 사용 가능

```sql
SELECT ename, job, hiredate, sal
FROM emp
WHERE job = (SELECT job
             FROM emp
             WHERE empno = 7521)
AND sal > (SELECT sal
             FROM emp
             WHERE empno = 7934);
```

- HAVING 절에도 서브쿼리 사용 가능

```sql
SELECT deptno, MIN(sal)
FROM emp
GROUP BY deptno
HAVING MIN(sal) > (SELECT MIN(sal)
                  FROM emp
                  WHERE deptno = 20)
```

```sql
-- 'SALES' 부서의 인원수보다 적은 부서의 부서명, 인원수 검색
SELECT d.dname, COUNT(*)
FROM emp e, dept d
WHERE e.deptno = d.deptno
GROUP BY d.dname
HAVING COUNT(*) < (SELECT COUNT(*)
                   FROM emp e NATURAL JOIN dept d
                   WHERE d.dname = 'SALES');
```

### 복수행 서브쿼리

- 복수행 서브쿼리: 서브쿼리가 여러개의 행을 리턴
	- 반드시 복수행 연산자를 사용해야 함(IN, ANY, ALL, EXISTS)

```sql
SELECT ename, deptno, sal
FROM emp
WHERE deptno IN(SELECT deptno
                FROM emp
                WHERE sal >= 1000);
```

- IN: 서브쿼리 결과 중 하나라도 일치하면 됨

```sql
-- 업무별로 최소급여를 받는 사원의 정보 출력
SELECT empno, ename, sal
FROM emp
WHERE sal IN (SELECT MIN(sal)
              FROM emp
              GROUP BY job);
```

- ALL: 서브쿼리의 결과 모두에 대해서 조건을 만족해야 함
	- 부등호 조건에 사용

```sql
SELECT empno, ename, sal
FROM emp
WHERE sal > ALL(SELECT sal
                FROM emp
                WHERE job = 'MANAGER');
```

- ANY: 서브쿼리의 결과 중 하나에 대해서만 조건을 만족해도 됨
	- 부등호 조건에 사용

```sql
SELECT empno, ename, sal
FROM emp
WHERE sal > ANY(SELECT sal
                FROM emp
                WHERE job = 'MANAGER');
```

- EXISTS: 서브쿼리의 결과가 존재하는지 여부를 확인
	- 결과가 하나도 없으면 조건이 거짓이 되어, 선택되는 레코드가 없음

```sql
SELECT *
FROM emp
WHERE EXISTS(SELECT empno
             FROM emp
             WHERE comm IS NOT NULL);
```


### 다중 컬럼 서브쿼리

- 다중 컬럼 서브쿼리: 서브쿼리에서 여러개의 컬럼값을 검색하여 메인쿼리의 조건절과 비교함
	- 메인쿼리의 조건절에서도 서브쿼리 컬럼수만큼 지정해야함

- 비교 방법
	- Pairwise: 컬럼을 쌍으로 묶어서 동시에 비교
	- Unpairwise: 컬럼별로 나누어서 비교 후 AND 연산 처리

```sql
-- 부서별로 가장 많은 sal을 받는 사원정보 출력

-- Pairwise
SELECT deptno, empno, ename, sal
FROM emp
WHERE (deptno, sal) IN (SELECT deptno, MAX(sal)
                        FROM emp
                        GROUP BY deptno);

-- Unpairwise
SELECT deptno, empno, ename, sal
FROM emp
WHERE deptno IN (SELECT deptno
				 FROM emp
				 GROUP BY deptno)
AND sal IN (SELECT MAX(sal)
			FROM emp
			GROUP BY deptno);
```


### 인라인 뷰

- 인라인 뷰: FROM절 뒤에 테이블명 대신 서브쿼리가 사용됨
	- 하나의 가상 테이블을 반환
	- 서브쿼리 내의 컬럼을 메인쿼리에서 사용 가능

```sql
SELECT e.deptno, total_sum, cnt
FROM (SELECT deptno, SUM(sal) total_sum, COUNT(*) cnt
      FROM emp
      GROUP BY deptno) e, dept d
WHERE e.deptno = d.deptno;
````
