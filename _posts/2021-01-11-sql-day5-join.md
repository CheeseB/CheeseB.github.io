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