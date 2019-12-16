<template>
  <div id="app1">
    <login></login>
    <router-view></router-view>
  </div>
</template>

<script>
import login from "./login/ehead";

export default {
  name: "",
  components: {
    login
  }
};
</script>

<style>
</style>