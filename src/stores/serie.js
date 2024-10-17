import { defineStore } from 'pinia'
import { reactive } from "vue";

export const useSerieStore = defineStore('serie', () => {

 const state = reactive({
    serie: []
 });


  
  return { 
    state,
   }
});