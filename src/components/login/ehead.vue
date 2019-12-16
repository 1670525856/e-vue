<template>
  <div class="ehead">
    <div class="head-wrapper wrapper">
      <div class="logo">
        <a href="javascript:;">
          <img src="../../assets/elogo.jpg" alt="网站logo" title="易学聘" />
        </a>
      </div>
      <div class="login">
        <router-link class="login-reg" to="/login2">登录</router-link>|
        <router-link class="login-reg" to="/login1">注册</router-link>
      </div>
    </div>
    <div class="jobs-wrapper">
      <div class="jobs-wrapper-list">
        <div class="regsiter-left">
          <a
            class="regsiter-left-list"
            href="javascript:;"
            v-for="(item,index) in list"
            :key="index"
            :class="count == index ? 'active' : ''"
            @click="change(index)"
          >
            <div class="regsiter-list">
              <span class="icon iconfont" v-html="item.icon"></span>
              <p>{{item.title}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>


  </div>

</template>
<script>
export default {
  name: "login",
  data() {
    return {
      count: 1,
      list: [
        {
          title: "我是学生",
          icon: "&#xe61e;"
        },
        {
          title: "我是讲师",
          icon: "&#xe50b;"
        },
        {
          title: "我是HR",
          icon: "&#xe614;"
        }
      ]
    };
  },
  methods: {
    change: function(index) {
      this.count = index;
    }
  }
};
</script>
<style lang="less" scoped>
a {
  text-decoration: none;
  color: #000;
}
.wrapper{
  width: 1200px;
  margin: 0 auto;
}
.head-wrapper {
  height: 88px;
  .logo {
    height: 54px;
    float: left;
    margin-top: 17px;
  }
  .login {
    float: right;
    line-height: 88px;
    padding-right: 28px;
    color: #999;
    .login-reg {
      margin: 0 12px;
      color: #999;
    }
  }
}
.jobs-wrapper-list {
  position: relative;
  height: 810px;
  background: #f9f9f9;
  .regsiter-left {
    width: 110px;
    box-shadow: 0px 0px 3px #ccc;
    position: absolute;
    top: 130px;
    left: 402px;
    .regsiter-left-list {
      height: 115px;
      width: 110px;
      color: #202421;
      text-align: center;
      display: table;
      .regsiter-list {
        display: table-cell;
        vertical-align: middle;
        // background-color: #202421;
        .iconfont {
          font-size: 20px;
        }
      }
      &.active {
        height: 230px;
        background: #adc700;
        color: #fff;
      }
    }
  }
}
</style>