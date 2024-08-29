<template>
  <div>
    <input v-model="recipient" placeholder="Адрес получателя" />
    <input v-model="amount" placeholder="Сумма в ETH" />
    <button @click="sendTransaction">Отправить транзакцию</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipient: '',
      amount: '',
    };
  },
  methods: {
    async sendTransaction() {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];
          const transactionParameters = {
            to: this.recipient,
            from: account,
            value: '0x' + (this.amount * 1e18).toString(16), // Конвертация ETH в Wei
          };
          await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
          });
        } catch (error) {
          console.error('Ошибка отправки транзакции:', error);
        }
      } else {
        alert('Установите Metamask!');
      }
    },
  },
};
</script>
