<script setup>

import Login from '@/components/template/large/Login.vue';
import LoginMobile from '@/components/template/small/LoginMobile.vue';
import {UseMonitor} from '../composables/screen.js';
const { breakpoint } = UseMonitor();
</script>

<template>

<LoginMobile v-if="breakpoint =='sm'"/>
<Login v-else/>

</template>