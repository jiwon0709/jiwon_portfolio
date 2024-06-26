<template>
  <header class="header">
    <ul @click="menuClick">
      <li data-menu="mainWrap">Home</li>
      <li data-menu="aboutMeWrap">About me</li>
      <li data-menu="skillsWrap">Skills</li>
      <li data-menu="careerWrap">Career</li>
      <li data-menu="capaWrap">Capability</li>
    </ul>
  </header>
</template>

<script setup>
const menuClick = (event) => {
  const menuNm = event.target.closest("li").getAttribute("data-menu");

  if (menuNm) {
    scrollToMenu(menuNm);
  }
};

const scrollToMenu = (menuNm) => {
  const menuHeight = document.querySelector(".header").offsetHeight;
  const topLocation =
    document.querySelector("." + menuNm).offsetTop - menuHeight;
  window.scrollTo({ top: topLocation, behavior: "smooth" });
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  height: auto;
  background: white;
  font-size: 1.5rem;
  text-align: center;
  opacity: 0.9;
  box-shadow: 0 0 0.5rem hsl(0deg 0% 75% / 80%);
  z-index: 999;
}
ul li {
  display: inline-block;
  padding: 1.5rem 2rem;
  font-weight: 500;
  cursor: pointer;
}
</style>
