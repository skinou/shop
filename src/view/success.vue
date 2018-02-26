<template>
  <div>
    <h1 class="step">提交成功</h1>
    <div class="progress_content">
      <div class="progress">
        <Steps :current="2">
          <Step title="商品确认"></Step>
          <Step title="填写信息"></Step>
          <Step title="提交成功"></Step>
        </Steps>
      </div>
    </div>
    <div class="logo_content">
      <div class="logo">
        <i-circle :percent="100" stroke-color="dodgerblue">
          <Icon type="ios-checkmark-empty" size="60" style="color:dodgerblue"></Icon>
        </i-circle>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'success'
    }
</script>

<style scoped>
  .progress{
    width: 900px;
    margin: 0 auto;
  }
  .progress_content{
    width: 700px;
    margin: 0 auto;
  }
  .logo_content{
    width: 700px;
    margin: 0 auto;
  }

  .step{
    color: dodgerblue;
    margin: 10px 0 30px 50px;
    letter-spacing: 2px;
  }
  .logo{
    width: 120px;
    height: 120px;
    margin: 50px auto;
  }
</style>
