<demo>
  支持disabled
</demo>
<template>
  <div>
    <h4>
      添加<span>disabled</span>属性来<span>禁用Switch组件</span>
    </h4>
    <Switch v-model:value="bool" disabled/>
  </div>
</template>

<script lang="ts">
  import Switch from "../lib/Switch.vue";
  import {ref} from "vue";

  export default {
    components: {Switch},
    setup() {
      const bool = ref(false);
      return {
        bool
      };
    }
  };
</script>

<style scoped>

</style>