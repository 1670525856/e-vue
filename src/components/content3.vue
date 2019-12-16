<template>
  <div class="content">
    <div class="wrapper">
      <qaleft></qaleft>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import qaleft from "./myqa/qa-left";

export default {
  name: "content3",
  components: {
    qaleft
  }
};
</script>

<style lang="less">
.content {
  background-color: #f4f4f4;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .wrapper{
    overflow: hidden;
  }
}
</style>