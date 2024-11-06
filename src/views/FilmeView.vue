<script setup>
import FilmeMobile from '@/components/FilmeMobile.vue';
import Filme from '@/components/Filme.vue';

import {UseMonitor} from '../composables/screen.js';

const { breakpoint } = UseMonitor();
</script>

<template>
    <FilmeMobile v-if="breakpoint == `sm`"/>
    <Filme v-else/> 
</template>