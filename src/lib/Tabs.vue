<template>
  <div class="link-tabs">
    <div class="link-tabs-nav" ref="container">
      <div class="link-tabs-nav-item"
           v-for="(CNode,index) in defaults"
           :ref="el => { if (CNode.props.title === selected) selectedItem = el; }"
           @click="select(CNode)"
           :class="
          [CNode.props.title === selected ? 'selected' : ''] +
          [CNode.props.disabled === '' ? 'disabled' : '']
        "
           :key="index">
        {{ CNode.props.title }}
      </div>
      <div class="link-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="link-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from './Tab.vue';
  import {ref, watchEffect, onMounted, computed} from 'vue';

  export default {
    props: {
      selected: {
        type: String
      }
    },
    name: 'Tabs',
    setup(props, context) {
      const selectedItem = ref<HTMLDivElement>(null);
      const indicator = ref<HTMLDivElement>(null);
      const container = ref<HTMLDivElement>(null);
      const defaults = context.slots.default();
      onMounted(() => {
        watchEffect(() => {
          const {
            width
          } = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + 'px';
          const {
            left: left1
          } = container.value.getBoundingClientRect();
          const {
            left: left2
          } = selectedItem.value.getBoundingClientRect();
          const left = left2 - left1;
          indicator.value.style.left = left + 'px';
        }, {flush: 'post'});
      });

      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须是 Tab');
        }
      });
      const current = computed(() => {
        return defaults.find(tag => tag.props.title === props.selected);
      });
      const titles = defaults.map((tag) => {
        return tag.props.title;
      });
      // 处理点击事件，当有disabled属性时不更新选中结点，否则选中点击结点
      const select = (CNode) => {
        if (CNode.props.disabled === '') {
          return;
        }
        context.emit('update:selected', CNode.props.title);
      };
      return {
        current,
        defaults,
        titles,
        select,
        selectedItem,
        indicator,
        container
      };
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
      position: relative;
      margin: 16px 0;

      &-item {
        margin: 0 16px;
        cursor: pointer;

        &.disabled {
          color: #ccc;
          cursor: not-allowed;
        }

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }
      }

      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 0px;
        transition: all 250ms ease;
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>