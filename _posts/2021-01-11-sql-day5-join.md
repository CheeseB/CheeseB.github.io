---
title: "[SQL] Day5 - Join"
categories:
- sql
tags:
- sql
- oracle
- database
classes: wide
---


## 학습 정리

### Join

- Join: 검색하려는 컬럼이 여러개의 테이블에 존재할때 사용
	- 두개의 컬럼을 합쳐서 하나의 테이블로 표시 가능
	- Primary Key(중복불가, null불가)와 Foreign Key를 사용하는 경우가 대부분이나, 때로 논리적인 값의 연관으로 하는 경우도 있음
	- 양쪽 테이블에 공통으로 존재하는 열은 열 이름 앞에 테이블명 기술해야 함
	- 공통으로 존재하지 않아도 테이블명 써주는것을 권장함(어디서 온건지 모를수 있으니까)


### JOIN의 종류 - 오라클 조인(오라클에서만 사용)

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

<img src="{{site.url}}/assets/img/post/sql7.jpg">
<img src="{{site.url}}/assets/img/post/sql8.jpg">

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
