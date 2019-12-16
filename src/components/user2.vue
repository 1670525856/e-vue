<template>
  <div id="app1">
    <eheader></eheader>
    <router-view></router-view>
    <efooter></efooter>
  </div>
</template>

<script>
import eheader from "./eheader";
import efooter from "./efooter";

export default {
  name: "",
  components: {
    eheader,
    efooter
  }
};
</script>

<style>
</style>