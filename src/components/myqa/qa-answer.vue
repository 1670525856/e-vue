<template>
  <div id="answer1">
    <answer></answer>
    <div class="huida">
      <p class="wen">中午在凡客打电话退货了，下午可以到吗？我在北京</p>
      <div
        class="miaoshu"
      >CPU AMD Athlon ll X4 （速龙II四核）640盒装CPU中午在凡客打电话退货了，下午可以到吗？我在北京下午可以到吗？我在北京下午可以到吗？我在北京</div>
      <p class="liulan">
        <span>回答时间：3月23日 15：43</span>
        <span>回答：0 | 91人看过</span>
        <span>提问者：浪荡猫</span>
      </p>
      <router-link class="zhuiwen" to="">有追问</router-link>
    </div>

    <div class="huida">
      <p class="wen">中午在凡客打电话退货了，下午可以到吗？我在北京</p>
      <div
        class="miaoshu"
      >CPU AMD Athlon ll X4 （速龙II四核）640盒装CPU中午在凡客打电话退货了，下午可以到吗？我在北京下午可以到吗？我在北京下午可以到吗？我在北京</div>
      <p class="liulan">
        <span>回答时间：3月23日 15：43</span>
        <span>回答：0 | 91人看过</span>
        <span>提问者：浪荡猫</span>
      </p>
      <router-link class="zhuiwen" to="">有追问</router-link>
    </div>
    <div class="k"></div>
  </div>
</template>

<script>
import answer from "./qa-top";

export default {
  name: "",
  components: {
    answer
  }
};
</script>

<style lang='less'>
#answer1{
  float: left;
  margin-top: 30px;
  overflow: hidden;
  .huida {
    background-color: #fff;
    margin-top: 2px;
    padding: 35px 40px 30px 30px;
    position: relative;
    .wen {
      font-size: 18px;
    }
    .miaoshu {
      background-color: #f8f8f8;
      width: 630px;
      height: 60px;
      padding: 10px 25px;
      box-sizing: border-box;
      font-size: 12px;
      color: #a2a2a2;
      margin-top: 25px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: -6px;
        width: 0px;
        height: 0px;
        border-bottom: 7px solid #f8f8f8;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
      }
    }
    .liulan{
      font-size: 12px;
      color: #a2a2a2;
      margin-top: 20px;
      span{
        margin-right: 40px;
      }
    }
    .zhuiwen{
      color: #00aaff;
      width: 160px;
      height: 30px;
      font-size: 12px;
      line-height: 30px;
      text-align: center;
      position: absolute;
      border: 1px solid #f4f4f4;
      border-radius: 35px;
      right: 40px;
      top: 50px;
    }
  }
  .k{
    width: 100%;
    height: 54px;
    margin-top: 2px;
    background-color: #fff;
  }
}
</style>