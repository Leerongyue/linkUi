<demo>
  name:string
</demo>
<template>
  <div>
    <Icon name="icon-apple"/>
    <Icon name="icon-ts"/>
    <Icon name="icon-delete"/>
    <Icon name="icon-more"/>
    <Icon name="icon-Vue"/>
    <Icon name="icon-light"/>
  </div>
</template>

<script lang="ts">
  import Icon from '../lib/Icon.vue';

  export default {
    components: {Icon}
  };
</script>