# GoldenGlobe

## 프로젝트 개요

이 프로젝트는 시니어와 그 가족들이 효율적으로 여행을 준비할 수 있도록 돕는 LLM과 RAG 기반의 맞춤형 여행 챗봇 및 체크리스트 서비스입니다.
시니어가 여행지 정보를 쉽게 파악하고 준비할 수 있도록 돕는 챗봇 기능과, 여행지에 맞춘 공유 체크리스트 기능을 통해 여행 준비의 효율성을 높입니다.

### 주요 기능

1. 챗봇
   - 유저가 여행 pdf를 입력합니다.
   - 유저를 통해 챗봇 질문을 입력받고 챗봇 api를 통해 답변을 보여줍니다.
2. 체크리스트
   - pdf기반 준비물을 보여줍니다.
   - 준비물 그룹과 아이템을 적고 체크합니다.
   - 메모를 통해 가족과 간단히 소통할 수 있습니다.
   - 가족과 체크리스트를 공유할 수 있습니다.

### 사용 기술

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant%20Design-0170FE?style=flat-square&logo=ant-design&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=react-router&logoColor=white)

---

## 시작하기

### 사전준비
프론트를 실행하기 전에 서버 실행이 선행되어야 합니다. <br>
서버 실행관련한 깃헙 레포를 첨부합니다.
- 백앤드
```
https://github.com/Capstone03-GoldenGlobe/BE.git
```
- AI
```
https://github.com/Capstone03-GoldenGlobe/AI.git
```
### How to Build

1. Repository 클론

```
`https://github.com/Capstone03-GoldenGlobe/FE.git`
```

 <br>
 2. npm i 
 
 ```
npm install
 ```
- git clone을 하면 npm 패키지가 없기 때문에 설치가 필요합니다. 
- npm이 있는 폴더에서 npm i 를 진행해야합니다.
- 설치가 완료되면 package-lock.json 과  package.json 파일이 생성됩니다.

 <br>
3. 빌드

```
npm start
```

터미널에서 npm start를 실행하면 웹 페이지를 빌드할 수 있습니다. <br>

### How to Install

1. 프로젝트 생성

```
npx create-react-app golden-globe
cd golden-globe
```

2. 라이브러리 설치

```
npm install styled-components
npm install axios
npm install antd
npm install react-router-dom
```

### How to Test<br>

유저의 flow대로 실제 서비스를 사용하며 테스트합니다.

---

## 🌱 담당 기능

|                 🍀 이름                  | 🍀 담당 기능                                                                                                                                                                                                                                                           |
| :--------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [김현수](https://github.com/SSSSSSu3834) | - **로그인/회원가입 페이지 개발**<br>- **메인페이지 개발**<br>- **마이페이지 개발**<br>- **챗봇 페이지 개발**<br>- **체크리스트 페이지 개발**<br>- **공용 컴포넌트 제작**: 모달, 체크박스, 버튼, Input Box 등<br>- **API 연결**: 클라이언트와 서버 간 데이터 통신 구현 |

## 🗂️ 폴더 구조

```
📂 goldenglob/
│
├─ 📂 node_modules  ▶️ Node.js dependencies
│
├─ 📂 public  ▶️ Public files
│
├─ 📂 src  ▶️ Source files
│   ├─ 📂 api  ▶️ API 파일 모음
│   ├─ 📂 assets  ▶️ Assets (이미지)
│   ├─ 📂 components  ▶️ Reusable React components
│   ├─ 📂 pages  ▶️ React pages (routes)
│   ├─ 📂 style  ▶️ Global styles
│   ├─ 📂 app.js  ▶️ 페이지 라우팅
│   ├─ 📂 index.js
│
└─ 📂 package.json  ▶️ Project dependencies and scripts

```

<br>

## 📚 오픈소스

## Frontend Libraries & Tools

1. **React**: [React Official Site](https://reactjs.org/)
2. **Ant Design**: [Ant Design Official Site](https://ant.design/)
3. **React Router**: [React Router Official Site](https://reactrouter.com/)
4. **Axios**: [Axios Official Site](https://axios-http.com/)
5. **Styled Components**: [Styled Components Official Site](https://styled-components.com/)
6. **Prettier**: [Prettier Official Site](https://prettier.io/)
