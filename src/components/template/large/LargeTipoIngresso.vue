<script setup>
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';
import TicketConfirmationOutline from 'vue-material-design-icons/TicketConfirmationOutline.vue';

import SelecionadorDeAssento from '@/components/SelecionadorDeAssento.vue';

const Contador = ref(0);



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

            <button class="Botao">+</button>
            {{ Contador }}
            <button class="Botao">-</button>

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
            
            <button class="Botao" @click="useCounterStore">+</button>
            {{ Contador }}
            <button class="Botao">-</button>
        
        </div>
    </div>  
    <div>
       
        <SelecionadorDeAssento/>
    </div>
    

    <button class="final"> Finalizar Compra!!</button>

</div>
</template>
<style scoped>

.Selecao {
    display: flex;
    flex-direction: column;
    margin: 20px;
    justify-self: center;
    align-items: center;
    width: 70%;
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
    width: 100%;
    height:15vh ;
    padding: 10px;
    border-radius: 15px;
    
}
.AddExc {
    display: flex;
    flex-direction: row;
    justify-content:right;
    align-items: center;
    
    width: 100%;
    height:100% ;
    font-size: 40px;
    gap: 1vw;
    padding: 10px;
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
width: 2.5vw;
height: 4.8vh;   
background-color: #262424 ; 
color: #DDB1FF ;
font-size: 30px;
border: solid 0.5px #DDB1FF;
border-radius: 100px;
cursor: pointer;
}
button:active{
    background-color: #DDB1FF ;
    color: #262424 ;
}
.final{
    width: 30%;
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