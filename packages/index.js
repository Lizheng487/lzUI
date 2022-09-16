import lzButton from './button.vue'
import lzDialog from './dialog.vue'
import lzInput from './input.vue'
import lzSwitch from './switch.vue'
import lzRadio from './radio.vue'
import lzRadioGroup from './radio-group.vue'
import lzCheckBox from './checkbox.vue'
import lzCheckBoxGroup from './checkbox-group.vue'
import lzForm from './form.vue'
import lzFormItem from './form-item.vue'
import './fonts/font.scss'

const components = [
  lzButton,
  lzDialog,
  lzInput,
  lzSwitch,
  lzRadio,
  lzRadioGroup,
  lzCheckBox,
  lzCheckBoxGroup,
  lzForm,
  lzFormItem
]
const install = function (Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default { install }
