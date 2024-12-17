<script setup>
import { ref } from 'vue';
import TicketConfirmationOutline from 'vue-material-design-icons/TicketConfirmationOutline.vue';


const contadormeia = ref(0);
const contadorint = ref(0);

function incrementmeia() {
    contadormeia.value++;
}

function decrementmeia() {
    if (contadormeia.value > 0) {
        contadormeia.value--;
    }
}
function incrementint() {
    contadorint.value++;
}

function decrementint() {
    if (contadorint.value > 0) {
        contadorint.value--;
    }
}


</script>
<template>
<div class="Selecao">

    <div class="Ingresso">
        <TicketConfirmationOutline size="90"/>
        <div class="info">
            <h2>Inteira</h2>
            <p>R$40,00</p>
        </div>
        <div class="AddExc">

            <button class="Botao" @click="incrementint">+</button>
            {{ contadorint }}
            <button class="Botao" @click="decrementint">-</button>

        </div>
    </div>  
    <div class="Ingresso">
        <TicketConfirmationOutline size="90"/>
        <TicketOutline/>
        <div class="info">
            <h2>Meia</h2>
            <p>R$20,00</p>
        </div>
        <div class="AddExc">
            
            <button class="Botao" @click="incrementmeia">+</button>
            {{ contadormeia }}
            <button class="Botao" @click="decrementmeia">-</button>
        
        </div>
    </div>  
   
    <router-link to="/pagamento" class="link"><button class="final"> Finalizar Compra</button>
    </router-link>

</div>
</template>
<style scoped>
.link{
    text-decoration: none;
}
.Selecao {
    display: flex;
    flex-direction: column;
    margin: 20px;
    justify-self: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 6vh;
    color: #DDB1FF ;
    padding: 80px;
    
}
.Ingresso {
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    margin: 10px;
    background-color: #474545;
    width: 90%;
    height:15vh ;
    padding: 10px;
    border-radius: 15px;
    
}
.AddExc {
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    width: 100%;
    height:100% ;
    font-size: 2rem;
    gap: 2vw;
}
.info {
    display: flex;
    flex-direction:column;
    justify-content: left;
    margin: 10px;
    width: 50%;
    height:100% ;
    gap: 1vh;

    font-family: 'Lexend Mega';
}.info p{
    font-size: 16px;
}

.Botao{
display: flex;
justify-content: center;
align-items: center;
width: 3.5vw;
height: 4.8vh;   
background-color: #262424 ; 
color: #DDB1FF ;
font-size: 30px;
border: solid 0.5px #DDB1FF;
border-radius: 100px;
cursor: pointer;
padding: 1vw;
}
button:active{
    background-color: #DDB1FF ;
    color: #262424 ;
}
.final{
    width: 100%;
    height: 10vh;
    border-radius: 45px;
    padding: 1vh;
    font-family: 'Lexend Mega';
    font-size: 1rem;
    background-color: #474545;
    color: #DDB1FF;
    padding: 5px;
    cursor: pointer;
    border: solid 1px #DDB1FF;
}
</style>