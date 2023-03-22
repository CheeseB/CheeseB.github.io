---
date: '2021-01-18'
title: '[SQL] Day10 - 사용자 관리'
categories: ['MySQL']
summary: 'SQL 공부'
thumbnail: './thumbnail/mysql.png'
---

## 사용자 관리

### DB 보안 종류

- 시스템 보안: 인증 관련
  - 사용자 계정 생성, 암호변경, 디스크 공간할당 등 시스템 수준에서의 DB접근 및 사용 관리
- 데이터 보안: 권한 관련
  - DB객체에 대한 사용자들의 접근 및 사용 관리

### 사용자 생성 및 비밀번호 변경

- DB관리자가 사용자를 생성하고 비밀번호를 변경함
- 생성된 사용자는 아무 권한도 부여받지 않아 어떠한 작업도 불가함

```sql
-- 유저 생성
CREATE USER 유저명 IDENTIFIED BY 비밀번호;

-- 유저 비밀번호 변경
ALTER USER 유저명 IDENTIFIED BY 비밀번호;
```

```sql
CREATE USER user01 IDENTIFIED BY oracle;

ALTER USER user01 IDENTIFIED BY user01;
```

### 권한 (Privilege)

- DBA가 일반 사용자에게 DB나 DB 객체에 접근할 권한을 부여할 수 있음
- 일반 사용자도 다른 사용자 또는 롤(Role) 에게 권한을 부여할수 있는 권한을 부여받을 수 있음

  - WITH GRANT OPTION

- 권한 종류

  - 시스템 권한: 사용자의 DB 접근권한(DBA가 부여함)
    - 사용자가 DB에 특별한 작업을 수행할수 있도록 해줌
  - 객체 권한: DB내의 객체의 내용을 조작하기 위한 권한
    - 사용자가 특정 객체에 접근하고 조작하는것을 가능하게 해줌
    - 사용자는 자신의 스키마에 저장된 모든 객체에 대해 권한을 가짐

- 시스템 권한

<img src="{{site.url}}/assets/img/post/sql11.jpg">
<img src="{{site.url}}/assets/img/post/sql12.jpg">

- 객체 권한

<img src="{{site.url}}/assets/img/post/sql13.jpg">

### 권한 부여 및 회수

- 시스템 권한

```sql
-- 권한 부여
GRANT 권한 TO 유저;

-- 권한 회수
REVOKE 권한 FROM 유저;
```

```sql
GRANT CREATE SESSION, CREATE TABLE TO user01;
REVOKE CREATE SESSION, CREATE TABLE FROM user01;
```

- 객체 권한

```sql
-- 권한 부여
GRANT 권한 ON 객체 TO 유저;
```

```sql
-- scott --
GRANT UPDATE(loc) ON dept TO user01;

-- user01 --
UPDATE scott.dept
SET dname = '인사'; -- error!

UPDATE scott.dept
SET loc = 'AAA';

```

- WITH GRANT OPTION 사용하면 부여받은 권한을 다른 사용자에게 부여할 수 있음
  - REVOKE로 권한 회수 시 WITH GRANT OPTION에 의해 다른 사람에게 부여된 권한도 연쇄적으로 회수됨

```sql
-- scott --
GRANT SELECT, INSERT
ON dept
TO user01
WITH GRANT OPTION;

-- user01 --
GRANT SELECT
ON scott.dept
TO public;
```

### 롤(Role)

- 롤(Role): 권한들의 묶음

  - 일반 사용자에게 권한을 부여 및 회수하듯이 롤에게 권한 부여 및 회수가 가능함
  - 롤은 시스템 권한과 객체 권한으로 구성됨
  - 각 사용자에게 부여된 롤은 활성화/비활성화가 가능함
  - 특정 사용자가 소유하는 것이 아니므로 어떤 스키마에도 저장되지 않음

- 롤 장점
  - 편리한 권한 관리
  - 동적 권한 관리
    - 롤과 관련된 권한이 변경화면 롤 부여받은 모든 사용자들의 권한이 자동으로 변경됨
  - 권한의 선택적 가용성 (활성화/비활성화 가능)

<img src="{{site.url}}/assets/img/post/sql14.jpg">

```sql
GRANT CONNECT, RESOURCE TO tester01;
```

- 기존에 있는 롤 말고도 직접 롤을 만들수 있음

```sql
-- 3가지 권한 가진 롤 생성
CREATE ROLE clerk;

GRANT create session, create table
TO clerk;

GRANT select
ON scott.dept
TO clerk;

-- user03에게 롤 부여
GRANT clerk TO user03;
```

- 부여된 권한 확인

```sql
-- 시스템 권한 확인
SELECT grantee, privilege FROM dba_sys_privs
WHERE grantee = 'CLERK';

-- 객체 권한 확인
SELECT grantee, privilege FROM dba_tab_privs
WHERE grantee = 'CLERK';
```

### 계정 잠금

- 기존 계정의 잠금/잠금 해제

```sql
ALTER USER scott ACCOUNT LOCK;
ALTER USER 사용자명 ACCOUNT UNLOCK;
```

## 중요내용 정리

- 아래 세가지 명령어만 잘 알아둬도 유저 생성 및 권한부여는 됨

```sql
CREATE USER tester01 IDENTIFIED BY test;
ALTER USER tester01 IDENTIFIED BY tester01;
GRANT CONNECT, RESOURCE TO tester01;
```
