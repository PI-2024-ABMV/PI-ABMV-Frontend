<script setup>
import SelecionadorDeAssento from '@/components/SelecionadorDeAssento.vue';
import {defineProps} from 'vue';

const props = defineProps({
  dias: {
    type: Array,
    default: () => [
    'Seg ', 'Ter ', 'Qua ', 'Qui ', 'Sex ',
    ]
  },
  numeros: {
    type: Array,
    default: () => [
      '22 ', '23 ', '24 ', '25 ', '26 '
    ]
  }
});



</script>
<template>
  <div class="container">
    <div class="especificacoes">
     
        <div class="datas">
            
          <div class="dia" v-for="(dia, index) in dias" :key="index">
            <div class="numeros">
              {{ numeros[index] }}
            </div>
            {{ dia }}
          </div>
         
    
          
          </div>
          <div class="horario">
          
          </div>
        </div>
      
    
    
    
    
    <div class="assentos">
        <SelecionadorDeAssento/>
    </div>

  </div>

</template>
<style scoped>
.container  {
    display: flex;
    flex-direction: column    ;
    justify-content: center;
    align-items: center;
    width: 100%;
  
}
.especificacoes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
    width: 70%;
    border: solid 1px #DDB1FF;
    border-radius: 20px;
}
.datas {
    display: flex;
    flex-direction: space-between;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    padding: 20px;
    border-right: solid 1px #DDB1FF;
    color: #DDB1FF;
  
}
.dia{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: solid 1px #DDB1FF;
    border-radius: 20px;
    color: #DDB1FF;
    font-size: 15px;
    gap: 0.5vh;
    width: 3vw;
    height: 7vh;
    align-items: center;
    box-shadow: 1px 1px 5px #DDB1FF;
}
.numeros{ 
    font-size: 20px;
}

.datas :hover {
    background-color: #DDB1FF;
    color: white;
    transition: background-color 0.2s, color 0.2s;
}
</style>