<script setup>
import ClockTimeNineOutline from 'vue-material-design-icons/ClockTimeNineOutline.vue';
import MapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue';
import TicketConfirmationOutline from 'vue-material-design-icons/TicketConfirmationOutline.vue';
import CalendarMonth from 'vue-material-design-icons/CalendarMonth.vue';
</script>
<template>
<div class="Container">
    <div class="Ingresso">
        <img src="../../../../public/wolverine.png" alt="">
        <p>Nome</p>
        <p class="Data"><CalendarMonth size="20"/> Data</p>
        <div class="Infos">
            <p><MapMarkerOutline size="20"/> Sala</p>
            <p><ClockTimeNineOutline size="20"/> Horário</p>
            <p><TicketConfirmationOutline size="20"/> Quantidade</p>
        </div>
    </div>
    <div class="Ingresso">
        <img src="../../../../public/wolverine.png" alt="">
        <p>Nome</p>
        <p class="Data"><CalendarMonth size="20"/> Data</p>
        <div class="Infos">
            <p><MapMarkerOutline size="20"/> Sala</p>
            <p><ClockTimeNineOutline size="20"/> Horário</p>
            <p><TicketConfirmationOutline size="20"/> Quantidade</p>
        </div>
    </div>
    <div class="Ingresso">
        <img src="../../../../public/wolverine.png" alt="">
        <p>Nome</p>
        <p class="Data"><CalendarMonth size="20"/> Data</p>
        <div class="Infos">
            <p><MapMarkerOutline size="20"/> Sala</p>
            <p><ClockTimeNineOutline size="20"/> Horário</p>
            <p><TicketConfirmationOutline size="20"/> Quantidade</p>
        </div>
    </div>
</div>
</template>
<style scoped>
.Container{
    display: flex;
    gap: 3rem;
    justify-content: center;
    margin-top: 10vh;
}
.Ingresso{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3E3C3C;
    border-radius: 20px;
    height: 50vh;
    width: 15vw;
    gap: 0.5rem;
    color: white;
}
.Data{
    color: #DDB1FF;
}
.Ingresso img{
    width: 100%;
    height: 75%;
    border-radius: 20px;
    }
.Infos{
    display: flex;
    gap: 0.5rem;
    font-size: small;
}
p{
    display: flex;
    align-items: center;
    gap: 0.2rem;
}
</style>