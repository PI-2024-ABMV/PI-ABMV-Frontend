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
            <p>Horário</p>
            <select name="horarios" id="horarios" placeholder="Selecione um horário">
              <option value=""> Selecione um horário</option>
              <option value=""> 13:10</option>
              <option value=""> 15:00</option>
              <option value=""> 16:50</option>
              <option value=""> 18:40</option>
            </select>
          
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
    justify-content: left;
    margin-top: 2vh;
    height: 12vh;
    width: 70%;
    border: solid 1px #DDB1FF;
    border-radius: 20px;
}
.datas {
    display: flex;
    flex-direction: space-between;
    justify-content: center;
    align-items: center;
    gap: 3vw;
    padding: 3vh;
    border-right: solid 1px #DDB1FF;
    color: #DDB1FF;
    width: 60%;
  
}
.dia{
    display: flex;
    flex-direction: column;
    padding: 1vh;
    border: solid 1px #DDB1FF;
    border-radius: 20px;
    color: #DDB1FF;
    font-size: small;
    gap: 0.5vh;
    width: 3vw;
    height: 7.5vh;
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
    cursor: pointer;
}
.horario{
  display: flex;
  flex-direction: column ;
  width: 40%;
  padding: 1vw;
  gap: 1vh;
  color: #DDB1FF;
 font-size: small;
  font-weight: bold;
}
.horario select{
  height: 4vh;
  background-color: #262424;
  color: #DDB1FF;
  border: solid 1px #DDB1FF;
  border-radius: 15px;
  font-size: medium;
  font-weight: bold;
  padding-left: 1vh;
  
}
select::-webkit-keygen-select{
  border-style: outset;
}
</style>