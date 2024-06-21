<template>
  <section class="careerWrap">
    <div class="careerArea">
      <span class="sectionTitle">Career</span>
      <div class="careerContent">
        <div class="careerImgArea">
          <img src="/src/assets/images/company_logo.png" />
        </div>
        <div class="careerTextArea">
          <p id="companyNm">
            에스큐아이소프트(주)<span id="companyPeriod">2020.03 ~</span>
          </p>
          <p>에너지사업부 선임</p>
          <p>주요업무 : 에너지 플랫폼 개발 및 유지보수</p>
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
    width: 70vw;
    margin: 0 auto;
    .careerContent {
      padding: 3rem 0 0 0;
      display: flex;
      .careerImgArea {
        display: inline-block;
        width: 40%;
        img {
          width: 65%;
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
  }
}
</style>
