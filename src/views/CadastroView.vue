<script setup>
import Cadastro from '@/components/template/large/Cadastro.vue';
import CadastroMobile from '@/components/template/small/CadastroMobile.vue';
import {UseMonitor} from '../composables/screen.js';
const { breakpoint } = UseMonitor();
</script>

<template>
    <CadastroMobile v-if="breakpoint =='sm'"/>
    <Cadastro v-else/>
</template>