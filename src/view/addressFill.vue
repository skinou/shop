<template>
  <div>
    <h1 class="step">填写信息</h1>
    <div class="progress">
      <Steps :current="1">
        <Step title="商品确认"></Step>
        <Step title="填写信息"></Step>
        <Step title="提交成功"></Step>
      </Steps>
    </div>
    <div class="form">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
        <FormItem label="收货人姓名" prop="name">
          <Input v-model="formValidate.name"/>
        </FormItem>
        <FormItem label="收货地址" prop="add">
          <Input v-model="formValidate.add"/>
        </FormItem>
        <FormItem label="付费方式" prop="way">
          <RadioGroup v-model="formValidate.way">
            <Radio label="male">货到付款</Radio>
            <Radio label="female">在线付款</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <router-link to="/success" ><Button type="primary" @click="handleSubmit('formValidate')" :disabled="disabled">下一步</Button></router-link>
          <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </div>
    <!--<router-link to="/success"><Button type="primary" size="large">下一步</Button></router-link>-->
  </div>
</template>

<script>
    export default {
      name: 'addressFill',
      data () {
        return {
          formValidate: {
            name: '',
            add: '',
            way: '',
          },
          ruleValidate: {
            name: [
              {required: true, message: '请输入收货人姓名', trigger: 'blur'}
            ],
            add: [
              {required: true, message: '请输入收货地址', trigger: 'blur'},
            ],
            way: [
              {required: true, message: '请选择付费方式', trigger: 'change'}
            ]
          },
        }
      },
      computed: {
        disabled(){
          if(this.formValidate.name.trim() !== '' && this.formValidate.add.trim() !== '' && this.formValidate.way.trim() !== ''){
            return false
          } else {
            return true
          }
        }
      },
      methods: {
        handleSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              // this.$Message.success('Success!');
              // this.$router.redirect('/success')
            } else {
              this.$Message.error('Fail');
            }
          })
        },
        handleReset (name) {
          this.$refs[name].resetFields();
        }
      }
    }
</script>

<style scoped>
  .progress{
    width: 900px;
    margin: 0 auto;
    /*margin: 0 auto;*/
  }
  .step{
    color: dodgerblue;
    margin: 10px 0 30px 50px;
    letter-spacing: 2px;
  }
  .form{
    width: 500px;
    margin: 80px auto;;
  }
</style>
