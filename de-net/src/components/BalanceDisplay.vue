<template>
  <div class="container my-4">
    <button @click="getBalance" class="btn btn-primary">Показать баланс</button>
    <p v-if="balance" class="mt-3">Ваш баланс: {{ balance }} ETH</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: null,
    };
  },
  methods: {
    async getBalance() {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];
          const balance = await window.ethereum.request({
            method: 'eth_getBalance',
            params: [account, 'latest'],
          });
          this.balance = parseFloat(parseInt(balance, 16) / 1e18).toFixed(4);
        } catch (error) {
          console.error('Ошибка получения баланса:', error);
        }
      } else {
        alert('Установите Metamask!');
      }
    },
  },
};
</script>
