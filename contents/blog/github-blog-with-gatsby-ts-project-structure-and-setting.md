---
date: '2023-04-26'
title: 'Gatsby와 Typescript로 깃허브 블로그 만들기(2) - 프로젝트 구조 및 개발환경 세팅하기'
categories: ['Blog', 'Gatsby', 'React', 'Typescript']
summary: '블로그 개발일지'
thumbnail: '../images/thumbnail/gatsby.webp'
---

## 프로젝트 구조

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```txt
src/
| components/
|	| Common/
|	| | - GlobalStyle.tsx
|	| | - Template.tsx
|	| | - Header.tsx
|	| | - Footer.tsx
|	| | - SideNavigation.tsx
|	| | - LoadingAnimation.tsx
|	| | - ScrollIndicator.tsx
|	| | - ViewportHeightSetter.tsx
|	| Main/
|	| | - MainCheeseBall.tsx
|	| | - PostList.tsx
|	| | - PostItem.tsx
|	| Post/
|	| | - PostHead.tsx
|	| | - PostHeadInfo.tsx
|	| | - Waves.tsx
|	| | - TableOfContents.tsx
|	| | - PostContent.tsx
|	| | - CommentWidget.tsx
|	| SideNav/
|	| | - CategoryList.tsx
|	| | - Introduction.tsx
|	| | - LinkIcon.tsx
|	| | - LinkIconList.tsx
|	| | - ProfileImage.tsx
| contexts/
| | - SideBarContext.tsx
| | - SideBarProvider.tsx
| hooks/
| | - useInfiniteScroll.tsx
| | - useLoading.tsx
| | - useViewportHeight.tsx
| pages/
| | - index.tsx
| | - 404.tsx
| templates/
| | - post_template.tsx
| types/
| | - PostItem.types.ts
static/
contents/
gatsby-browser.js
gatsby-config.js
gatsby-node.js
gatsby-ssr.js
tsconfig.json
...
```

폴더 구조

- **src** : 소스 폴더
- **static** : 파비콘, 아이콘, lottie 등 이미지 소스 저장
- **contents** : 블로그 게시글 마크다운 파일과 게시글에 쓰일 이미지 저장

설정 파일

- **gatsby-config.js** : gatsby 사이트의 기본 config 파일로, 각종 플러그인 설치 및 일반적인 세팅이 가능함
- **gatsby-browser.js** : gatsby의 브라우저 관련 api들을 구현 가능하며, 페이지 컴포넌트들을 추가적인 글로벌 컴포넌트로 감쌀 수 있음
- **gatsby-node.js** : gatsby의 노드 관련 api들을 구현 가능함
- **gatsby-ssr.js** : 서버 측에서 렌더링된 정적 html 파일의 내용을 변경할 수 있음
- **tsconfig.json** : 타입스크립트 설정

---

## 개발 환경 세팅

### 타입스크립트

프로젝트에 타입스크립트 설치하기

```shell
yarn add typescript --dev
```

gatsby 에서 타입스크립트를 쓰기 위해 플러그인도 설치해 주어야 한다.

```shell
yarn add gatsby-plugin-typescript
```

gatsby-config.js 파일에서 plugins 배열에 설치한 플러그인을 추가해준다.

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```js
plugins: [
	{
		resolve: 'gatsby-plugin-typescript',
		options: {
			isTSX: true,
			allExtensions: true,
		},
	},
	...
]
```

tsconfig.json 파일 생성 후 타입스크립트 옵션 세팅

```shell
yarn tsc --init
```

<div class="code-header">
	<span class="red btn"></span>
	<span class="yellow btn"></span>
	<span class="green btn"></span>
</div>

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "allowJs": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "baseUrl": "./src",
    "paths": {
      "components/*": ["./components/*"],
      "utils/*": ["./utils/*"],
      "hooks/*": ["./hooks/*"],
      "contexts/*": ["./contexts/*"]
    },
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*.tsx"],
  "exclude": ["node_modules"]
}
```

[tsconfig 로 컴파일 옵션 설정하기](https://yamoo9.gitbook.io/typescript/cli-env/tsconfig)

여기서, paths 옵션에 추가한 매핑 경로를 사용하기 위해선 gatsby-node.js 에서 Webpack Config를 추가해줘야 한다.

```js
// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        contexts: path.resolve(__dirname, 'src/contexts'),
      },
    },
  });
};
```

aliases 의 키로 시작하는 경로를 path.resolve 안의 경로로 매핑시켜서, 절대 경로를 사용할 수 있도록 해준다.

##  사이트 데이터와 파일 경로 설정

gatsby-config.js 파일의 siteMetadata 에 블로그에 대한 정보를 적는다.
이는 이후에 사이트의 메타 태그에 넣어서, 검색 결과로 노출될 수 있도록 할 것이다.

```js
module.exports = {
  siteMetadata: {
    title: '개발자맛 치즈볼',
    description: '주니어 프론트엔드 개발자의 개발일기 입니다.',
    author: 'CheeseB',
    siteUrl: 'https://cheeseb.github.io/',
  },
  plugins: [
		...
```

게시글 마크다운 파일이 위치한 경로를 탐색할 수 있도록 'gatsby-source-filesystem' 설정 옵션을 변경한다.

```js
plugins: [
	...
	{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `contents`,
			path: `${__dirname}/contents`,
		},
	},
	...
]
```

## Eslint, Prettier 설정

VSCode에 확장 프로그램을 설치한 후,   
필요한 라이브러리 설치

```shell
yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest --dev
```

### ESlint 세팅

루트 디렉토리에 .eslintrc.json 파일 생성 후 세팅

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["react", "@typescript-eslint"],
  "ignorePatterns": ["dist/", "node_modules/"],
  "rules": {}
}
```

.eslintignore 파일을 생성해서 린트를 무시할 파일들을 명시

```txt
gatsby-browser.js
gatsby-config.js
gatsby-node.js
gatsby-ssr.js
```

### Prettier 세팅

.prettierrc 파일 생성 후, 코드 포맷팅 규칙 적용하기

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

VSCode 의 settings 에서 Format On Save 옵션을 키면 파일 저장시 자동으로 코드 포맷팅을 한다.   
포맷팅이 적용되면 안되는 파일들은 .prettierignore 파일에 명시해둔다.

```txt
.cache
package.json
package-lock.json
public
*.md
```

마크다운에선 문장 마지막에 띄어쓰기를 3번 이상 쓰면 줄바꿈이 되는데, prettier가 적용되면 저장할때 자동으로 마지막 공백을 없애버려서 줄바꿈이 제대로 되지 않는다. 그러므로 prettierignore에 md 파일도 명시해 두는 것을 추천한다.

## 참고 링크

[주현도 - React 기반 Gatsby로 기술 블로그 개발하기](https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8/dashboard)