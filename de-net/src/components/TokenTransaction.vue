<template>
  <div>
    <input v-model="recipient" placeholder="Адрес получателя" />
    <input v-model="amount" placeholder="Сумма токенов" />
    <button @click="sendToken">Отправить токены</button>
  </div>
</template>

<script>
import Web3 from "web3";

export default {
  data() {
    return {
      recipient: '',
      amount: '',
      tokenAddress: '0xYourTokenContractAddress', // Адрес вашего контракта токена
      tokenABI: [
        // Сокращенный ABI для функции transfer
        {
          constant: false,
          inputs: [
            { name: '_to', type: 'address' },
            { name: '_value', type: 'uint256' },
          ],
          name: 'transfer',
          outputs: [{ name: '', type: 'bool' }],
          type: 'function',
        },
      ],
    };
  },
  methods: {
    async sendToken() {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];

          const contract = new window.web3.eth.Contract(this.tokenABI, this.tokenAddress);
          const amountInWei = window.web3.utils.toWei(this.amount, 'ether'); // Конвертация токенов в Wei

          await contract.methods.transfer(this.recipient, amountInWei).send({ from: account });
        } catch (error) {
          console.error('Ошибка отправки токенов:', error);
        }
      } else {
        alert('Установите Metamask!');
      }
    },
  },
  mounted() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else {
      alert('Установите Metamask!');
    }
  },
};
</script>
