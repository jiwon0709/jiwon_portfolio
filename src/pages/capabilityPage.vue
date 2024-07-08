<template>
  <section class="capaWrap">
    <div class="capaArea">
      <span class="sectionTitle">Capability</span>
      <capabilityItem :capaList="capaList"></capabilityItem>
    </div>
  </section>
</template>

<script setup>
import capabilityItem from "@/components/capability/capabilityItem.vue";

const capaList = [
  {
    category: "시스템 및 성능 개선",
    items: [
      {
        title: "커스텀 셀렉트 박스 구현으로 초기 페이지 로딩 속도 개선",
        details: [
          "사용자가 정확한 데이터를 알지 못해도 검색하여 데이터를 찾을 수 있도록 input 태그를 이용한 내부 검색 기능 구현",
          "2만여개의 데이터 조회로 페이지 로딩 속도가 느린 문제를 해결하기 위하여 셀렉트 박스를 커스텀하여 초기 페이지 로딩 속도 개선",
        ],
      },
      {
        title: "사용자 편의성 증대를 위한 UI 개선",
        details: [
          "사용자가 이해하기 쉽도록 텍스트를 최소화하고 시각적 데이터 중심으로 페이지 개편",
          "Chart.js, Highchart를 활용한 데이터 시각화로 명확하고 직관적인 정보 전달",
        ],
      },
      {
        title:
          "메타 태그를 이용한 검색엔진 최적화로 검색 사이트의 상위 노출도 향상",
        details: [
          "녹색건축 인증 시스템의 구글 검색 시 2페이지에서 첫 페이지 최상단에, 네이버 검색 시 '검색결과 더보기'를 눌러야 나오던 사이트를 첫 페이지에 표시",
        ],
      },
    ],
  },
  {
    category: "생산성 향상",
    items: [
      {
        title: "vuex, pinia를 이용한 상태 관리 및 컴포넌트 간 복잡도 개선",
        details: [
          "불필요한 상태 변경을 줄이고, 필요한 경우에만 리렌더링 하도록 최적화",
        ],
      },
      {
        title: "재사용 및 확장 가능한 vue 컴포넌트 개발",
        details: [
          "컴포넌트 설계 시 ‘단일책임원칙’을 준수하여 각 컴포넌트가 하나의 기능만 수행하도록 설계",
          "여러 프로젝트에서 반복적으로 사용되는 기능인 주소 검색 기능 컴포넌트를 개발하여 재사용함으로써 개발 기간 단축",
        ],
      },
    ],
  },
  {
    category: "기술 습득 및 적용",
    items: [
      {
        title:
          "새로운 기술인 Vue.js를 사용하는 프로젝트에 참여하여 성공적으로 수행",
        details: [
          "Vue.js 공식문서와 인터넷 강의를 활용하여 단기간에 기술 습득",
          "Vue2를 이용한 프로젝트 진행 후 최신 기술 적용을 위해 Vue3 도입",
          "팀 내 Vue.js 기술을 전파하여 이후 진행하는 프로젝트에 점진적으로 Vue.js 도입",
        ],
      },
    ],
  },
  {
    category: "협업 및 커뮤니케이션",
    items: [
      {
        title:
          "개발 환경, 프로그램 명세서, WBS, 테스트 시나리오 등 프로젝트 진행과정의 문서화 담당",
        details: ["중간 투입인력 및 유지보수 인력의 업무 이해 시간 단축"],
      },
      {
        title: "디자이너와 Figma, Zeplin을 이용하여 협업",
      },
      {
        title: "이해관계가 다른 고객사, 기획자, 개발자간의 의견차이 해결",
        details: [
          "녹색 건축 인증 시스템의 PM을 맡아 디자인 개편 진행 시, 디자인 외주사와 소통하며 디자이너-개발자 사이에 생길 수 있는 의견 차이를 원만하게 조율",
        ],
      },
    ],
  },
  {
    category: "운영 및 유지보수",
    items: [
      {
        title: "오래된 시스템의 코드 리팩토링을 통한 가독성 향상",
      },
      {
        title:
          "건물 에너지 서비스 플랫폼, 녹색 건축 인증 시스템 등 다수의 시스템 운영 및 유지보수",
        details: [
          "사이트를 운영하며 발생하는 민원의 근본적인 원인을 파악하고 기능 개선을 통해 사용자 민원 월평균 60% 감소",
        ],
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.capaWrap {
  background: #f5f5f5;
}
.capaArea {
  width: 65vw;
  margin: 0 auto;
}
@media (max-width: 1200px) {
  .capaArea {
    width: 85vw;
  }
}
</style>
