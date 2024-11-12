<script setup>

import LargeLogin from '@/components/template/large/LargeLogin.vue';
import SmallLogin from '@/components/template/small/SmallLogin.vue';
import {UseMonitor} from '../composables/screen.js';
const { breakpoint } = UseMonitor();
</script>

<template>

<SmallLogin v-if="breakpoint =='sm'"/>
<LargeLogin v-else/>

</template>