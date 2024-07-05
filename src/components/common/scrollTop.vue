<template>
  <div v-if="isVisible" class="scrollTopBtn" @click="scrollToTop()">
    <img src="../../assets/images/arrow_yellow.png" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const checkScroll = () => {
  isVisible.value = window.scrollY >= 150;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style lang="scss" scoped>
.scrollTopBtn {
  width: 3rem;
  height: 3rem;
  position: fixed;
  bottom: 2rem;
  right: 1.5rem;
  cursor: pointer;
  img {
    width: 100%;
    transform: rotate(-90deg);
  }
}

@media (max-width: 750px) {
  .scrollTopBtn {
    width: 2rem;
    height: 2rem;
    position: fixed;
    bottom: 1rem;
    right: 0.5rem;
  }
}
</style>
