<template>
  <div
    v-for="(items, category) in skillsList"
    :key="category"
    class="skillsItemArea"
  >
    <h2 class="skillsCategory">{{ category }}</h2>
    <ul>
      <li v-for="(item, index) in items" :key="item">
        <img :src="`/src/assets/images/skills/${category}_${index + 1}.png`" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  skillsList: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.skillsItemArea {
  display: block;
  text-align: left;
  font-size: 1.5rem;
  margin: 2rem 0;
  border: 1px solid;
  border-radius: 10px;
  padding: 2rem 3rem;
  .skillsCategory {
    font-size: 2rem;
    font-weight: 500;
  }
}
</style>
