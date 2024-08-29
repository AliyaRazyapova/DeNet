<template>
  <div class="container my-4">
    <button @click="connectMetamask" class="btn btn-primary">Подключить Metamask</button>
    <p v-if="account" class="mt-3">Адрес вашего кошелька: {{ account }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: null,
    };
  },
  methods: {
    async connectMetamask() {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          this.account = accounts[0];
        } catch (error) {
          console.error('Ошибка подключения Metamask:', error);
        }
      } else {
        alert('Установите Metamask!');
      }
    },
  },
};
</script>
