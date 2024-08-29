<template>
  <div class="container my-4">
    <div class="form-group">
      <label for="recipient">Адрес получателя:</label>
      <input id="recipient" v-model="recipient" class="form-control" placeholder="Адрес получателя" />
    </div>
    <div class="form-group">
      <label for="amount">Сумма в ETH:</label>
      <input id="amount" v-model="amount" class="form-control" placeholder="Сумма в ETH" />
    </div>
    <button @click="sendTransaction" class="btn btn-success mt-3">Отправить транзакцию</button>
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
            value: '0x' + (this.amount * 1e18).toString(16),
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
