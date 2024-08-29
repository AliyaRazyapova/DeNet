<template>
  <div class="container my-4">
    <div class="form-group">
      <label for="recipient">Адрес получателя:</label>
      <input id="recipient" v-model="recipient" class="form-control" placeholder="Адрес получателя" />
    </div>
    <div class="form-group">
      <label for="amount">Сумма токенов:</label>
      <input id="amount" v-model="amount" class="form-control" placeholder="Сумма токенов" />
    </div>
    <button @click="sendToken" class="btn btn-warning mt-3">Отправить токены</button>
  </div>
</template>

<script>
import Web3 from 'web3';

export default {
  data() {
    return {
      recipient: '',
      amount: '',
      tokenAddress: '0xYourTokenContractAddress',
      tokenABI: [
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

          const web3 = new Web3(window.ethereum);
          const contract = new web3.eth.Contract(this.tokenABI, this.tokenAddress);
          const amountInWei = web3.utils.toWei(this.amount, 'ether');

          await contract.methods.transfer(this.recipient, amountInWei).send({ from: account });
        } catch (error) {
          console.error('Ошибка отправки токенов:', error);
        }
      } else {
        alert('Установите Metamask!');
      }
    },
  },
};
</script>
