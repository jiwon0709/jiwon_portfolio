<template>
  <div
    v-for="(items, category) in skillsList"
    :key="category"
    class="skillsItemArea"
  >
    <h2 class="skillsCategory">{{ category }}</h2>
    <ul :class="category">
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
  margin: 3rem 0;
  background: white;
  border-radius: 10px;
  padding: 2.5rem 3rem;
  .skillsCategory {
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 2rem;
  }
  .FrontEnd {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 14%;
      img {
        width: 90%;
        aspect-ratio: 1;
      }
    }
  }
  .BackEnd,
  .Cooperation {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 22%;
    }
  }
  li {
    display: inline-block;
    text-align: center;
    img {
      width: 90%;
      aspect-ratio: 1;
      border: 3px solid #e0e0e0;
      border-radius: 20px;
      padding: 5px;
    }
    p {
      padding: 0.5rem 0;
      font-weight: 500;
    }
  }
}

@media (max-width: 1200px) {
  .skillsItemArea {
    font-size: 1rem;
    .skillsCategory {
      font-size: 1.5rem;
    }
    .FrontEnd {
      li {
        flex: 0 1 30%;
      }
    }
  }
}
@media (max-width: 650px) {
  .skillsItemArea {
    .FrontEnd,
    .BackEnd,
    .Cooperation {
      li {
        flex: 0 1 40%;
      }
    }
  }
}
</style>
