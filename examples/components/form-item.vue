<template>
  <div class="lz-form-item">
    <label class="lz-form-item__label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="lz-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lzFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.lz-form-item {
  // margin-bottom: 25px;
  &__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  &__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
