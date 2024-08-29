<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item" :class="{ active: isActive('/') }">
              <router-link class="nav-link" to="/">Metamask</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('/hash-generator') }">
              <router-link class="nav-link" to="/hash-generator">Hash Generator</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('/doc-panel') }">
              <router-link class="nav-link" to="/doc-panel">Doc Panel</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('/encrypt-text') }">
              <router-link class="nav-link" to="/encrypt-text">Encrypt Text</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('/decrypt-text') }">
              <router-link class="nav-link" to="/decrypt-text">Decrypt Text</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('/balance-display') }">
              <router-link class="nav-link" to="/balance-display">Balance Display</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('/send-transaction') }">
              <router-link class="nav-link" to="/send-transaction">Send Transaction</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('/token-transaction') }">
              <router-link class="nav-link" to="/token-transaction">Token Transaction</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    isActive(path) {
      return this.$route.path === path;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar-nav .nav-item.active .nav-link {
  color: #007bff;
  font-weight: bold;
}

.navbar-nav .nav-link {
  color: #343a40;
}

.navbar-nav .nav-link:hover {
  color: #0056b3;
}
</style>
