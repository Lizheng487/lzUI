<template>
  <div class="lz-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'lzForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '120px'
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
