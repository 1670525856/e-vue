<template>
  <div class="contentleft">
    <img src="../../assets/luomio.jpg" alt />
    <router-link class=" mymeans iconfont" to="/mydata">我的信息</router-link>
    <router-link class=" prove iconfont" to="/uncertified">认证信息</router-link>
    <router-link class=" pwd iconfont" to="/mima">密码管理</router-link>
  </div>
</template>

<script>



export default {
  name: "",
  components: {

  }
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
      content: "\e628";
      margin-right: 5px;
    }
  }
  .prove {
    &::before {
      content: "\e623";
      margin-right: 5px;
    }
  }
  .pwd {
    &::before {
      content: "\e601";
      margin-right: 5px;
    }
  }
}
</style>