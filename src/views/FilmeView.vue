<script setup>
import SmallFilme from '@/components/template/small/SmallFilme.vue';
import LargeFilme from '@/components/template/large/LargeFilme.vue';

import {UseMonitor} from '../composables/screen.js';

const { breakpoint } = UseMonitor();
</script>

<template>
    <SmallFilme v-if="breakpoint == `sm`"/>
    <LargeFilme v-else/> 
</template>