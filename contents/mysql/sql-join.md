---
date: '2021-01-11'
title: '[SQL] Day5 - Join'
categories: ['MySQL']
summary: 'SQL 공부'
thumbnail: '../images/thumbnail/mysql.webp'
---


## 학습 정리

### Join

- Join: 검색하려는 컬럼이 여러개의 테이블에 존재할때 사용
	- 두개의 컬럼을 합쳐서 하나의 테이블로 표시 가능
	- Primary Key(중복불가, null불가)와 Foreign Key를 사용하는 경우가 대부분이나, 때로 논리적인 값의 연관으로 하는 경우도 있음
	- 양쪽 테이블에 공통으로 존재하는 열은 열 이름 앞에 테이블명 기술해야 함
	- 공통으로 존재하지 않아도 테이블명 써주는것을 권장함(어디서 온건지 모를수 있으니까)


### JOIN의 종류(1) - 오라클 조인: 오라클에서만 사용

- Catasian Product: 모든 가능한 행들을 전부 조인 (거의 안씀)
	- 조인 조건이 생략되거나 잘못된 경우
	- 첫번째 테이블과 두번째 테이블의 모든 행이 서로 조인되는 경우
	- 양쪽 행의 개수를 곱한 결과

```sql
SELECT empno, ename, job, dept.deptno, dname, loc
FROM dept, emp -- FROM에서 테이블 두개 쉼표로 같이쓰면 조인
```

- Equi 조인: 조인 조건에서 "="를 사용하여, 값들이 정확히 일치하는 경우에 사용
	- PK와 FK를 이용
	- 단순 조인, 내부 조인이라고도 함
	- WHERE절에 테이블의 조인 조건을 명시

```sql
SELECT emp.empno, emp.ename, dept.dname, dept.loc
FROM emp, dept
WHERE emp.deptno = dept.deptno; -- 부서번호가 같은 행끼리 합치기
```

- 테이블명에 alias를 적용했을 경우엔 SELECT 절과 WHERE절에 테이블명이 아닌 alias를 사용해야 함

```sql
SELECT e.empno, e.ename, d.dname, d.loc
FROM emp e, dept d
WHERE e.deptno = d.deptno;
```

```sql
-- 예제) 입사년도가 1982년도 미만인 사원의 부서이름과 부서별 인원 출력
SELECT d.dname 부서이름, COUNT(*) "부서별 인원"
FROM emp e, dept d
WHERE e.deptno = d.deptno
AND e.hiredate < TO_DATE('1982', 'YYYY')
GROUP BY d.dname;

-- 이것도 가능
SELECT d.dname 부서이름, COUNT(*) "부서별 인원"
FROM emp e, dept d
WHERE TO_CHAR(e.hiredate, 'YYYY') < 1982
AND e.deptno = d.deptno
GROUP BY d.dname;
```

- 두개 이상의 테이블 조인


- Non-Equi 조인: 조인 조건에 "=" 외의 연산자(BETWEEN, >, <= 등)를 사용하여, 값이 정확히 일치하진 않는 경우에 사용

```sql
SELECT e.ename, e.sal, s.grade
FROM emp e, salgrade s
WHERE e.sal BETWEEN s.losal AND s.hisal
```

```sql
-- 예제) Non_Equi 조인으로 3개의 테이블 조인 
SELECT e.ename, e.sal, d.dname, s.grade
FROM emp e, dept d, salgrade s
WHERE e.deptno = d.deptno
AND e.sal BETWEEN s.losal AND s.hisal;
```

- Self 조인: 특정 테이블 자신을 자신이 Join하는 방법
	- 동일 테이블 내의 한 컬럼이 다른 컬럼과 연관관계가 있을 때 사용
	- null인 항목은 누락됨 (항목에 (+) 붙이면 null도 표시)
	- FROM절에 두개의 테이블을 사용하는 것처럼 같은 테이블에 대해 두개의 alias를 작성해서 구분지어야 함
	- 컬럼에 대해서도 어떤 테이블에서 왔는지 alias명을 반드시 기술해야 함

```sql
SELECT a.ename 사원, b.ename 관리자
FROM emp a, emp b
WHERE a.mgr = b.empno; -- b.empno(+) 로 바꾸면 null도 같이나옴
```

```sql
-- 예제) 7369번 사원의 이름, 관리자번호/이름/부서이름 선택
SELECT e.ename, e.mgr, m.ename, m.deptno, d.dname
FROM emp e, emp m, dept d
WHERE e.mgr = m.empno AND m.deptno = d.deptno
AND e.empno = 7369;
```

```sql
-- 예제) 사원의 관리자의 관리자까지 표시 (3중 self-join)
SELECT e.ename, e.mgr, m.ename, m.mgr, mm.ename
FROM emp e, emp m, emp mm
WHERE e.mgr = m.empno AND m.mgr = mm.empno;
```

- Outer 조인: 조인 조건을 만족하지 못하는 행들도 결과에 나타낼 수 있음
	- 원래는 조인 조건을 만족하지 않는 행은 결과에 나타나지 않음
	- "(+)" 기호를 사용하며, 조인시킬 값이 없는 조인 측에 위치시킴 (한쪽에만 위치할 수 있음)

```sql
-- 상위 관리자가 없는 사원의 이름도 전부 표시
SELECT e.ename, e.mgr, m.ename, m.mgr, mm.ename
FROM emp e, emp m, emp mm
WHERE e.mgr = m.empno(+)
AND m.mgr = mm.empno(+);
```


### JOIN의 종류 - ANSI 조인(표준)

- ANSI 조인 특징
	- 조인의 형식이 FROM 절에서 지정됨
	- 조인 조건이 WHERE 절이 아닌 ON 절에서 명시됨

- CROSS JOIN: Catasian Product와 동일함

```sql
SELECT empno, ename, dname
FROM dept CROSS JOIN emp;
```

- NATURAL JOIN: Equi 조인과 동일함
	- 같은 이름을 가진 컬럼에 기반하여 알아서 조인해줌
	- 양쪽 테이블에 공통 컬럼명이 반드시 하나만 있어야 함 (2개 이상이면 2개 이상의 값이 서로같은것만 추출하게 됨)

```sql
SELECT empno, ename, deptno, dname, loc
FROM emp NATURAL JOIN dept;
```

- NATURAL JOIN과 USING 에선 공통 컬럼명에 alias를 사용하면 안됨

```sql
-- error!
-- deptno가 공통컬럼이기 때문에 특정 테이블명을 붙이면 안됨
SELECT empno, ename, e.deptno, dname, loc
FROM emp e NATURAL JOIN dept d;

-- deptno 외의 다른 컬럼은 사용 가능
SELECT e.ename, deptno, d.dname
FROM emp e NATURAL JOIN dept d
WHERE e.empno = 7369;
```

- JOIN ~ USING: 동일 이름의 컬럼이 여러개인 경우 조인 컬럼을 지정
	- NATURAL JOIN 과 비슷한 기능을 하며, 함께 사용 불가
	- JOIN ~ USING 절과 JOIN ~ ON 절에서의 JOIN은 사실 INNER JOIN이지만 보통 INNER는 생략하고 사용함

```sql
SELECT empno, ename, dname, loc
FROM emp JOIN dept USING(deptno);

-- NATURAL JOIN과 마찬가지로 공통컬럼에 별칭 사용불가
SELECT e.empno, e.ename, deptno, d.dname, d.loc
FROM emp e INNER JOIN dept d USING(deptno);
```

_NATURAL JOIN, JOIN ~ USING, Equi-Join 세가지 모두 한가지 공통컬럼을 기반으로 조인해주는 것은 동일하지만 NATURAL JOIN은 공통컬럼이 두 테이블에 딱 한가지만 있을때 사용함. 그렇지 않으면 USING이나 Equi-join으로 지정해 주어야 함_

- JOIN ~ ON: 조인할 컬럼을 명시하고, 임의의 조건으로 조인할 때 사용
	- 복잡한 조건의 조인이 가능함 (서브쿼리, AND/OR 연산자 등)

```sql
-- INNER ~ ON 절에선 어느 테이블의 공통컬럼을 표시할 지 명시해줘야 함
SELECT e.empno, e.ename, d.deptno, d.dname, d.loc
FROM emp e INNER JOIN dept d
ON e.deptno = d.deptno;
```

```sql
-- 예제) 부서번호가 10번인 사원이름, 부서이름, 부서지역 표시
-- JOIN ~ ON 사용
SELECT e.ename, d.dname, d.loc
FROM emp e JOIN dept d
ON e.deptno = d.deptno
WHERE d.deptno = 10;

-- JOIN ~ USING 사용
SELECT e.ename, d.dname, d.loc
FROM emp e JOIN dept d USING(deptno)
WHERE deptno = 10;


-- 예제) 3개의 테이블 조인
-- JOIN ~ USING 사용
SELECT e.ename, e.sal, s.grade, deptno, d.dname
FROM emp e JOIN dept d USING(deptno)
JOIN salgrade s
ON e.sal BETWEEN s.losal AND s.hisal

-- JOIN ~ ON 사용
SELECT e.ename, e.sal, s.grade, e.deptno, d.dname
FROM emp e JOIN dept d
ON e.deptno = d.deptno
JOIN salgrade s
ON e.sal BETWEEN s.losal AND s.hisal


-- 예제) 사원의 관리자의 관리자까지 표시
-- JOIN ~ ON 사용
SELECT e.ename, e.mgr, m.ename, m.mgr, mm.ename
FROM emp e JOIN emp m
ON e.mgr = m.empno
JOIN emp mm
ON m.mgr = mm.empno;
```

- LEFT/RIGHT OUTER JOIN: 좌/우측 테이블의 모든 행이 우/좌 측 테이블의 행들과 일치 여부 관계없이 모두 출력됨
	- 오라클 조인의 "(+)" 연산과 동일함
- FULL OUTER JOIN: LEFT, RIGHT OUTER JOIN 결과를 합집합으로 처리한 결과와 동일함(UNION)

```sql
-- 상위 관리자가 없는 사원의 이름도 전부 표시
SELECT e.ename, m.ename, mm.ename
FROM emp e LEFT OUTER JOIN emp m
ON e.mgr = m.empno
LEFT OUTER JOIN emp mm
ON m.mgr = mm.empno;
```
