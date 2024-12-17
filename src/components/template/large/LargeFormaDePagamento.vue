<script setup>
import { ref } from 'vue'   
const pagar = ref(false)


function final(){
pagar.value = !pagar.value

}
</script>
<template>
    <div class="container">
        <h2>Selecione o método de pagamento</h2>
        <div class="pagamento" @click="final">
                <img src="../../../../public/pix.png" alt="PIX" height="50vh">
                <p>Pix</p>
            </div>
            <div  v-if="pagar"> 
                <router-link to="/meusingressos" class="link"> <button>Finalizar Compra</button> </router-link>
            </div>

    </div>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10vh;
    align-items: center;
    height: 50vh;
    width: 100%;
    font-family: 'Lexend Mega';
    color: #DDB1FF;
    margin-top: 5vh;
}
.container h2{
    font-family: 'Lexend Mega';
    color: #DDB1FF;
 
}
.pagamento{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60%;
    gap: 1rem;
    margin-top: 5vh;
    background-color: #474545;
    color: #ffffff;
    border-radius: 20px;
    padding-left: 1rem;
    cursor: pointer;    
}
.pagamento p{
    font-size: medium;
    font-family: 'Lexend Mega';
}
.pagamento:hover{
    background-color: #585757;
    color: #ffffff;
    border: solid 2px #DDB1FF;  
    transition: background-color 0.5s;
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
</style>