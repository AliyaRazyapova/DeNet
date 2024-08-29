<template>
  <div>
    <textarea v-model="inputText" placeholder="Введите текст"></textarea>
    <button @click="generateHash">Получить SHA256</button>
    <p v-if="hash">Хэш: {{ hash }}</p>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';

export default {
  data() {
    return {
      inputText: '',
      hash: '',
    };
  },
  methods: {
    generateHash() {
      this.hash = CryptoJS.SHA256(this.inputText).toString();
    },
  },
};
</script>
