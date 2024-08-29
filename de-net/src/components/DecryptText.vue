<template>
  <div>
    <textarea v-model="encryptedText" placeholder="Введите зашифрованный текст"></textarea>
    <input v-model="key" placeholder="Введите ключ для дешифрования" />
    <button @click="decryptText">Дешифровать</button>
    <p v-if="decryptedText">Дешифрованный текст: {{ decryptedText }}</p>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';

export default {
  data() {
    return {
      encryptedText: '',
      key: '',
      decryptedText: '',
    };
  },
  methods: {
    decryptText() {
      const bytes = CryptoJS.AES.decrypt(this.encryptedText, this.key);
      this.decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    },
  },
};
</script>
