<template>
  <div id="home">
    <div class="wrapper">
      <div class="left">
        <router-link class="xinxi" to="/content">
          <img src="../assets/luomio.jpg" alt />
          <div class="xinxi">
            <p class="name iconfont">罗密欧 &#xe60b;</p>
            <p class="wanzheng">信息完整度</p>
            <p class="em iconfont">&#xe636;</p>
          </div>
        </router-link>
        <div class="div2">
          <router-link class="tixian" to>申请提现</router-link>
          <div class="yue">
            <p>账户余额</p>
            <p>
              <span>248</span> 元
            </p>
          </div>
        </div>
        <div class="renzheng">
          <router-link class="renzheng1" to="/uncertified">
            <img src="../assets/homerenzheng1.jpg" alt />
            <p>
              实名认证
              <span>【未认证】</span>
            </p>
          </router-link>
          <router-link class="renzheng1" to="/uncertified">
            <img src="../assets/homerenzheng2.jpg" alt />
            <p>
              实名认证
              <span>【未认证】</span>
            </p>
          </router-link>
        </div>
      </div>
        <router-link class="kecheng" to="/content2">
            <p class="p1">我上传的课程</p>
            <p class="p2"><span>3 </span> 个</p>
            <p class="p3">查看详情></p>
        </router-link>
        <router-link class="kecheng kecheng2" to="/content3">
            <p class="p1">我的问答</p>
            <p class="p2"><span>3 </span> 个</p>
            <p class="p3">查看详情></p>
        </router-link>

        <div class="xueyuan">
            <p>最新学员<span>一周内新增25位学员</span></p>
            <div class="xue">
                <img src="../assets/yang.jpg" alt="">
            <p>杨幂</p>
            </div>
            <div class="xue">
                <img src="../assets/yang.jpg" alt="">
            <p>杨幂</p>
            </div>
            <div class="xue">
                <img src="../assets/yang.jpg" alt="">
            <p>杨幂</p>
            </div>
            <div class="xue">
                <img src="../assets/yang.jpg" alt="">
            <p>杨幂</p>
            </div>
            <div class="xue xuer">
                <img src="../assets/yang.jpg" alt="">
            <p>杨幂</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {}
};
</script>

<style lang='less'>
.wrapper {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
  }
#home {
  background-color: #f4f4f4;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .wrapper {
    overflow: hidden;
    .left {
      background-color: #fff;
      margin: 30px 20px 30px 0px;
      width: 450px;
      height: 550px;
      overflow: hidden;
      float: left;
      .xinxi {
        display: block;
        height: 150px;
        border-bottom: 1px solid #f4f4f4;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        img {
          float: left;
          margin: 30px 30px 0px 35px;
        }
        .xinxi {
          float: left;
          .name {
            margin-top: 35px;
          }
          .wanzheng {
            font-size: 12px;
            color: #818181;
            margin-top: 20px;
            &::before {
              content: "高";
              float: right;
              color: #00aaff;
              margin-left: 10px;
            }
            &::after {
              content: "";
              width: 140px;
              height: 8px;
              background-color: #00aaff;
              border-radius: 8px;
              float: right;
              margin-top: 4px;
              margin-left: 10px;
            }
          }
          .em {
            margin-top: 15px;

            &::before {
              content: "\e70a";
              color: #00aaff;
              margin-right: 5px;
            }
            &::after {
              content: "\e660";
              margin-left: 5px;
            }
          }
        }
      }
      .div2 {
        width: 100%;
        height: 110px;
        border-bottom: 1px solid #f4f4f4;
        .tixian {
          float: left;
          width: 160px;
          height: 35px;
          text-align: center;
          line-height: 35px;
          font-size: 12px;
          background-color: #00aaff;
          color: #fff;
          border-radius: 35px;
          margin: 40px 55px 0px 30px;
        }
        .yue {
          float: left;
          font-size: 12px;
          color: #949494;
          margin-top: 25px;
          span {
            font-size: 30px;
            color: #000;
            line-height: 50px;
          }
        }
      }
      .renzheng {
        width: 450px;
        height: 285px;
        padding-left: 40px;
        box-sizing: border-box;
        .renzheng1 {
          float: left;
          margin-top: 65px;
          margin-right: 30px;
          p {
            font-size: 12px;
            color: #8094b0;
            text-align: center;
            margin-top: 20px;
            span {
              color: #d22700;
            }
          }
        }
      }
    }
    .kecheng{
        float: left;
        width: 355px;
        height: 265px;
        margin-top: 30px;
        margin-right: 20px;
        background:url(../assets/bg1.jpg) no-repeat #fff;
        background-position: right bottom ;
        padding-top: 30px;
        padding-left: 50px;
        box-sizing: border-box;
        .p1{
            margin-bottom: 35px;
            font-size: 18px;
        }
        .p2{
            font-size: 14px;
            color: #969696;
            margin-bottom: 30px;
            span{
                font-size: 30px;   
                color: #000; 
            }
        }
        .p3{
            font-size: 12px;
            color: #a6a6a6;
        }
    }
    .kecheng2{
        margin-right: -20px;
        background:url(../assets/bg2.jpg) no-repeat #fff;
        background-position: right bottom ;
    }
    .xueyuan{
        float: left;
        margin-top: 20px;
        background-color: #fff;
        width: 730px;
        height: 265px;
        padding: 30px 55px 50px 50px;
        box-sizing: border-box;
        p{
            font-size: 18px;
            span{
                float: right;
                font-size: 12px;
                color: #a6a6a6;
            }
        }
        .xue{
            float: left;
            margin-right: 45px;
            p{
                text-align: center;
                font-size: 12px;
                color: #a6a6a6;
                margin-top: 10px;
            }
        }
        .xuer{
            margin-right: 0px;
        }
        img{
            margin-top: 30px;
        }
    }
  }
}
</style>