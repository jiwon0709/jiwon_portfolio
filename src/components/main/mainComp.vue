<template>
  <section class="mainWrap">
    <div class="mainImg">
      <img src="@/assets/images/main_code_cut.PNG" />
    </div>
    <div class="mainExp">
      <p>안녕하세요</p>
      <p>프론트엔드 개발자 오지원 입니다</p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.mainWrap {
  background: #011627;
  text-align: center;
}
.mainExp p {
  margin: 0;
  color: white;
  font-weight: bold;
  line-height: 4rem;
  &:first-child {
    font-size: 3rem;
  }
  &:nth-child(2) {
    font-size: 3rem;
  }
}
</style>
