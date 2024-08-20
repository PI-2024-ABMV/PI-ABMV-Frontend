import{
    defineAsyncComponent,
    onMounted,
    onUnmounted,
    ref,
    shallowRef,
  } from 'vue';

export function UseMonitor() {
    const breakpoint = ref('sm');
    const menu = shallowRef(
        defineAsyncComponent(() => import('@/components/layouts/SmallHeader.vue'))
    )
};

const UpdateBreakpoint = () => {
    const width = window.innerWidth;
    if(width < 768) {
        
    }

}

