<script setup>
import LargeCadastro from '@/components/template/large/LargeCadastro.vue';
import SmallCadastro from '@/components/template/small/SmallCadastro.vue';
import {UseMonitor} from '../composables/screen.js';
const { breakpoint } = UseMonitor();
</script>

<template>
    <SmallCadastro v-if="breakpoint =='sm'"/>
    <LargeCadastro v-else/>
</template>