<template>
  <headerComp></headerComp>
  <main>
    <mainPage></mainPage>
    <aboutMePage></aboutMePage>
    <skillsPage></skillsPage>
    <careerPage></careerPage>
    <capabilityPage></capabilityPage>
  </main>
  <footerComp></footerComp>
</template>

<script setup>
import headerComp from "@/layouts/header.vue";
import footerComp from "@/layouts/footer.vue";
import mainPage from "@/pages/mainPage.vue";
import aboutMePage from "@/pages/aboutMePage.vue";
import skillsPage from "@/pages/skillsPage.vue";
import careerPage from "@/pages/careerPage.vue";
import capabilityPage from "@/pages/capabilityPage.vue";

import "@/css/reset.css";
import "@/css/app.scss";
</script>

<style scoped></style>
