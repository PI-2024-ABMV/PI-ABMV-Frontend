<script setup>

import Login from '@/components/Login.vue';
import LoginMobile from '@/components/LoginMobile.vue';
import {UseMonitor} from '../composables/screen.js';
const { breakpoint } = UseMonitor();
</script>

<template>

<LoginMobile v-if="breakpoint =='sm'"/>
<Login v-else/>

</template>