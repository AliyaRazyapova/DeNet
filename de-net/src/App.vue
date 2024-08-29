<template>
  <MetamaskConnect />
  <HashGenerator />
  <DocPanel  />
  <EncryptText />
  <DecryptText />
</template>

<script>

import MetamaskConnect from "@/components/MetamaskConnect.vue";
import HashGenerator from "@/components/HashGenerator.vue";
import DocPanel from "@/components/DocPanel.vue";
import EncryptText from "@/components/EncryptText.vue";
import DecryptText from "@/components/DecryptText.vue";

export default {
  name: 'App',
  components: {
    MetamaskConnect,
    HashGenerator,
    DocPanel,
    EncryptText,
    DecryptText,
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
