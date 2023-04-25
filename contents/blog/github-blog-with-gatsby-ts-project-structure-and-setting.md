---
date: '2023-04-26'
title: 'Gatsby와 Typescript로 깃허브 블로그 만들기(2) - 프로젝트 구조 및 개발환경 세팅하기'
categories: ['Blog']
summary: '블로그 개발일지'
thumbnail: '../images/thumbnail/gatsby.webp'
---

## 프로젝트 구조

- src/
	- components/
		- Common/
		- Main/
		- Post/
		- SideNav/
	- contexts/
	- hooks/
	- pages/
	- templates/
	- types/
- static/
- contents/
- gatsby-browser.js
- gatsby-config.js
- gatsby-node.js
- gatsby-ssr.js
- tsconfig.json
- 그 외 (package.json, .prettierrc 등등..) 

---

#### 참고 링크

[주현도 - React 기반 Gatsby로 기술 블로그 개발하기](https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8/dashboard)