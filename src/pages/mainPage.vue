<template>
  <section class="mainWrap">
    <div class="mainExp">
      <div class="mainTextWrap">
        <p>Welcome to jiwon's portfolio</p>
        <p>I'm a front-end developer.</p>
        <span></span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.mainWrap {
  text-align: center;
  height: 100vh;
  padding: 0;
}
.mainExp {
  background-image: url("../assets/images/main_background.gif");
  height: 100%;
  background-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .mainTextWrap {
    p {
      margin: 0;
      color: white;
      font-weight: bold;
      line-height: 4rem;
      font-size: 3rem;
      opacity: 0.9;
    }
  }
}
</style>
