<template>
  <div class="lz-radio=group"><slot></slot></div>
</template>

<script>
export default {
  name: 'lzRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
