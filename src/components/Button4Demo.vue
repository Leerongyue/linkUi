<demo>
  disabled:boolean
</demo>
<template>
  <Button disabled theme="button">禁用按钮</Button>
  <Button disabled theme="button" round loading>禁用按钮</Button>
  <Button disabled theme="button" level="danger" round>禁用按钮</Button>
</template>

<script lang="ts">
  import Button from "../lib/Button.vue";

  export default {
    components: {
      Button
    }
  };
</script>