<script setup>
import ListagemFilmeMobile from '@/components/ListagemFilmeMobile.vue';
import {UseMonitor} from '../composables/screen.js';
const { menu, breakpoint } = UseMonitor();

</script>
<template>
    
    <ListagemFilmeMobile v-if="breakpoint == `sm`"/>
    
    <component :is="menu" v-else/>
</template>