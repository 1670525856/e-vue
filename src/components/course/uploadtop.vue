<template>
  <div id="uploadtop">
    <p class="p">全民股东_15321568945.mp3</p>
    <div class="div iconfont"></div>
    <span class="span">上传成功 100%</span>
  </div>
</template>

<script>
export default {
  name: "uploadtop",
  components: {}
};
</script>

<style lang='less'>
#uploadtop {
  padding: 40px 35px;
  background-color: #fafeff;
  width: 900px;
  height: 155px;
  float: left;
//   margin-top: 30px;
  box-sizing: border-box;
  .p{
      font-size: 12px;
  }
  .div{
      width: 95%;
      height: 8px;
      background-color: #00aaff;
      border-radius: 8px;
      position: relative;
      margin-top: 15px;
      margin-bottom: 15px;
    &::before{
        content: '\e78d';
        color: #00aaff;
        position: absolute;
        right: -30px;
        bottom: -5px;  
    }
    
  }
  .span{
      font-size: 12px;
      color: #b1b1b1;
  }
}
</style>