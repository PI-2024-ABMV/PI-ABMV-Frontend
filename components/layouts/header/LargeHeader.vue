<script setup>
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue';
import TicketOutline from 'vue-material-design-icons/TicketOutline.vue';
</script>

<template>
    <div class="cabecalho">
        <header>
            <img src="../../../public/logoMew.png">
            <div class="icon">
                <TicketOutline :size="50"/>
                <AccountCircleOutline :size="50"/>
            </div>
        </header>
        <nav>
            <p>EM BREVE</p>
            <p>EM CARTAZ</p>
     
        </nav>
       
    </div>
</template>

<style scoped>
.cabecalho{
color: #DDB1FF;
}
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #5F09A3;
    height: 10vh;
    padding: 5vh;
}
nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5vh;
    background-color: #490175;
    color: white;
}
.icon{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 5%;
    margin-right: 3vh;
}
</style>