<script setup>
import SelecionadorDeAssento from '@/components/SelecionadorDeAssento.vue';
import { defineProps, ref } from 'vue';
import SofaSingle from 'vue-material-design-icons/SofaSingle.vue';

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

const seat = ref('')

const rowToLetter = (num) => String.fromCharCode(65 + num); 

function seleciona(selectedSeats){ 
  seat.value = `${selectedSeats.map(seat => `${rowToLetter(seat.row)}${seat.col + 1}`)}`
}



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
    <div class="zonaAssento">
      <div class="assentoEscolhido">
        <div class="locais">
          <h3>Lugares selecionados</h3>
          <p class="ass">{{seat}}</p>
        </div>
        <div class="escolhaIngresso">
          <router-link to="/tipoingresso" class="link" > <button> Escolha de Ingresso</button> </router-link>
        </div>
      </div>
      <div class="assentos">
        <SelecionadorDeAssento @seleciona="seleciona" />
        <div class="tela">
          <h2>Tela</h2>
        </div>
       <div class="legenda">
         <p><SofaSingle :size="20" :fill-color="'#DDB1FF'"/> Disponível</p>
         <p><SofaSingle :size="20" :fill-color="'gray'"/> Selecionado</p>
         <p><SofaSingle :size="20" :fill-color="'red'"/> Indisponível</p>
        </div>
        
       </div>
      </div>

    </div>



</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
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
  box-shadow: 1px 1px 5px #DDB1FF;

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
  box-shadow: 1px 1px 5px #DDB1FF;

}

.dia {
  display: flex;
  flex-direction: column;
  padding: 1vh;
  border: solid 1px #DDB1FF;
  border-radius: 20px;
  color: #DDB1FF;
  font-size: x-small;
  font-family: 'Lexend Mega';
  gap: 0.5vh;
  width: 3vw;
  height: 7.5vh;
  align-items: center;
  box-shadow: 1px 1px 5px #DDB1FF;
}

.numeros {
  font-size: large
}

.datas :hover {
  background-color: #DDB1FF;
  color: white;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
}

.horario {
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 1vw;
  gap: 1vh;
  color: #DDB1FF;
  
}
.horario p {
  font-size: x-small;
  font-weight: bold;
   font-family: 'Lexend Mega';
  color: #DDB1FF;
}

.horario select {
  height: 4vh;
  background-color: #262424;
  color: #DDB1FF;
  border: solid 1px #DDB1FF;
  border-radius: 15px;
  font-size: small;
  font-weight: bold;
  font-family: 'Lexend Mega';
  padding-left: 1vh;

}

select::-webkit-keygen-select {
  border-style: outset;
}

.zonaAssento {
  display: flex;
  flex-direction: row;
  columns: 2vw;
  column-gap: 2vw;
  justify-content: space-around;
  margin-top: 10vh;
  width: 100%;
  height: 50vh;
  right: 0%;
  color: #262424;
 
}
.assentos{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  right: 0%;
  color: #262424;
  border: solid 1px #DDB1FF;
  border-radius: 20px;
  box-shadow: 1px 1px 5px #DDB1FF;
}
.legenda{
  display: flex;
  flex-direction: row;
  color: #DDB1FF;
  gap: 1vw;
  padding: 1vh;
  align-items: center;
  text-align: center;
  
}
.legenda p{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2vh;
  font-family: 'Lexend Mega';
  gap: 0.4vw;
}
.tela{
  border-bottom: solid 3px #DDB1FF;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 3px 0px  1px #DDB1FF;
  color: #DDB1FF;
  text-align: center;
  margin-top: 4vh;
  gap: 4vh;
}
.tela h2{
  font-size: 2vh;
  font-weight: normal;  
  font-family: 'Lexend Mega', sans-serif;

}
.link{
  text-decoration: none;
  color: #DDB1FF;
  background-color: 262424;
}
.link button{
  background-color: #262424;
  color: #DDB1FF;
  border: solid 1px #DDB1FF;
  border-radius: 30px;
  font-size: large;
  font-weight: bold;
  font-family: 'Lexend Mega';
  padding: 1vh;
  margin-top: 1vh;
  cursor: pointer;
  height: 10vh;
  box-shadow: 1px 1px 5px #DDB1FF;
}
.link button:hover{
  background-color: #DDB1FF;
  color: #262424;
  transition: background-color 0.2s, color 0.2s;
}
.locais{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 80%;
  gap: 4vh;
  font-family: 'Lexend Mega';
  color: #DDB1FF;
  border: solid 1px #DDB1FF;
  border-radius: 15px;
  box-shadow: 1px 1px 5px #DDB1FF;
}
.locais h3{
  font-size: 2vh;
  font-weight: bold;
  font-family: 'Lexend Mega';
  color: #DDB1FF;
}
.locais p{
  font-size: 1.5vh;
  font-weight: bold;
  font-family: 'Lexend Mega';
  color: #DDB1FF;
}

.assentoEscolhido{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 30%;
  background-color: #262424;
  font-size: large;
  font-weight: bold;
  border-bottom: solid
}
.ass{
  display: flex;
  flex-direction: column;
}
</style>