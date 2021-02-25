<demo> 基础用法</demo>

<template>
  <section>
    滚动页面出现 BackTop
    <BackToTop :target="target" :onclick="onclick"/>
  </section>
</template>
<script lang="ts">
  import BackToTop from '../lib/BackToTop.vue';

  export default {
    components: {
      BackToTop,
    },
    setup() {
      const target = () => document.getElementById('scrollContainer');
      const onclick = (e) => {
        console.log('click it!');
      };
      return {onclick, target};
    },
  };
</script>