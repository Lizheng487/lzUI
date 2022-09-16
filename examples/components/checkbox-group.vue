<template>
  <div class="lz-checkbox-group"><slot></slot></div>
</template>

<script>
export default {
  name: 'lzCheckBoxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
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
