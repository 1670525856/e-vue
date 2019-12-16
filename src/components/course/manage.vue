<template>
  <div id="manage4">
    <div class="div1">
      <span
        class="span1 choices"
        @click="cswitch(index)"
        v-for="(item, index) in navarr"
        :key="index"
      >
        <span
          class="btn-b"
          @click="cswitch(index)"
          :style="{'background-color':current === index ? '':'white'}"
        >
          <i
            class="iconfont btn-modify"
            :style="{display:current === index ? 'block' : 'none'}"
          >&#xe78d;</i>
        </span>
        <span class="coursename">{{item}}</span>
      </span>

      <!-- <p class="p2">上传时间：3月23日 15:43</p>
      <span class="span span1 iconfont">128位学员</span>
      <span class="span span2 iconfont">18条评论</span>
      <p class="p3">失败原因：内容包含反动性质，请修改</p>
      <router-link class="btn" to="/upload3">修改课程</router-link>
      <router-link class="btn2" to="/content2/manage1">删除课程</router-link>-->
    </div>
    <div class="course-content">
      <div class="content-item" v-for="(item, index) in newArr" :key="index">
        <img :src="item.srcurl" alt />
        <div class="item-right">
          <p class="p1">
            {{item.title}}
            <span
              class="real"
              :style="{color:item.real==='「进行中」'?'#00aaff':'#aaaaaa' }"
            >{{item.real}}</span>
          </p>
          <p class="time">上传时间： {{item.time}}</p>
          <p class="comment" :style="{display:item.real==='「进行中」' ? 'block':'none' }">
            <i class="iconfont icon-yonghu"></i>
            <span class="person-num">{{item.personNum}}学员</span>
            <i class="iconfont icon-xinxi"></i>
            <span class="comment-num">{{item.commentNum}}条评论</span>
          </p>
          <p class="price">{{item.price}}</p>
          <p class="error">{{item.errresult}}</p>
        </div>
        <div class="course-right" :style="{display:current===0?'none':'block'}">
          <p class="change">修改课程</p>
          <p class="delete" :style="{display:current === 2 ? 'block':'none'}">删除课程</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "manage4",
  components: {},
  data() {
    return {
      navarr: ["已发布课程", "审核中课程", "未通过审核课程"],
      current: 0,
      status: "",
      arrs: [
        {
          id: 1,
          srcurl: require("../../assets/kecheng1.jpg"),
          title: "显露你的实力- -面试",
          time: "3月23日15:43",
          price: "免费",
          status: 0,
          real: "「进行中」",
          personNum: 128,
          commentNum: 18
        },
        {
          id: 2,
          srcurl: require("../../assets/kecheng1.jpg"),
          title: "微信微博新媒体营销课程",
          time: "3月23日15:43",
          price: "￥199",
          status: 0,
          real: "「已结束」",
          personNum: 128,
          commentNum: 18
        },
        {
          id: 3,
          srcurl: require("../../assets/kecheng1.jpg"),
          title: "显露你的实力- -面试",
          time: "3月23日15:43",
          errresult: "失败原因:内容包含反动性质，请修改",
          status: 2
        },
        {
          id: 4,
          srcurl: require("../../assets/kecheng1.jpg"),
          title: "微信微博新媒体营销课程",
          time: "3月23日15:43",
          errresult: "失败原因:内容包含反动性质，请修改",
          status: 2
        },
        {
          id: 5,
          srcurl: require("../../assets/kecheng1.jpg"),
          title: "显露你的实力- -面试",
          time: "3月23日15:43",
          price: "免费",
          status: 1
        },
        {
          id: 6,
          srcurl: require("../../assets/kecheng1.jpg"),
          title: "微信微博新媒体营销课程",
          time: "3月23日15:43",
          price: "￥199",
          status: 1
        }
      ],
      newArr: []
    };
  },
  methods: {
    cswitch(index) {
      this.current = index;
      this.newArr = this.arrs.filter(item => {
        return item.status == this.current;
      });
      return this.newArr;
    }
  },
  mounted() {
    this.cswitch(this.current);
  }
};
</script>

<style lang='less' scoped>
#manage4 {
  background-color: #fff;
  float: left;
  margin-top: 30px;
  height: 580px;
  .div1 {
    background-color: #fafeff;
    width: 900px;
    height: 100px;
    overflow: hidden;
    padding: 40px 35px;
    position: relative;
    box-sizing: border-box;
    border-bottom: 1px solid #f4f4f4;
    .choices {
      font-size: 16px;
      margin-left: 40px;
      .btn-b {
        margin-right: 4px;
        border: 1px solid #eeeeee;
        vertical-align: middle;
        display: inline-block;
        width: 21px;
        height: 21px;
        border-radius: 50%;
        position: relative;
        top: -2px;
        right: 3px;
        .btn-modify {
          position: absolute;
          line-height: 24px;
          color: #00aaff;
          font-size: 30px;
          width: 100%;
          height: 100%;
          line-height: 24px;
          left: -5px;
          top: 0px;
        }
      }
    }
  }
  .course-content {
    .content-item {
      height: 200px;
      position: relative;
      img {
        position: absolute;
        left: 30px;
        top: 45px;
      }
      .item-right {
        position: absolute;
        top: 45px;
        left: 245px;
        .p1 {
          font-size: 18px;
        }
        .time {
          font-size: 12px;
          color: #a7a7a7;
          margin-top: 15px;
        }
        .person-num {
          font-size: 12px;
          color: #cccccc;
          display: inline-block;
          margin-right: 8px;
          margin-top: 15px;
        }
        .comment-num {
          font-size: 12px;
          color: #cccccc;
          display: inline-block;
          margin-top: 15px;
        }
        i {
          font-size: 12px;
          color: #cccccc;
          margin-top: 15px;
        }
        .error,
        .price {
          margin-top: 15px;
          color: #00aaff;
          font-size: 18px;
        }
      }
      .course-right {
        position: absolute;
        right: 45px;
        top: 70px;
        .change {
          font-size: 14px;
          color: #00aaff;
          width: 160px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border: 1px solid #ccc;
          border-radius: 30px;
        }
        .delete {
          font-size: 12px;
          color: #d8d8d8;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>