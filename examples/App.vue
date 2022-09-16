<template>
  <div id="app">
    <lzButton type="primary" @click="visible=true">按钮</lzButton><br>
    <lzDialog :visible.sync="visible" ></lzDialog>
    <lzInput placeholder="请输入用户名" type="text" v-model="username" clearable width="300px"></lzInput><br>
    <lzInput placeholder="请输入密码" type="password" v-model="password" showPassword></lzInput><br>
    <lzSwitch v-model="active" ></lzSwitch>
    <lzSwitch v-model="active" activeColor="green" inactiveColor="red" name="username"></lzSwitch><br>
    <lzRadio label="1" v-model="gender">1班</lzRadio>
    <lzRadio label="0" v-model="gender">2班</lzRadio>
    <lzRadioGroup v-model="sex">
      <lzRadio label="1" >男</lzRadio>
      <lzRadio label="0" >女</lzRadio>
    </lzRadioGroup>
    <lzCheckBox v-model="check">选择</lzCheckBox>
    <lzCheckBoxGroup v-model="arr">
      <lzCheckBox label="男" >男</lzCheckBox>
      <lzCheckBox label="女" >女</lzCheckBox>
    </lzCheckBoxGroup>
    <lzForm :model="model" labelWidth="100px">
      <lzFormItem label="用户名">
        <lzInput placeholder="请输入用户名" v-model="model.username"></lzInput>
      </lzFormItem>
      <lzFormItem label="用户类型">
        <lzSwitch v-model="model.active"></lzSwitch>
      </lzFormItem>
    </lzForm>
    <lzButton type="primary">我的按钮</lzButton>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      visible: false,
      username: '',
      password: '',
      active: false,
      gender: '',
      sex: '',
      check: false,
      arr: ['男'],
      model: {
        username: '',
        active: ''
      }
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
 .lz-input__suffix{
  width: 300px;
}
</style>
