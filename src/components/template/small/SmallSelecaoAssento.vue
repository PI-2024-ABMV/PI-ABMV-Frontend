<script setup>
import SelecionadorDeAssento from '@/components/SelecionadorDeAssento.vue';
import { ref } from 'vue';
import SofaSingle from 'vue-material-design-icons/SofaSingle.vue';
import TicketConfirmationOutline from 'vue-material-design-icons/TicketConfirmationOutline.vue';

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
       <div class="zonaAssento">
       <div class="assentoEscolhido">
        <div class="locais">
          <TicketConfirmationOutline class="Icon" size="70"/>
          <p class="ass">{{seat}}</p>
        </div>
        <div class="escolhaIngresso">
          <router-link to="/tipoingresso" class="link" > <button> Escolha de ingresso </button> </router-link>
        </div>
      </div>
      </div>
 </div>
</template>
<style scoped>
.container{
  margin-top: 5vh;
}
.assentos{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  gap: 0.5vh;
  width: 100%;
  color: #262424;
  
}
.zonaAssento {
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  height: 30vh;
  color: #262424;
 
}
.escolhaIngresso{
  position: absolute;
  right: 5vw;
}
.assentoEscolhido{
  display: flex;
  flex-direction: row;
  height: 10vh;
  gap: 40vw;
  color: #262424;
  font-weight: bold;
  border-bottom: solid;
  margin-left: 1vw;
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
  font-size: small;
  font-weight: bold;
  font-family: 'Lexend Mega';
  padding: 1vh;
  width: 35vw;
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
  flex-direction: row;
  justify-content: left;
  align-items: center;
  height: 50%;
  width: 100%;
  gap: 4vw;
  font-family: 'Lexend Mega';
  color: #DDB1FF;
  margin-left: 5vw;
  
}
.locais p{
  font-size: 1.5vh;
  font-weight: bold;
  font-family: 'Lexend Mega';
  color: #DDB1FF;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap:break-word ;
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