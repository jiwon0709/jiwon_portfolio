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
        <p>{{ item }}</p>
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
  background: white;
  border-radius: 10px;
  padding: 2rem 3rem;
  .skillsCategory {
    font-size: 2rem;
    font-weight: 500;
  }
  li {
    display: inline-block;
    img {
      border: 2px solid #e0e0e0;
      border-radius: 20px;
    }
  }
}
</style>
