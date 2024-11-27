<script setup>
import ClockTimeNineOutline from 'vue-material-design-icons/ClockTimeNineOutline.vue';
import MapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue';
import TicketConfirmationOutline from 'vue-material-design-icons/TicketConfirmationOutline.vue';
import CalendarMonth from 'vue-material-design-icons/CalendarMonth.vue';
</script>
<template>
    <div class="Container">
        <h2>Meus Pedidos</h2>
        <div class="Ingresso">
            <img src="../../../../public/wolverine.png" alt="">
            <div class="Infos">
                <p class="Data"><CalendarMonth size="20"/>Data</p>
                <h3>Nome</h3>
                <p><MapMarkerOutline size="20"/>Local</p>
                <p><ClockTimeNineOutline size="20"/>Horário</p>
                <p><TicketConfirmationOutline size="20"/>Quantidade</p>
            </div>
        </div>
        <div class="Ingresso">
            <img src="../../../../public/wolverine.png" alt="">
            <div class="Infos">
                <p class="Data"><CalendarMonth size="20"/>Data</p>
                <h3>Nome</h3>
                <p><MapMarkerOutline size="20"/>Local</p>
                <p><ClockTimeNineOutline size="20"/>Horário</p>
                <p><TicketConfirmationOutline size="20"/>Quantidade</p>
            </div>
        </div>
        <div class="Ingresso">
            <img src="../../../../public/wolverine.png" alt="">
            <div class="Infos">
                <p class="Data"><CalendarMonth size="20"/>Data</p>
                <h3>Nome</h3>
                <p><MapMarkerOutline size="20"/>Local</p>
                <p><ClockTimeNineOutline size="20"/>Horário</p>
                <p><TicketConfirmationOutline size="20"/>Quantidade</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.Data{
    color: #DDB1FF;
}                                                                                                                                      p{
    display: flex;
    align-items: center;
    gap: 0.5rem;
}                                                                          
.Container{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    margin-top: 5vh;
    align-items: center;
    margin-bottom: 10vh;
}
h2{
    color:#DDB1FF;
}
.Ingresso{
    display: flex;
    width: 80%;
    height: 30vh;
    background-color: #3E3C3C;
    border-radius: 20px;
    gap: 0.5rem;
    color: white;
}
img{
    width: 40%;
    height: 100%;
    border-radius: 20px 0 0 20px;
}
.Infos{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    justify-content: center;
    margin-left: 3vw;
}
</style>