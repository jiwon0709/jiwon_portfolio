<template>
  <section class="mainWrap">
    <div class="mainExp">
      <div class="mainTextWrap">
        <p>Welcome to jiwon's portfolio.</p>
        <p>I'm a front-end developer.</p>
        <span></span>
      </div>
      <div class="mainArrowArea" @click="moveScroll">
        <img src="../assets/images/white_arrow.png" />
      </div>
    </div>
  </section>
</template>

<script setup>
const moveScroll = () => {
  const menuHeight = document.querySelector(".header").offsetHeight;
  const topLocation =
    document.querySelector(".aboutMeWrap").offsetTop - menuHeight;
  window.scrollTo({ top: topLocation, behavior: "smooth" });
};
</script>

<style lang="scss" scoped>
.mainWrap {
  text-align: center;
  height: 100vh;
  padding: 0;
}
.mainExp {
  background-image: url("../assets/images/main_background.gif");
  background-attachment: fixed;
  height: 100%;
  background-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  .mainArrowArea {
    width: 3rem;
    height: 3rem;
    position: relative;
    top: 30%;
    cursor: pointer;
    img {
      width: 100%;
      transform: rotate(90deg);
    }
  }
}
</style>
