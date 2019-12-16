<template>
  <div id="question">
    <answer></answer>
    <div class="tiwen">
      <p class="wen">中午在凡客打电话退货了，下午可以到吗？我在北京</p>
      <p class="liulan">
        <span>回答时间：3月23日 15：43</span>
        <span>回答：0 | 91人看过</span>
        <span>提问者：浪荡猫</span>
      </p>
      <router-link class="zhuiwen" to="">查看并处理</router-link>
    </div>
    <div class="tiwen tiwen2">
      <p class="wen">中午在凡客打电话退货了，下午可以到吗？我在北京</p>
      <p class="liulan">
        <span>回答时间：3月23日 15：43</span>
        <span>回答：0 | 91人看过</span>
        <span>提问者：浪荡猫</span>
      </p>
      <router-link class="zhuiwen" to="">查看并处理</router-link>
    </div>
  </div>
</template>

<script>
import answer from "./qa-top";

export default {
  name: "question",
  components: {
    answer
  }
};
</script >

<style lang='less'>
#question {
  float: left;
  margin-top: 30px;
  background-color: #fff;
  height: 580px;
  .tiwen {
    background-color: #fff;
    border-top: 2px solid #f4f4f4;
    padding: 35px 40px 30px 30px;
    position: relative;
    .wen {
      font-size: 18px;
    }
    .liulan {
      font-size: 12px;
      color: #a2a2a2;
      margin-top: 20px;
      span {
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
  .tiwen2{
    border-bottom: 2px solid #f4f4f4;
  }
}
</style>