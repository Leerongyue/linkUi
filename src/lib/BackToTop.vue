<template>
  <div class="link-back-top" v-show="visibility" ref="backTop" @click.stop="clickHandler">
    <Icon name="icon-top"/>
  </div>
</template>

<script lang="ts">
  import "../assets/icon.js";
  import Icon from "./Icon.vue";
  import {onMounted, ref} from "vue";

  export default {
    components: {
      Icon,
    },
    props: {
      target: {default: () => document || window},
      height: {default: 300},
      duration: {type: Number, default: 250},
      onclick: {type: Function},
    },
    setup(props) {
      const visibility = ref<boolean>(false);
      const backTop = ref();
      const clickHandler = () => {
        const scrollTarget = props.target();
        const top = scrollTarget.scrollTop;
        const velocity = top / props.duration;
        let timer = setInterval(() => {
          scrollTarget.scrollTop -= velocity * 8;
          if (scrollTarget.scrollTop <= 0) {
            props.onclick && props.onclick();
            clearInterval(timer);
            timer = null;
          }
        }, 8);
      };
      onMounted(() => {
        const scrollTarget = props.target();
        scrollTarget.onscroll = (e) => {
          visibility.value = e.currentTarget.scrollTop >= props.height;
        };
      });
      return {visibility, backTop, clickHandler};
    },
  };
</script>

<style lang="scss">
  .link-back-top {
    background-color: rgb(141, 141, 141);
    display: inline-block;
    line-height: 2em;
    padding: 0 0.5em;
    border-radius: 50%;
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 1;

    .link-icon {
      margin-top: 8px;

      svg {
        fill: #fff;
      }
    }

    &:hover {
      background-color: #272727;
    }
  }
</style>
