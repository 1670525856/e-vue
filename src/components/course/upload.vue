<template>
  <div id="upload">
    <router-link  to="/upload3"><img src="../../assets/kecheng.jpg" alt=""></router-link>

<p>1.不得上传未经授权的他人作品，以及色情、反动等违法视频</p>
<p>2.视频大小限制：不支持断点续传，视频文件最大200M</p>
<p>3.支持视频音频格式：MP4、flv、f4v、webm</p>
<p>4.不支持时常小于一秒或大于十小时的视频文件，上传后将不能成功解码</p>
<p>5.高清(360p):视频分辨率>=640*360,视频码率>=800kbps</p>
<p>6.高清(720p):视频分辨率>=960*540,视频码率>=1500kbps</p>
<p>7.高清(1080p):视频分辨率>=1920*1080,视频码率>=2500kbps</p>
  </div>
</template>

<script>


export default {
  name: 'upload',
  components: {

  }
}
</script>

<style lang='less'>
#upload{
    background-color: #fff;
    width: 900px;
    height: 580px;
    float: left;
    margin-top: 30px;
    
    img{
        display: block;
        margin: 0 auto;
        margin-top: 105px;
        margin-bottom: 35px;
    }
    p{
        font-size: 12px;
        color: #dadada;
        margin-left: 260px;
        line-height: 35px;
    }
}
</style>