<template>
  <div class="home">
    <TopNav/>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>基于Vue3.0的UI框架</h2>
      <div>
        <a href="https://baidu.com">Github</a>
        <router-link to="/doc/intro">开始</router-link>
      </div>
    </div>
    <div class="intro">
      <div class="unit">
        <svg class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <div class="text">
          <h2>基于Vue3</h2>
          <span>使用了Vue3 Composition API</span>
        </div>
      </div>
      <div class="unit">
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <div class="text">
          <h2>基于TypeScript</h2>
          <span>源代码采用TypeScript书写</span>
        </div>
      </div>
      <div class="unit">
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <div class="text">
          <h2>代码易读</h2>
          <span>给个组件的代码都及其简洁</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from "../components/TopNav.vue";

  export default {
    components: {
      TopNav
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;

    .banner {
      color: rgb(68, 41, 91);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 32px 0 64px 0;
      clip-path: ellipse(80% 70% at 50% 20%);
      background: linear-gradient(
          145deg,
          #e8cbc0,
          #636fa4);

      div {
        margin-top: 12px;

        a {
          vertical-align: middle;
          color: white;
          background: rgb(99, 111, 164);
          margin: 0 8px;
          border-radius: 16px;
          padding: 4px 12px;
        }
      }
    }

    .intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 32px;

      .unit {
        display: flex;
        align-items: center;

        svg {
          width: 6em;
          height: 6em;
          margin-right: 16px;
        }

        .text {
          width: 100%;
          color: rgb(111, 72, 107);
          display: flex;
          flex-direction: column;

        }
      }
    }

    @media (min-width: 600px) and (max-width: 950px) {
      .intro {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 24px;
      }
    }
    @media (min-width: 950px) {
      .banner {
        padding: 64px 0 128px 0;
      }
      .intro {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
</style>