<template>
  <section class="aboutMeWrap">
    <span class="sectionTitle">About me</span>
    <div class="profileArea">
      <div class="profileImgArea">
        <img src="../assets/images/profile_c.png" />
      </div>
      <div class="profileTextArea">
        <div>
          안녕하세요. 프론트엔드 개발자 오지원입니다.<br /><br />
          <font-awesome-icon icon="fa-regular fa-square-check" />&nbsp;
          프론트엔드 개발자는 시스템을 이용하는 고객에게 첫인상을 결정하는
          매력적인 직업이라고 생각합니다.<br />
          <font-awesome-icon icon="fa-regular fa-square-check" />&nbsp; 시스템
          이용이 고객에게 좋은 기억으로 남을 수 있도록 항상 고민하며 개발합니다.
        </div>
        <div>
          <span>
            <font-awesome-icon icon="fa-solid fa-user" />
            <p>오지원</p>
          </span>
          <span>
            <font-awesome-icon icon="fa-solid fa-calendar" />
            <p>1996.07.09</p>
          </span>
          <span>
            <font-awesome-icon icon="fa-solid fa-phone" />
            <p>010-8798-9578</p>
          </span>
          <span>
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <p>pooojw@naver.com</p>
          </span>
          <span>
            <a href="https://velog.io/@jiwony7" target="_blank">
              <font-awesome-icon icon="fa-solid fa-blog" />
              <p>velog.io/@jiwony7</p>
            </a>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.aboutMeWrap {
  max-width: 70vw;
  margin: 0 auto;
}
.profileArea {
  width: 100%;
  display: flex;
  padding: 3rem 0;
  .profileImgArea {
    flex: 3;
    display: inline-block;
    img {
      width: 100%;
    }
  }
  .profileTextArea {
    flex: 7;
    padding-left: 3rem;
    text-align: left;
    word-break: break-word;
    white-space: nowrap;
    font-size: 1.1rem;
    line-height: 1.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      display: block;
      &:first-child {
        margin-bottom: 1.5rem;
      }
    }
    span {
      display: block;
      padding: 0.3rem 0;
      p {
        display: inline-block;
        padding: 0 1rem;
        font-weight: 500;
      }
      a {
        color: #000000;
      }
    }
  }
}
.fa-square-check {
  color: rgb(42, 96, 183);
}
</style>
