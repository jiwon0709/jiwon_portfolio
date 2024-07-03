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
    <!-- <span class="capaItemTitle">📌 시스템 및 성능 개선</span>
    <ul>
      <li>
        <span class="capaItemList"
          >▎커스텀 셀렉트 박스 구현으로 초기 페이지 로딩 속도 개선</span
        >
        <span class="capaItemDetail">
          <p>
            사용자가 정확한 데이터를 알지 못해도 검색하여 데이터를 찾을 수
            있도록 input 태그를 이용한 내부 검색 기능 구현
          </p>
          <p>
            2만여 개의 데이터 조회로 페이지 로딩 속도가 느린 문제를 해결하기
            위하여 셀렉트 박스를 커스텀하여 초기 페이지 로딩 속도 개선
          </p>
        </span>
      </li>
      <li>
        <span class="capaItemList">▎사용자 편의성 증대를 위한 UI 개선</span>
        <span class="capaItemDetail">
          <p>
            사용자가 이해하기 쉽도록 텍스트를 최소화하고 시각적 데이터 중심으로
            페이지 개편
          </p>
          <p>
            Chart.js, Highchart를 활용한 데이터 시각화로 명확하고 직관적인 정보
            전달
          </p>
        </span>
      </li>
      <li>
        <span class="capaItemList"
          >▎메타 태그를 이용한 검색엔진 최적화로 검색 사이트의 상위 노출도
          향상</span
        >
        <span class="capaItemDetail">
          <p>
            녹색건축 인증 시스템의 구글 검색 시 2페이지에서 첫 페이지 최상단에,
            네이버 검색 시 '검색결과 더보기'를 눌러야 나오던 사이트가 첫
            페이지에 표시
          </p>
        </span>
      </li>
    </ul> -->
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
