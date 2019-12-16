<template>
  <div id="upload3">
    <uploadtop></uploadtop>
    <div class="uoloadbox">
      <div class="biaoti">
        标题
        <input type="text" placeholder="请输入课程标题" />
      </div>
      <div class="fenlei">
        分类
        <select name id placeholder="请选择课程分类">
          <option value>搞笑</option>
          <option value>教育</option>
        </select>
      </div>
      <div class="jieshao">
        <span>课程介绍</span>
        <textarea name id cols="30" rows="10" placeholder="请输入课程介绍"></textarea>
      </div>
      <router-link class="btn" to="/upload2">保存信息</router-link>
    </div>
  </div>
</template>

<script>
import uploadtop from "./uploadtop";

export default {
  name: "upload3",
  components: {
    uploadtop
  }
};
</script>

<style lang='less'>
#upload3 {
  width: 900px;
  height: 580px;
  float: left;
  margin-top: 30px;
  .uoloadbox {
    background-color: #fff;
    padding: 30px 40px 40px 0px;
    margin-top: 1px;
    float: left;
    width: 100%;
    height: 424px;
    box-sizing: border-box;
    div {
      font-size: 14px;
      color: #acacac;
      text-align: right;
      margin-bottom: 15px;
    }
    .biaoti {
      input {
        width: 738px;
        height: 43px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline: none;
        font-size: 14px;
        text-indent: 20px;
        margin-left: 20px;
        &::placeholder {
          color: #e0e0e0;
        }
      }
    }
    .fenlei {
      select {
        width: 740px;
        height: 45px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        outline: none;
        font-size: 14px;
        text-indent: 20px;
        color: #e0e0e0;
        margin-left: 20px;
      }
    }
    .jieshao {
      position: relative;
      span {
        font-size: 14px;
        color: #acacac;
        text-align: right;
        position: absolute;
        top: 30px;
        left: 40px;
      }
      textarea {
        resize: none;
        margin: 0 auto;
        border: 1px solid #ededed;
        outline: none;
        padding: 10px;
        width: 740px;
        box-sizing: border-box;
        margin-left: 20px;
        border-radius: 5px;
        &::placeholder {
          color: #e0e0e0;
        }
      }
    }
    .btn{
display: inline-block;
      width: 160px;
      height: 45px;
      text-align: center;
      background-color: #00aaff;
      color: #fff;
      border-radius: 5px;
      line-height: 45px;
        margin-left: 120px;
    }
  }
}
</style>