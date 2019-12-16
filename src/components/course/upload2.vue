<template>
  <div id="upload2">
    <uploadtop></uploadtop>
    <div class="uploadbox">
      <div class="div iconfont">&#xe78d;</div>
      <p class="p p1">保存成功，等待审核</p>
      <p class="p p2">课程上传成功，正在进行人工审核，我们会在24小时后告知您审核结果，请耐心等候。</p>
      <router-link class="upload-btn iconfont" to="/upload">继续上传</router-link>
    </div>
  </div>
</template>

<script>
import uploadtop from "./uploadtop";

export default {
  name: "upload2",
  components: {
    uploadtop
  }
};
</script>

<style lang='less'>
#upload2 {
  width: 900px;
  height: 580px;
  float: left;
  margin-top: 30px;
//   box-sizing: border-box;
}
.uploadbox {
  background-color: #fff;
  overflow: hidden;
  float: left;
  width: 100%;
  height: 424px;
  margin-top: 1px;
  position: relative;
  .div{
      font-size: 120px;
      text-align: center;
      color: #00aaff;
      margin-top: 80px;

  }
  .p{
      margin: 0 auto;
      text-align: center;
      width: 280px;
  }
  .p1{
      font-size: 20px;

  }
  .p2{
      font-size: 12px;
      color: #7f7f7f;
      margin-top: 15px;
      margin-bottom: 20px;
  }
  .upload-btn{
      display: inline-block;
      width: 160px;
      height: 45px;
      text-align: center;
      background-color: #00aaff;
      color: #fff;
      border-radius: 5px;
      line-height: 45px;
      position: absolute;
      left: 50%;
      margin-left: -80px;
  }
}
</style>