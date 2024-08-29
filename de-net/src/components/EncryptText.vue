<template>
  <div>
    <textarea v-model="inputText" placeholder="Введите текст"></textarea>
    <input v-model="key" placeholder="Введите ключ для шифрования" />
    <button @click="encryptText">Зашифровать</button>
    <p v-if="encryptedText">Зашифрованный текст: {{ encryptedText }}</p>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';

export default {
  data() {
    return {
      inputText: '',
      key: '',
      encryptedText: '',
    };
  },
  methods: {
    encryptText() {
      this.encryptedText = CryptoJS.AES.encrypt(this.inputText, this.key).toString();
    },
  },
};
</script>
