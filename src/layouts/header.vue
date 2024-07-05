<template>
  <header class="header">
    <div class="gnb">
      <ul @click="menuClick">
        <li data-menu="mainWrap">Home</li>
        <li data-menu="aboutMeWrap">About me</li>
        <li data-menu="skillsWrap">Skills</li>
        <li data-menu="careerWrap">Career</li>
        <li data-menu="capaWrap">Capability</li>
      </ul>
    </div>
    <div class="mobileGnb">
      <div :class="['mobileGnb_icon', !isOpen ? 'visible' : 'nonVisible']">
        <button @click="toggleMobileMenu">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
      </div>
      <div
        :class="['mobileGnb_bg', isOpen ? 'mobileGnb_open' : 'mobileGnb_close']"
      >
        <ul class="mobileGnb_inner" @click="menuClick">
          <font-awesome-icon
            icon="fa-solid fa-x"
            @click.stop="toggleMobileMenu"
          />
          <li data-menu="mainWrap">Home</li>
          <li data-menu="aboutMeWrap">About me</li>
          <li data-menu="skillsWrap">Skills</li>
          <li data-menu="careerWrap">Career</li>
          <li data-menu="capaWrap">Capability</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const menuClick = (event) => {
  isOpen.value = false;
  controlScroll();

  if (event.target.tagName.toLowerCase() === "li") {
    const menuNm = event.target.closest("li").getAttribute("data-menu");

    if (menuNm) {
      scrollToMenu(menuNm);
    }
  }
};

const scrollToMenu = (menuNm) => {
  const menuHeight = document.querySelector(".header").offsetHeight;
  const topLocation =
    document.querySelector("." + menuNm).offsetTop - menuHeight;
  window.scrollTo({ top: topLocation, behavior: "smooth" });
};

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
  controlScroll();
};

const controlScroll = () => {
  if (isOpen.value) {
    document.body.style.overflow = "hidden";
    document.querySelector(".mobileGnb_inner").classList.add("trans");
  } else {
    document.body.style.overflow = "auto";
    document.querySelector(".mobileGnb_inner").classList.remove("trans");
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 999;
}
.gnb {
  position: fixed;
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1.5rem;
  text-align: center;
  box-shadow: 0 0 0.5rem hsl(0deg 0% 75% / 80%);
  z-index: 999;
  ul li {
    display: inline-block;
    padding: 1.5rem 2rem;
    font-weight: 500;
    cursor: pointer;
  }
}
.mobileGnb {
  display: none;
  text-align: right;
  position: fixed;
  .mobileGnb_icon {
    width: 100vw;
    opacity: 0.9;
    background: rgba(255, 255, 255, 0.9);
    button {
      background: none;
      border: none;
      padding: 0.5rem;
    }
  }
  .visible {
    display: block;
  }
  .nonVisible {
    display: none;
  }
  .mobileGnb_bg {
    width: 100%;
    height: 100%;
    background: #333;
    .trans {
      transform: translateX(-200px);
      transition-duration: 0.7s;
    }
  }
  .mobileGnb_open {
    visibility: inherit;
    background: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    text-align: right;
    ul {
      background: white;
      width: 40vw;
      height: 100vh;
      position: absolute;
      right: -200px;
      padding: 1rem;
      li {
        padding-top: 1.5rem;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }
  .mobileGnb_close {
    visibility: hidden;
  }
}

@media (max-width: 750px) {
  .gnb {
    font-size: 1rem;
    ul li {
      padding: 1rem;
    }
  }
}
@media (max-width: 500px) {
  .gnb {
    display: none;
  }
  .mobileGnb {
    display: block;
  }
}
</style>
