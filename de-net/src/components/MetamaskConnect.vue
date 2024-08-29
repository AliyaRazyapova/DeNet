<template>
  <div>
    <button @click="connectWallet">Подключить Metamask</button>
    <p v-if="account">Ваш адрес: {{ account }}</p>
  </div>
</template>

<script>
import Web3 from 'web3';

export default {
  data() {
    return {
      web3: null,
      account: null,
    };
  },
  methods: {
    async connectWallet() {
      if (window.ethereum) {
        try {
          this.web3 = new Web3(window.ethereum);
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await this.web3.eth.getAccounts();
          this.account = accounts[0];
        } catch (error) {
          console.error('Ошибка подключения:', error);
        }
      } else {
        alert('Установите Metamask!');
      }
    },
  },
};
</script>
