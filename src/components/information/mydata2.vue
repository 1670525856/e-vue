<template>
  <div id="mydata">
    <div class="div">
      <span>姓名</span>
      <input class="input" type="text" />
    </div>
    <div class="div">
      <span>出生日期</span>
      <input class="input" type="text" disabled placeholder="本项不可输入，填写完身份证日期后自动同步出生日期" />
    </div>
    <div class="div">
      <span>性别</span>
      <select name id>
        <option value>男</option>
        <option value>女</option>
      </select>
    </div>
    <div class="div div-tel">
      <span>手机号</span>
      <input class="tel" type="text" />
      <router-link class="yanzhengma" to="">获取验证码</router-link>
    </div>
    <div class="div">
      <span>邮箱</span>
      <input class="input" type="text" />
    </div>
    <div class="div">
      <span>身份证</span>
      <input class="input" type="text" />
    </div>
    <div class="div">
      <span>微信号</span>
      <input class="input" type="text" />
    </div>
    <div class="div">
      <span>QQ号</span>
      <input class="input" type="text" />
    </div>
    <div class="div">
      <span>出生日期</span>
      <input class="input" type="text" />
    </div>
    <router-link class="a a1" to="/mydata">保存信息</router-link>
    <router-link class="a a2" to="/mydata">取消修改</router-link>
  </div>
</template>

<script>
export default {
  name: "mydata2",
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
  padding: 40px 45px 60px 30px;
  box-sizing: border-box;

  .div {
    font-size: 14px;
    margin-bottom: 10px;
    span {
      display: inline-block;
      width: 70px;
      color: #b3b3b3;
      margin-right: 20px;
      text-align: right;
    }
    .input {
      width: 400px;
      height: 40px;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      outline: none;
      font-size: 14px;
      text-indent: 20px;
      &::placeholder {
        color: #e0e0e0;
      }
      &:disabled {
        background-color: #fff;
      }
    }
    select {
      width: 400px;
      height: 40px;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      outline: none;
      font-size: 14px;
      text-indent: 20px;
      color: #e0e0e0;
    }
    .tel {
      width: 240px;
      height: 40px;
      border: 1px solid #e0e0e0;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      outline: none;
      font-size: 14px;
      text-indent: 20px;
    }
    .yanzhengma {
      display: inline-block;
      width: 158px;
      height: 40px;
      border: 1px solid #e0e0e0;
      text-align: center;
      line-height: 40px;
      margin-left: -1px;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      position: absolute;
    }
    .div-tel {
      position: relative;
    }
  }
  .a {
    display: inline-block;
    width: 160px;
    height: 40px;
    margin-top: 10px;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
  }
  .a1 {
    background-color: #00aaff;
    color: #fff;
    margin-left: 90px;
    margin-right: 20px;
  }
  .a2 {
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
  }
}
</style>