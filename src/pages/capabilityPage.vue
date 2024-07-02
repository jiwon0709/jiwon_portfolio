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
      },
      {
        title: "재사용 및 확장 가능한 vue 컴포넌트 개발",
      },
      {
        title: "행정안전부 주소 검색 API를 이용한 주소 검색 기능 모듈화",
        details: [
          "여러 프로젝트에서 반복적으로 사용되는 기능으로 공통 모듈로 분리하여 후속 프로젝트의 개발 기간 단축",
        ],
      },
    ],
  },
  {
    category: "기술 습득 및 적용 능력",
    items: [
      {
        title:
          "새로운 기술인 Vue를 사용하는 프로젝트에 참여하여 단기간에 습득 후 프로젝트를 성공적으로 수행",
      },
    ],
  },
  {
    category: "협업 및 커뮤니케이션",
    items: [
      {
        title:
          "개발 환경, 프로그램 명세서, WBS, 테스트 시나리오 등 프로젝트의 전반적인 개발 과정의 문서화를 통해 중간 투입인력 및 유지보수 인력의 업무 이해 시간 단축",
      },
      {
        title: "디자이너와 Figma, Zeplin을 이용하여 협업",
      },
      {
        title:
          "이해관계가 다른 고객사, 기획자, 개발자간의 의견차이를 해결했던 경험",
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
</style>
