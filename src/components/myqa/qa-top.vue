<template>
  <div id="upload-top">
    <router-link class="btn btn1 iconfont" to="qaanswer">全部</router-link>
    <router-link class="btn iconfont" to="">待处理</router-link>
    <router-link class="btn3 iconfont" to="">我要提问</router-link>
  </div>
</template>

<script>
export default {
  name: "",
  components: {}
};
</script>

<style lang='less'>
#upload-top {
  background-color: #fff;
  width: 900px;
  height: 100px;
  // float: left;
  box-sizing: border-box;
  padding: 40px 35px;
  .btn {
    margin-left: 60px;
  }
  .btn1 {
    position: relative;
    &::before {
      content: "\e78d";
      color: #00aaff;
      font-size: 30px;
      position: absolute;
      left: -35px;
      top: -7px;
    }
  }
  .btn3{
      float: right;
      width: 160px;
      height: 30px;
      text-align: center;
      background-color: #00aaff;
      color: #fff;
      line-height: 30px;
      border-radius: 7px;
      font-size: 14px;
  }
}
</style>