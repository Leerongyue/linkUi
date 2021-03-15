<template>
  <div :disabled="disabled">
    <slot/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tab',
    props: {
      disabled: {
        type: Boolean,
        defaults: false
      }
    }
  };
</script>
