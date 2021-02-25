<demo>
  disabled:boolean
</demo>
<template>
  <div>
    <Input v-model:value="content" disabled placeholder="支持disabled"/>
  </div>
</template>

<script lang="ts">
  import Input from "../lib/Input.vue";
  import {ref} from "vue";

  export default {
    components: {Input},
    setup() {
      const content = ref("");
      return {
        content
      };
    }
  };
</script>