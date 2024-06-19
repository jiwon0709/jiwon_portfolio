<template>
  <main>
    <headerComp></headerComp>
    <mainPage></mainPage>
    <aboutMePage></aboutMePage>
    <skillsPage></skillsPage>
  </main>
</template>

<script setup>
import headerComp from "@/layouts/header.vue";
import mainPage from "@/pages/mainPage.vue";
import aboutMePage from "@/pages/aboutMePage.vue";
import skillsPage from "@/pages/skillsPage.vue";
import "@/css/reset.css";
import "@/css/app.scss";
</script>

<style scoped></style>
