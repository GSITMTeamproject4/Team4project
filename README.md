# 🚗 React SPA를 활용한 교통안전 프로젝트

![gsitm4조](https://github.com/GSITMTeamproject4/Team4project/assets/121008744/65214c32-2526-4d86-882b-7005f4c867c4)

## ⭐️ 프로젝트 소개
* 최적의 보행자 경로를 시각화하여 상세 경로 안내와 예상 소요 시간을 제공합니다.
* 지하철 역명을 검색하여 승강기 위치와 출입구 정보를 제공합니다.
* 경기도 내 사고다발지역을 지도에 표시하고, 각 도시 별 교통사고 사건 횟수를 제공합니다.
* 제보 게시판을 통해 제보를 받습니다.

## ⭐️ 개발 환경
<div>
  <!--Html5-->
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/>
  <!--Css-->
  <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>
  <!--javascript-->
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>
  <!--JQuery-->
  <img src="https://img.shields.io/badge/JQuery-0769AD?style=flat&logo=jQuery&logoColor=white"/>
  <!--React-->
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white">
</div>

## ⭐️ 프로젝트 구조
```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── images
│   └── index.html
├── read.md
├── src
│   ├── App.js
│   ├── components
│   │   ├── Accident.js
│   │   ├── Chart.js
│   │   ├── Community.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── Layout.js
│   │   ├── MapContext.js
│   │   ├── Menu.js
│   │   ├── Navigation.js
│   │   ├── Pagination.js
│   │   ├── PostContext.js
│   │   ├── Road.js
│   │   ├── StaticChild.js
│   │   ├── StaticOld.js
│   │   ├── StationInfo.js
│   │   ├── TMap.js
│   │   ├── TMap2.js
│   │   ├── TMap3.js
│   │   ├── TopButton.js
│   │   ├── Welfare.js
│   │   ├── WelfareTMap.js
│   │   ├── WriteBoard.js
│   │   ├── background
│   │   │   ├── BackgroundAcc.js
│   │   │   ├── BackgroundCommunity.js
│   │   │   ├── BackgroundNav.js
│   │   │   └── BackgroundWel.js
│   │   └── setupProxy.js
│   ├── css
│   │   ├── Accident.scss
│   │   ├── Background.scss
│   │   ├── Chart.scss
│   │   ├── Community.scss
│   │   ├── Footer.scss
│   │   ├── Header.scss
│   │   ├── Home.scss
│   │   ├── Layout.scss
│   │   ├── Menu.scss
│   │   ├── Navigation.scss
│   │   ├── Pagination.scss
│   │   ├── Road.scss
│   │   ├── StationInfo.scss
│   │   ├── TMap.scss
│   │   ├── TMap2.scss
│   │   ├── TMap3.scss
│   │   ├── TopButton.scss
│   │   ├── Welfare.scss
│   │   ├── WelfareTMap.scss
│   │   ├── WriteBoard.scss
│   │   └── reset.scss
│   └── index.js
└── yarn.lock
```

## ⭐️ 역할 분담
### 👩 하가영
* 팀원 의견 조율
* 전반적인 CSS 구현

### 🧑 김영준
* 최적 경로를 시각화하고 상세 경로 제공 서비스 구현
* 사고 다발 지역 구현 및 차트를 통한 시각화 구현

### 👩 변하영
* 게시판 작성 페이지 구현
* 게시판 페이징 처리 구현
  
### 👩 유혜린
* 지하철 역 검색 기능 구현
* 승강기 데이터를 받아 필요한 데이터 화면 출력 구현

### 👩 유혜원
* 승강기 현황 데이터 추출 후 데이터 확인 작업
* 제보 게시판 디자인 구현

### 👩 정유진
* 게시글 번호, 날짜 기능 구현
* top-scroll 기능 구현

## ⭐️ 개발 기간
* 전체 개발 기간 : 2024-05-28 ~ 2024-06-04
* 기획 및 설계 : 2024-05-28 ~ 2024-05-31
* 기능 구현 : 2024-06-01 ~ 2024-06-04
