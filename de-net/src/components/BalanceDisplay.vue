<template>
  <div>
    <button @click="getBalance">Показать баланс</button>
    <p v-if="balance">Ваш баланс: {{ balance }} ETH</p>
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
          this.balance = parseFloat(parseInt(balance, 16) / 1e18).toFixed(4); // Конвертация из Wei в ETH
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
