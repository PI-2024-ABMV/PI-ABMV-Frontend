<script setup>
import SelecaoAssento from '@/components/template/large/SelecaoAssento.vue';
import SmallSelecaoAssento from '@/components/template/small/SmallSelecaoAssento.vue';
import {UseMonitor} from '../composables/screen.js';
const { breakpoint } = UseMonitor();
</script>
<template>
    <SmallSelecaoAssento v-if="breakpoint =='sm'"/>
    <SelecaoAssento v-else/>
</template>