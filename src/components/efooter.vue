<template>
  <div>
    <footer>
      <div class="foot down">中国领先大学生成长平台 @2016 e学聘</div>
      <div class="foot">
        ICP备16500007 |
        <a href="javascript:;">联系我们</a> exuepin@exuepin.com |
        <a href="javascript:;">关于我们</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "efooter",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less">
footer {
  height: 120px;
  box-sizing: border-box;
  margin-top: 30px;
  color: #bbb;
  a{
      color: #bbb;
  }
  .foot {
    text-align: center;
    font-size: 12px;
  }
  .down {
    padding: 40px 0px 15px 0px;
  }
}
</style>