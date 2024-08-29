<template>
  <div>
    <div v-for="app in apps" :key="app.name">
      <button @click="openApp(app.url)">{{ app.name }}</button>
    </div>
    <iframe v-if="currentApp" :src="currentApp" width="100%" height="500px"></iframe>
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
