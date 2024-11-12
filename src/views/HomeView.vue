<script setup>
import LargeListagemFilme from '@/components/template/large/LargeListagemFilme.vue';
import SmallListagemFilme from '@/components/template/small/SmallListagemFilme.vue';
import {UseMonitor} from '../composables/screen.js';
const { breakpoint } = UseMonitor();

</script>
<template>
    <SmallListagemFilme v-if="breakpoint == `sm`"/>
    <LargeListagemFilme v-else/>
</template>