<template>
  <section class="careerWrap">
    <div class="careerArea">
      <span class="sectionTitle">Career</span>
      <div class="careerContent">
        <div class="careerImgArea">
          <img src="/src/assets/images/company_logo_1.png" />
        </div>
        <div class="careerTextArea">
          <p id="companyNm">
            에스큐아이소프트(주)<span id="companyPeriod"
              ><font-awesome-icon icon="fa-regular fa-calendar" /> &nbsp;2020.03
              ~ 재직중</span
            >
          </p>
          <p>에너지사업부 선임</p>
          <p>주요업무 : 에너지 플랫폼 개발 및 유지보수</p>
        </div>
      </div>
      <hr />
      <div class="projectContent">
        <div>
          <span>▎건물성능개선사업 (2024.01~2024.05)</span>
          <p>
            개요 : 국토안전관리원에서 수행하는 건물성능개선사업을 관리할 수 있는
            웹 플랫폼
          </p>
          <p>사용기술 : Vue.js, Spring boot</p>
          <p>담당업무 : 프론트엔드 및 백엔드 개발</p>
        </div>
        <div>
          <span>▎LH 스마트홈 플랫폼 (2023.01 ~ 2023.06)</span>
          <p>개요 : LH 주택의 IOT 스마트홈 시스템을 관리할 수 있는 웹 플랫폼</p>
          <p>사용기술 : Vue.js</p>
          <p>담당업무 : 프론트엔드 개발</p>
        </div>
        <div>
          <span>▎광역 검진 서비스 플랫폼 (2022.07 ~ 2023.12)</span>
          <p>
            개요 : 건물의 에너지 정보를 통해 건물 에너지 케어 서비스를 받을 수
            있는 웹 플랫폼
          </p>
          <p>사용기술 : Vue.js, Spring boot</p>
          <p>담당업무 : 프론트엔드 및 백엔드 개발</p>
        </div>
        <div>
          <span>▎건물 에너지 진단 플랫폼 (2022.01 ~ 2022.06)</span>
          <p>개요 : 건물 데이터로 에너지 현황을 진단하는 웹 플랫폼</p>
          <p>사용기술 : Javascript, jQuery, HTML/CSS, 전자정부프레임워크</p>
          <p>담당업무 : 프론트엔드 및 백엔드 개발</p>
        </div>
        <div>
          <span>▎건축물에너지소요량 간이 평가 시스템 (2021.05 ~ 2021.12)</span>
          <p>개요 : 건축물 정보를 통해 에너지 소요량을 평가하는 플랫폼</p>
          <p>사용기술 : Javascript, jQuery, HTML/CSS, 전자정부프레임워크</p>
          <p>담당업무 : 퍼블리싱, 프론트엔드 및 백엔드 개발</p>
        </div>
        <div>
          <span>▎녹색건축인증시스템 고도화 (2021.01 ~)</span>
          <p>개요 : 건축물의 녹색건축인증 업무를 수행하는 웹 사이트</p>
          <p>사용기술 : Javascript, jQuery, HTML/CSS, 전자정부프레임워크</p>
          <p>
            담당업무 : 프로젝트 매니저로서 프로젝트 계획 수립 및 일정 관리,
            프론트엔드 및 백엔드 개발, 운영
          </p>
        </div>
        <div>
          <span>▎건물에너지서비스 통합 플랫폼 (2020.06 - 2020.12)</span>
          <p>개요 : 건물의 에너지 운영 효율 분석 정보를 제공하는 웹 플랫폼</p>
          <p>사용기술 : Javascript, jQuery, HTML/CSS, 전자정부프레임워크</p>
          <p>담당업무 : 관리자 페이지 개발 및 유지보수</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.careerWrap {
  background: #232323;
  color: white;
  .careerArea {
    width: 65vw;
    margin: 0 auto;
    .careerContent {
      padding: 3rem 0;
      display: flex;
      align-items: center;
      .careerImgArea {
        display: inline-block;
        width: 40%;
        text-align: left;
        img {
          width: 70%;
          border-radius: 10px;
        }
      }
      .careerTextArea {
        display: inline-block;
        width: 60%;
        text-align: left;
        font-size: 1.2rem;
        line-height: 2rem;
        #companyNm {
          font-weight: 500;
          font-size: 1.8rem;
        }
        #companyPeriod {
          padding-left: 20px;
          font-size: 1rem;
        }
      }
    }
    .projectContent {
      padding: 1rem 0;
      line-height: 2rem;
      font-size: 1.2rem;
      text-align: left;
      div {
        padding: 2rem 0;
        span {
          font-weight: bold;
        }
        p {
          color: #bbbbbb;
          font-size: 1.1rem;
          position: relative;
          padding-left: 1.2rem;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 5px;
            height: 5px;
            background: #bbbbbb;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
