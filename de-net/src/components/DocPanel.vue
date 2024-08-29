<template>
  <div class="container my-4">
    <h4>Док панель</h4>
    <div class="list-group mb-3">
      <button
        v-for="app in apps"
        :key="app.name"
        @click="openApp(app.url)"
        class="list-group-item list-group-item-action">
        {{ app.name }}
      </button>
    </div>
    <iframe v-if="currentApp" :src="currentApp" class="w-100" style="height: 500px; border: none;"></iframe>
  </div>
</template>

<script>
import apps from '@/assets/application.json';

export default {
  data() {
    return {
      apps,
      currentApp: null,
    };
  },
  methods: {
    openApp(url) {
      this.currentApp = url;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
