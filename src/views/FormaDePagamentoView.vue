<script setup>
import SmallFormaDePagamento from '@/components/template/small/SmallFormaDePagamento.vue';
import LargeFormaDePagamento from '@/components/template/large/LargeFormaDePagamento.vue';  
import {UseMonitor} from '../composables/screen.js';

const { breakpoint } = UseMonitor();
</script>

<template>
    <SmallFormaDePagamento v-if="breakpoint == `sm`"/>
    <LargeFormaDePagamento v-else/> 
</template>