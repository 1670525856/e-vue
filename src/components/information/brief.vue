<template>
    <div class="synopsis">
      <p class="synopsis-i">
        个人简介
        <router-link class="bianji iconfont" to="/prove">编辑</router-link>
      </p>
      <p class="synopsis-x">
        2017年8月7日，腾讯股价盘中再创历史新高价320.6港元，马化腾身家361亿美元成为中国首富。
        2018年4月，获《时代周刊》2018年全球最具影响力人物荣誉。2018年10月25日，福布斯发布了2018福布斯中国400富豪榜，
        马化腾凭借328亿美元的身家蝉联榜单第二名。2018年12月18日，党中央、国务院授予马化腾同志改革先锋称号，颁授改革先锋奖章 。
        2019年3月，马化腾以388亿美元财富排名2019年福布斯全球亿万富豪榜第20位。2019年9月5日，突破奖基金会及其赞助人——马化腾等人共
        同宣布2020年突破奖及新视野奖的获得者。2019福布斯中国慈善榜排名第4位。2019年10月19日，入选2019福布斯年度商业人物之跨国经营商业领袖名单。
      </p>
      <div class="btn">
        <router-link class="confirm btn-s" to="certification">确认修改</router-link>
        <router-link class="cancel btn-s" to="/certified">取消修改</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "brief",
  components: {}
};
</script>

<style lang='less'>
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
      .bianji {
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
  
</style>