<template>
  <div class="container my-4">
    <div class="form-group">
      <label for="inputText">Введите текст для хеширования:</label>
      <textarea id="inputText" v-model="inputText" class="form-control" rows="4" placeholder="Введите текст"></textarea>
    </div>
    <button @click="generateHash" class="btn btn-secondary mt-3">Получить SHA256</button>
    <p v-if="hash" class="mt-3">Хэш: {{ hash }}</p>
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

<style scoped>
.container {
  max-width: 600px;
}
</style>
