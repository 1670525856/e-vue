<template>
  <div id="prove">
    <div class="idcard">
      <div class="renzheng renzheng-1">
        <img src="../../assets/proveshibai1.jpg" alt />
        <p>
          身份证（正面）
          <span class="shibai">【认证失败】</span>
        </p>
      </div>
      <div class="renzheng renzheng-2">
        <img src="../../assets/proveshibai2.jpg" alt />
        <p>
          身份证（反面）
          <span class="shibai">【认证失败】</span>
        </p>
      </div>
      <p class="tishi1 tishi">请上传真实的身份证信息（正反面）</p>
      <p class="tishi2 tishi">照片要四角对齐，如有模糊、反光、太暗、有遮挡，则不予认证</p>
    </div>
    
    <brief></brief>
    <div class="seniority">
      <div class="zizhi">
        <img src="../../assets/proveshibai3.jpg" alt />
        <p>
          资质认证
          <span class="shibai">【认证失败】</span>
        </p>
      </div>
      <p class="tishi1 tishi">请上传能证明您专业技能的图片</p>
      <p class="tishi2 tishi">如：职业资格证书、加盖公章的材料证明，获奖证书等</p>
    </div>
  </div>
</template>

<script>

import brief from './brief'


export default {
  name: "prove",
  components: {
    brief
  }
};
</script>

<style lang='less'>
#prove {
  margin-top: 30px;
  width: 900px;
  height: 580px;
  float: left;
  position: relative;
  
  .idcard {
    background-color: #fff;
    width: 450px;
    height: 290px;
    padding: 50px 40px 30px;
    box-sizing: border-box;
    text-align: center;
    position: absolute;
    .renzheng {
      display: inline-block;

      p {
        margin-top: 15px;
        font-size: 12px;
        color: #97a7be;
        .shibai {
          color: #d9471a;
        }
      }
    }
    .renzheng-1 {
      margin-right: 30px;
    }
    .tishi {
      font-size: 12px;
      color: #dbdbdb;
      line-height: 18px;
    }
    .tishi1 {
      margin-top: 20px;
    }
  }
  .synopsis {
    background-color: #fff;
    position: absolute;
    right: 0px;
    width: 448px;
    height: 580px;
    padding: 50px 50px 0px 35px;
    box-sizing: border-box;
    .synopsis-i {
      font-size: 18px;
      span {
        font-size: 14px;
        color: #009dff;
        float: right;
        &::before {
          content: "\e505";
          margin-right: 5px;
          font-size: 16px;
        }
      }
    }
    .synopsis-x {
      margin-top: 45px;
      font-size: 12px;
      color: #777;
      line-height: 20px;
      padding: 20px 30px 0px 15px;
      border: 1px solid #e0e0e0;
      height: 320px;
    }
    .btn {
      margin-top: 30px;
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
        margin-left: 15px;
        margin-right: 20px;
      }
      .cancel{
        border: 1px solid #e8e8e8;
      }
    }
  }
  .seniority {
    background-color: #fff;
    position: absolute;
    bottom: 0px;
    width: 450px;
    height: 288px;
    text-align: center;
    padding: 50px 70px 35px;
    box-sizing: border-box;
    .zizhi {
      display: inline-block;

      p {
        margin-top: 15px;
        font-size: 12px;
        color: #97a7be;
        .shibai {
          color: #d9471a;
        }
      }
    }
    .tishi{
        font-size: 12px;
        color:#dbdbdb;
        line-height: 18px;
    }
    .tishi1 {
      margin-top: 20px;
    }

  }
}
</style>