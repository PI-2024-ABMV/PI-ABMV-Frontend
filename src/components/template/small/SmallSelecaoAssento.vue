<script setup>
import SelecionadorDeAssento from '@/components/SelecionadorDeAssento.vue';
import { ref } from 'vue';
import SofaSingle from 'vue-material-design-icons/SofaSingle.vue';

const seat = ref('')

const rowToLetter = (num) => String.fromCharCode(65 + num); 

function seleciona(selectedSeats){ 
  seat.value = `${selectedSeats.map(seat => `${rowToLetter(seat.row)}${seat.col + 1}`)}`
}
</script>
<template>
 <div class="container">

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
       <div class="assentoEscolhido">
        <div class="locais">
          <h3>Lugares selecionados</h3>
          <p class="ass">{{seat}}</p>
        </div>
        <div class="escolhaIngresso">
          <router-link to="/tipoingresso" class="link" > <button> Escolha de Ingresso</button> </router-link>
        </div>
      </div>
 </div>
</template>
<style scoped>
.assentos{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  width: 100%;
  color: #262424;
  
}
.assentoEscolhido{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #DDB1FF;
  color: #262424;
  font-size: large;
  font-weight: bold;
  border-bottom: solid
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
  width: 90%;
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
  font-size: 0.5vh;
  font-weight: bold;
  font-family: 'Lexend Mega';
  color: #DDB1FF;
}
.assentoEscolhido{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 30%;
  background-color: #262424;
  font-size: medium;
  font-weight: bold;
  border-bottom: solid
}
.ass{
  display: flex;
  flex-direction: column;
}
</style>