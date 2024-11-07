<script setup>
import {UseMonitor} from '../composables/screen.js';
const { menu } = UseMonitor();

</script>
<template>
    <component :is="menu"/>
</template>