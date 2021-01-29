<demo>
  theme:'normal / 'link' / 'text'
</demo>
<template>
  <Button>普通</Button>
  <Button theme="link">链接</Button>
  <Button theme="text">文字</Button>
</template>

<script lang="ts">
  import Button from "../lib/Button.vue";

  export default {
    components: {
      Button
    }
  };
</script>

<style scoped>

</style>