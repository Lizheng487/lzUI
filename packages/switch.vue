<template>
  <div class="lz-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="lz-switch__core" ref="core">
      <span class="lz-switch__button"></span>
    </span>
    <input class="lz-switch__input" type="checkbox" :name="name" ref="input">
  </div>
</template>

<script>
export default {
  name: 'lzSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
      this.$nextTick(() => {
        this.setColor()
        this.$refs.input.checked = this.value
      })
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lz-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  &__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .lz-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  // checked style
  &.is-checked {
    .lz-switch__core {
      border-color: #409eff;
      background-color: #409eff;
      .lz-switch__button {
        transform: translateX(20px);
      }
    }
  }
}
.lz-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
