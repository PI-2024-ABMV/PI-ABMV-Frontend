<script setup>
import ListagemFilme from '@/components/template/large/ListagemFilme.vue';
import ListagemFilmeMobile from '@/components/template/small/ListagemFilmeMobile.vue';
import {UseMonitor} from '../composables/screen.js';
const { breakpoint } = UseMonitor();

</script>
<template>
    <ListagemFilmeMobile v-if="breakpoint == `sm`"/>
    <ListagemFilme v-else/>
</template>