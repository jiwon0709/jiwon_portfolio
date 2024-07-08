<template>
  <div class="capaItemArea">
    <template v-for="(category, index) in capaList" :key="index">
      <span class="capaItemTitle">📌 {{ category.category }}</span>
      <ul>
        <li v-for="(item, itemIndex) in category.items" :key="itemIndex">
          <span class="capaItemList">▎{{ item.title }}</span>
          <span class="capaItemDetail">
            <p v-for="(detail, detailIndex) in item.details" :key="detailIndex">
              {{ detail }}
            </p>
          </span>
        </li>
      </ul>
      <hr v-if="index !== capaList.length - 1" />
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  capaList: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.capaItemArea {
  padding: 2rem 0;
  text-align: left;
  hr {
    margin: 4rem 0;
  }
  .capaItemTitle {
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  li {
    padding: 2.5rem 0 0 0;
    line-height: 2rem;
    .capaItemList {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .capaItemDetail {
      display: block;
      padding: 0 2rem;
      p {
        position: relative;
        padding-left: 20px;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          background: black;
          border-radius: 50%;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .capaItemArea {
    .capaItemTitle {
      font-size: 1.5rem;
    }
    li {
      .capaItemList {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
