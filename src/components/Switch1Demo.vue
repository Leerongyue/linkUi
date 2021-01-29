<demo>
  常规用法
</demo>
<template>
  <div>
    <h4>使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量</h4>
    <Switch v-model:value="bool"/>
  </div>
</template>

<script lang="ts">
  import Switch from "../lib/Switch.vue";
  import {ref} from "vue";

  export default {
    components: {Switch},
    setup() {
      const bool = ref(true);
      return {
        bool
      };
    }
  };
</script>