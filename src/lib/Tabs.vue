<template>
  <div class="link-tabs">
    <div class="link-tabs-nav">
      <div class="link-tabs-nav-item" v-for="(item,index) in titles" :key="index">{{item}}</div>
    </div>
    <div class="link-tabs-content">
      <component class="link-tabs-content-item" v-for="(c,index) in defaults" :key="index" :is="c"></component>
    </div>
  </div>
</template>

<script lang="ts">

  import Tab from './Tab.vue';

  export default {
    name: 'Tabs',
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs子标签必须是Tab');
        }
      });
      const titles = defaults.map(tag => tag.props.title);
      return {defaults, titles};
    }
  };
</script>

<style lang="scss" scoped>
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .link-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>