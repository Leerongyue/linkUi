<demo>
  defaultTab:string
</demo>
<template>
  <Tabs v-model:selected="defaultTab">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
  import Tabs from '../lib/Tabs.vue';
  import Tab from '../lib/Tab.vue';
  import {ref} from 'vue';

  export default {
    components: {
      Tab, Tabs
    },
    setup() {
      const defaultTab = ref('导航1');
      return {defaultTab};
    }
  };
</script>