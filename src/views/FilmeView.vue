<script setup>
import FilmeMobile from '@/components/template/small/FilmeMobile.vue';
import Filme from '@/components/template/large/Filme.vue';

import {UseMonitor} from '../composables/screen.js';

const { breakpoint } = UseMonitor();
</script>

<template>
    <FilmeMobile v-if="breakpoint == `sm`"/>
    <Filme v-else/> 
</template>