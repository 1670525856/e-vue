<template>
  <div id="econtent-mima">
    <p>登陆密码</p>
    <div class="pwd">
      <div class="pwd-input">
        <span>原密码</span>
        <input type="text" placeholder="请输入原始密码" />
      </div>
      <div class="pwd-input">
        <span>新密码</span>
        <input type="text" placeholder="请输入新密码" />
      </div>
      <div class="pwd-input">
        <span>确认密码</span>
        <input type="text" placeholder="请再次输入新密码" />
      </div>
      <div class="btn">
        <router-link class="confirm btn-s" to="/mydata">确认修改</router-link>
        <router-link class="cancel btn-s" to="/mydata">取消修改</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "econtentmima",
  components: {}
};
</script>

<style lang='less'>
#econtent-mima {
  margin-top: 30px;
  float: left;

  p {
    width: 900px;
    font-size: 20px;
    background-color: #fff;
    line-height: 110px;
    padding-left: 45px;
    box-sizing: border-box;
  }
  .pwd {
    width: 900px;
    height: 468px;
    background-color: #fff;
    margin-top: 2px;
    padding: 40px 50px;
    box-sizing: border-box;
    .pwd-input {
      margin-top: 15px;
      span {
        display: inline-block;
        width: 70px;
        text-align: right;
        margin-right: 20px;
        font-size: 14px;
        color: #919191;
      }
      input {
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
      }
    }
    .btn {
      margin-top: 20px;
      .btn-s {
        width: 160px;
        height: 45px;
        display: inline-block;
        text-align: center;
        line-height: 45px;
        border-radius: 5px;
      }
      .confirm{
        background-color: #00aaff;
        color: #fff;
        margin-left: 90px;
        margin-right: 20px;
      }
      .cancel{
        border: 1px solid #e8e8e8;
      }
    }
  }
}
</style>