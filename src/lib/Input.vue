<template>
  <div class="link-input" :class="{'link-disabled':disabled}">
    <input
      :class="{'link-input-round':round ,'link-input-focused': focused,'link-input-disabled': disabled}"
      v-bind="$attrs"
      @change="onchange"
      @input="oninput"
      @focus="showShadow"
      @blur="hideShadow"
      :disabled="disabled"
    />
  </div>
</template>

<script lang="ts">
  import {SetupContext} from 'vue';
  import {ref} from 'vue';
  import Dialog from './Dialog.vue';

  export default {
    components: {Dialog},
    inheritAttrs: false,
    props: {
      disabled: {type: Boolean, default: false},
      round: {type: Boolean, default: false},
    },
    setup(props, context: SetupContext<any>) {
      const focused = ref(false);
      const oninput = (e: KeyboardEvent) => {
        context.emit('update:value', (e.target as HTMLInputElement).value);
      };
      const showShadow = () => {
        focused.value = true;
        context.emit('focus');
      };
      const hideShadow = () => {
        focused.value = false;
        context.emit('blur');
      };
      return {oninput, focused, showShadow, hideShadow, onchange};
    },
  };
</script>

<style lang="scss" scoped>
  $highlight: #108ee9;
  $dark-color: #bfbfbf;
  .link-input {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    position: relative;
    display: inline-flex;
    width: 50%;
    align-items: center;
    margin-top: 1em;

    &.link-disabled {
      * {
        cursor: not-allowed;
      }
    }

    input {
      padding: 5px 10px;
      margin: 0;
      display: inline-block;
      min-width: 50%;
      flex: 1;
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      line-height: 1.5;
      background-color: #fff;
      border-radius: 2px;
      outline: none;

      &:hover {
        border-color: $highlight;
      }

      &.link-input-disabled {
        &:hover {
          border-color: rgb(212, 212, 212)
        }
      }

      &.link-input-focused {
        border-color: $highlight;
        -webkit-box-shadow: 0 0 3px $highlight;
        box-shadow: 0 0 3px $highlight;
      }


      &.link-input-round {
        border-radius: 16px;
      }

      &::-moz-placeholder {
        opacity: 1;
      }

      &::-webkit-input-placeholder {
        color: $dark-color;
      }

      &:-ms-input-placeholder {
        color: $dark-color;
      }

      &::-ms-input-placeholder {
        color: $dark-color;
      }

      &::placeholder {
        color: $dark-color;
      }
    }

    & + & {
      margin-top: 1em;
    }
  }
</style>