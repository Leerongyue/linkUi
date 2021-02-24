<demo>
  size:'normal' / 'small' / 'big'
</demo>
<template>
  <Button size="big" level="main">大大大</Button>
  <Button level="main">普普通</Button>
  <Button size="small" level="main">小小小</Button>
</template>

<script lang="ts">
  import Button from "../lib/Button.vue";

  export default {
    components: {
      Button
    }
  };
</script>