<script setup>
import SmallEditUser from '@/components/template/small/SmallEditUser.vue';
import LargeUserEdit from '@/components/template/large/LargeUserEdit.vue';

import {UseMonitor} from '../composables/screen.js';

const { breakpoint } = UseMonitor();
</script>

<template>
    <SmallEditUser v-if="breakpoint == `sm`"/>
    <LargeUserEdit v-else/> 
</template>