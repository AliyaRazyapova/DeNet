<template>
  <div class="container my-4">
    <div class="form-group">
      <label for="inputText">Введите текст для шифрования:</label>
      <textarea id="inputText" v-model="inputText" class="form-control" rows="4" placeholder="Введите текст"></textarea>
    </div>
    <div class="form-group">
      <label for="key">Введите ключ шифрования:</label>
      <input id="key" v-model="key" type="text" class="form-control" placeholder="Введите ключ" />
    </div>
    <button @click="encryptText" class="btn btn-info mt-3">Зашифровать</button>
    <p v-if="encryptedText" class="mt-3">Зашифрованный текст: {{ encryptedText }}</p>
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

<style scoped>
.container {
  max-width: 600px;
}
</style>
