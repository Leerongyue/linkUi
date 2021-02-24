<demo>
  loading:boolean
</demo>
<template>
  <Button loading>加载中</Button>
  <Button loading round>加载中</Button>
</template>
<script lang="ts">
  import Button from "../lib/Button.vue";

  export default {
    components: {
      Button
    }
  };
</script>