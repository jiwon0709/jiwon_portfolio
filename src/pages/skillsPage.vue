<template>
  <section class="skillsWrap">
    <div class="skillsArea">
      <span class="sectionTitle">Skills</span>
      <skillsItem :skillsList="skillsList"></skillsItem>
    </div>
  </section>
</template>

<script setup>
import skillsItem from "@/components/skills/skillsItem.vue";
const skillsList = {
  FrontEnd: ["HTML", "CSS", "Javascript", "Sass", "Vue", "jQuery"],
  BackEnd: ["Java", "Spring Framework", "PostgreSQL", "Oracle"],
  Cooperation: ["Github", "SVN", "Figma", "Zeplin"],
};
</script>

<style lang="scss" scoped>
.skillsWrap {
  background: #e0e0e0;
}
.skillsArea {
  width: 65vw;
  margin: 0 auto;
}
</style>
