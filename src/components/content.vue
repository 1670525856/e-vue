<template>
  <div class="content">
    <div class="wrapper">
      <left></left>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import left from "./information/left";

export default {
  name: "contentw",
  components: {
    left
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // this.axios.get("/api/getList").then(res => {
    //   window.console.log(res);
    // });
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
  .wrapper {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
  }
}
</style>