<template>
  <MetamaskConnect />
  <HashGenerator />
</template>

<script>

import MetamaskConnect from "@/components/MetamaskConnect.vue";
import HashGenerator from "@/components/HashGenerator.vue";

export default {
  name: 'App',
  components: {
    MetamaskConnect,
    HashGenerator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
