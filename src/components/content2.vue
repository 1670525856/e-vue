<template>
  <div class="content">
    <div class="wrapper">
      <cleft></cleft>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import cleft from "./course/c-left";

export default {
  name: "content2",
  components: {
    cleft
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