<script setup>

import SmallUser from '@/components/template/small/SmallUser.vue';
import LargeUser from '@/components/template/large/LargeUser.vue';
import {UseMonitor} from '../composables/screen.js';
const { breakpoint } = UseMonitor();
</script>

<template>

<SmallUser v-if="breakpoint =='sm'"/>
<LargeUser v-else/>

</template>