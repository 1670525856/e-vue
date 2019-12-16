<template>
  <div id="mydata">
    <p class="p p1">
      <span>姓名</span>柳子戏
      <router-link class="span iconfont" to="/mydata2">编辑</router-link>
    </p>
    <p class="p">
      <span>出生日期</span>1990年3月2日
    </p>
    <p class="p">
      <span>性别</span>男
    </p>
    <p class="p">
      <span>手机号</span>15893588999 <span class="span1 iconfont">已验证</span>
    </p>
    <p class="p">
      <span>邮箱</span>173666258.qq.com
    </p>
    <p class="p">
      <span>身份证</span>417651213456789148
    </p>
    <p class="p">
      <span>微信号</span>13810155999
    </p>
    <p class="p">
      <span>QQ号</span>64735556
    </p>
  </div>
</template>

<script>
export default {
  name: "",
  components: {}
};
</script>

<style lang='less'>
#mydata {
  margin-top: 30px;
  width: 900px;
  height: 580px;
  float: left;
  position: relative;
  background-color: #fff;
  padding: 60px 45px 60px 30px;
  box-sizing: border-box;
  .p {
    font-size: 14px;
    margin-bottom: 35px;
    span {
      display: inline-block;
      width: 70px;
      color: #b3b3b3;
      margin-right: 30px;
      text-align: right;
    }
    .span{
        float: right;
        color: #009dff;
        font-size: 16px;
        &::before{
            content: "\e505";
          margin-right: 5px;
          font-size: 18px;
        }
    }
    .span1{
        color: #84b800;
        margin-left: 10px;
        &::before{
            content: '\e64e';
            margin-right: 5px;
            
        }
    }
  }
  
}
</style>