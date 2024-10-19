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
        defineAsyncComponent(() => import('../layouts/LayoutFull.vue'))
    )
const updateBreakpoint = () => {
    const width = window.innerWidth;
    if(width < 768) {
        breakpoint.value = 'sm';
        menu.value = defineAsyncComponent (() =>
            import('../layouts/LayoutSmall.vue')
    );
    } else{
        breakpoint.value = 'lg';
        menu.value = defineAsyncComponent(()=>
            import('../layouts/LayoutLarge.vue')
    );
    };
}
onMounted(() => {
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoint);
  });

  return {
    breakpoint,
    menu,
  };
}
