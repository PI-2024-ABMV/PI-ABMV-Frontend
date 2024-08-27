<script setup>
import {UseMonitor} from '../composables/screen.js';
import LargeHeader from '../components/layouts/header/LargeHeader.vue';
const { menu } = UseMonitor();
</script>

<template>
  <component :is="menu"/>
  <RouterView />
</template>

<style scoped>

</style>
