<template>
  <div class="container my-4">
    <div class="form-group">
      <label for="encryptedText">Введите зашифрованный текст:</label>
      <textarea id="encryptedText" v-model="encryptedText" class="form-control" rows="4" placeholder="Введите зашифрованный текст"></textarea>
    </div>
    <div class="form-group">
      <label for="key">Введите ключ для дешифрования:</label>
      <input id="key" v-model="key" type="text" class="form-control" placeholder="Введите ключ" />
    </div>
    <button @click="decryptText" class="btn btn-danger mt-3">Дешифровать</button>
    <p v-if="decryptedText" class="mt-3">Дешифрованный текст: {{ decryptedText }}</p>
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

<style scoped>
.container {
  max-width: 600px;
}
</style>
