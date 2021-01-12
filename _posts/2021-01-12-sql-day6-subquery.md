---
title: "[SQL] Day6 - 서브쿼리"
categories:
- sql
tags:
- sql
- oracle
- database
classes: wide
---


## 학습 정리

### 서브쿼리

- 서브쿼리: SELECT문 안에 또다른 SELECT문이 포함되어 있는것
	- 하나의 중첩된 SELECT 문으로 여러번의 SELECT문을 수행한 결과를 얻음

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

- 서브쿼리 특징
	- 서브쿼리가 먼저 실행되고, 그 결과가 메인 쿼리에 전달되어 실행됨
	- 메인쿼리에서 서브쿼리 컬럼을 사용할순 없음
	- SELECT 뿐 아니라 FROM, WHERE, HAVING, ORDER BY, UPDATE, INSERT INTO 절에도 사용 가능
	- 서브쿼리엔 반드시 괄호를 써야하며, 서브쿼리 안에선 ORDER BY절 사용 불가함
	- 단일 행 서브쿼리는 단일행 연산자(=, >, < 등), 복수행 서브쿼리엔 복수행 연산자(IN, ANY, ALL, EXISTS 등) 사용
		- SELECT의 결과 행이 1개면 단일행, 여러개면 복수행

```sql
-- 예제) 사원들의 평균월급보다 급여가 높은 사람 출력
SELECT ename, sal
FROM emp
WHERE sal > (SELECT AVG(sal)
             FROM emp);
```

### 서브쿼리 종류

- 실행 결과 개수에 따라
	- 단일행 서브쿼리
	- 복수행 서브쿼리
	- 다중컬럼 서브쿼리
- 서브쿼리 위치에 따라
	- 일반 서브쿼리
	- 인라인뷰 (FROM절에 위치)
	- 상관 서브쿼리 (일반적으로 SELECT절에 위치)
- 메인 쿼리와의 연관성에 따라
	- 연관성 없는 서브쿼리
		- 서브쿼리가 메인 쿼리 컬럼을 가지고있지 않음
		- 메인 쿼리에 값을 제공할 목적으로 사용
	- 연관성 있는 서브쿼리
		- 서브쿼리가 메인 쿼리 컬럼을 가짐
		- 메인쿼리가 먼저 수행되어, 결과 데이터를 서브쿼리에서 조건이 맞는지 확인할때 사용