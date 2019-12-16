<template>
  <div class="contentleft">
    <img src="../../assets/luomio.jpg" alt />
    <router-link class="mymeans iconfont" to="/content2/">我的课程</router-link>
    <router-link class="prove iconfont" to="/content2/">我的活动</router-link>
  </div>
</template>

<script>
export default {
  name: "",
  components: {}
};
</script>

<style lang='less'>
.contentleft {
  width: 280px;
  height: 580px;
  background-color: #fff;
  float: left;
  margin: 30px 20px 30px 0px;
  img {
    display: block;
    margin: 50px auto;
  }
  a {
    display: block;
    text-align: center;
    margin-bottom: 35px;
    &:hover {
      color: #00a1ff;
    }
  }
  .mymeans {
    &::before {
      content: "\e82a";
      margin-right: 5px;
    }
  }
  .prove {
    &::before {
      content: "\e604";
      margin-right: 5px;
    }
  }
}
</style>