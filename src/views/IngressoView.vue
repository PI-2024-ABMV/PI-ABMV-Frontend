<script setup>
import SmallIngresso from '../components/template/small/SmallIngresso.vue';
import LargeIngresso from '../components/template/large/LargeIngresso.vue';
import {UseMonitor} from '../composables/screen.js';
const { breakpoint } = UseMonitor();
</script>
<template>
    <SmallIngresso v-if="breakpoint =='sm'"/>
    <LargeIngresso v-else/>
</template>