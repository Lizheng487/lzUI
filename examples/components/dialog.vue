<template>
  <transition name="dialog-fade">
    <div class="lz-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="lz-dialog" :style="{ width: width, marginTop: top }">
        <div class="lz-dialog__header">
          <slot name="title">
            <span class="lz-dialog__title">{{ title }}</span>
          </slot>
          <button class="lz-dialog__headerbtn" @click="handleClose">
            <i class="lz-icon-guanbi"></i>
          </button>
        </div>
        <div class="lz-dialog__body">
          <slot>内容</slot>
        </div>
        <div class="lz-dialog__footer" v-if="$slots.footer">
          <slot name="footer"> </slot>
        </div>
        <div class="lz-dialog__footer" v-else>
          <lzButton>取消</lzButton>
          <lzButton type="primary">确定</lzButton>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'lzDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.lz-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .lz-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .lz-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .lz-dialog__headerbtn {
        position: absolute;
        top: 24px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      /* see the vue-loader doc  */
      ::v-deep .lzButton:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
