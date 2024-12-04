<script setup>
import SelecionadorDeAssento from '@/components/SelecionadorDeAssento.vue';
import {defineProps} from 'vue';

const props = defineProps({
  dias: {
    type: Array,
    default: () => ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']
  },
  Numdia: {
    type: Array,
    default: () => ['22', '23', '24', '25', '26']
  }
});



</script>
<template>
<div class="especificacoes">
 
    <div class="datas">
     
        <div class="dia">

            <div v-for="(dia, index) in dias" :key="index" >
              {{ dia }}
              {{ Numdia[index] }}
            </div>
              
        </div>
      </div>
      <div class="horario">
      
      </div>
    </div>
  




<div class="assentos">
    <SelecionadorDeAssento/>
</div>

</template>
<style scoped>
.especificacoes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
    border: solid 1px #DDB1FF;
}
.datas {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-right: solid 1px #DDB1FF;
}
.dia{
    display: flex;
    flex-direction: column ;
    padding: 10px;
    border: solid 1px #DDB1FF;
    color: #DDB1FF;
    font-size: 10px;
}
</style>