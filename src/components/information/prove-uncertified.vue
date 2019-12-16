<template>
  <div id="prove">
    <div class="idcard">
      <div class="renzheng renzheng-1">
        <img src="../../assets/id-card.jpg" alt />
        <p>
          身份证（正面）
          <span class="shibai">【未认证】</span>
        </p>
      </div>
      <div class="renzheng renzheng-2">
        <img src="../../assets/id-card.jpg" alt />
        <p>
          身份证（反面）
          <span class="shibai">【未认证】</span>
        </p>
      </div>
      <p class="tishi1 tishi">请上传真实的身份证信息（正反面）</p>
      <p class="tishi2 tishi">照片要四角对齐，如有模糊、反光、太暗、有遮挡，则不予认证</p>
    </div>
    <div class="synopsis">
      <p class="synopsis-i">
        个人简介
        <router-link class="span iconfont" to="/prove">编辑</router-link>
      </p>
      <p class="synopsis-x">
        2017年8月7日，腾讯股价盘中再创历史新高价320.6港元，马化腾身家361亿美元成为中国首富。
        2018年4月，获《时代周刊》2018年全球最具影响力人物荣誉。2018年10月25日，福布斯发布了2018福布斯中国400富豪榜，
        马化腾凭借328亿美元的身家蝉联榜单第二名。2018年12月18日，党中央、国务院授予马化腾同志改革先锋称号，颁授改革先锋奖章 。
        2019年3月，马化腾以388亿美元财富排名2019年福布斯全球亿万富豪榜第20位。2019年9月5日，突破奖基金会及其赞助人——马化腾等人共
        同宣布2020年突破奖及新视野奖的获得者。2019福布斯中国慈善榜排名第4位。2019年10月19日，入选2019福布斯年度商业人物之跨国经营商业领袖名单。
      </p>
    </div>
    <div class="seniority">
      <div class="zizhi">
        <img src="../../assets/id-card.jpg" alt />
        <p>
          资质认证
          <span class="shibai">【未认证】</span>
        </p>
      </div>
      <p class="tishi1 tishi">请上传能证明您专业技能的图片</p>
      <p class="tishi2 tishi">如：职业资格证书、加盖公章的材料证明，获奖证书等</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "prove",
  components: {}
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
      .span {
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
      height: 320px;
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