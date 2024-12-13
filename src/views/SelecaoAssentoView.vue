<script setup>

import LargeTipoIngresso from '@/components/template/large/LargeTipoIngresso.vue';
import SmallTipoIngresso from '@/components/template/small/SmallTipoingresso.vue';
import {UseMonitor} from '../composables/screen.js';
const { breakpoint } = UseMonitor();
</script>

<template>

<SmallTipoIngresso v-if="breakpoint =='sm'"/>
<LargeTipoIngresso v-else/>

</template>