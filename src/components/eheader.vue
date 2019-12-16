<template>
  <div>
    <div class="head-blank">
      <div class="wrapper">
        
        <img src="../assets/e-logo.jpg" alt />
        <div class="xinxi">
          <span class="iconfont">罗密欧</span>
        </div>
      </div>
    </div>
    <div class="head-nav">
      <div class="wrapper">
        <router-link class="mycenter" to="/home">My Center</router-link>
        <router-link
         class="nav"
         :class="current === index ? 'active' : ''"
         :key="index"
         v-for='(item,index) in info'
         :to='item.to'
          @click.native='active(index)'>{{item.title}}</router-link>
          

        <router-link class="nav-right iconfont" to="/upload">添加课程</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "eheader",
  data() {
    return {
      // actives:'',
      current:0,
      info:[
        {
          id:1,
          title:'基本信息',
          to:'/content'
        },
        {
          id:2,
          title:'课程管理',
          to:'/content2'
        },
        {
          id:3,
          title:'我的问答',
          to:'/content3'
        },{
          id:4,
          title:'我的收入',
          to:''
        }
      ]
    };
  },
  methods: {
    active:function(index){
      this.current = index
    }
  },
  mounted() {}
};
</script>

<style lang= "less" scoped>
* {
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
  color: #000;
}
.active {
  color: #00a1ff;
  border-bottom: 2px solid #00a1ff;
}
.wrapper {
  width: 1200px;
  margin: 0 auto;
}
.head-blank {
  height: 40px;
  background-color: #333;
  position: relative;
  .wrapper {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    & > img {
      position: absolute;
      bottom: 50%;
      margin-bottom: -15px;
    }
  }

  .xinxi {
    height: 40px;
    background: url(../assets/teacher1.jpg) no-repeat;
    float: right;
    padding-left: 30px;
    span {
      color: #cacaca;
      line-height: 40px;
      font-size: 12px;
      margin-left: 10px;
      &::after {
        content: "\e60f";
        margin-left: 10px;
      }
    }
  }
}
.head-nav {
  box-shadow: 0px 4px 4px -4px #e5e5e5;
  .wrapper {
    position: relative;
    .mycenter {
      font-size: 22px;
      color: #00a1ff;
      line-height: 90px;
      margin-right: 90px;
    }
    .nav {
      margin-right: 80px;
      padding-bottom: 20px;
      &:hover {
        color: #00a1ff;
        border-bottom: 2px solid #00a1ff;
      }
    }
    .nav-right {
      float: right;
      color: #00a1ff;
      border: 1px solid #f1f1f1;
      border-radius: 20px;
      padding: 7px 40px;
      position: absolute;
      right: 0px;
      bottom: 50%;
      transform: translateY(50%);
      &::before {
        content: "\e643";
        margin-right: 5px;
      }
    }
  }
}
</style>