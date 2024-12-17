<script setup>
    import Home from 'vue-material-design-icons/Home.vue';
    import NewBox from 'vue-material-design-icons/NewBox.vue';
    import TicketConfirmationOutline from 'vue-material-design-icons/TicketConfirmationOutline.vue';
    import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue';


</script>
<template>
    <nav>
        <div class="home">
            <RouterLink to="/" class="link">
                <Home :size="50" class="hover" />
            </RouterLink>
        </div>
        <div class="EmBreve">
            <router-link to="" class="link">
                <NewBox :size="50" class="hover"/>
            </router-link>
        </div>
        <div class="Ingresso">
            <router-link to="/meusingressos" class="link">
                <TicketConfirmationOutline :size="50" class="hover"/>
            </router-link>
        </div>
        <div class="Perfil">
            <router-link to="/user" class="link">
                <AccountCircleOutline :size="50" class="hover"/>
            </router-link>
        </div>
    </nav>
</template>
<style scoped>
nav{
    display: flex;
    gap: 1rem;
    background-color: black;
    position: fixed;
    bottom: 0;
    width: 100%;
    color: white ;
    justify-content: space-around;
    height: 8vh;
    align-items: center;
   
}
.hover:hover{
    color: #DDB1FF;
        filter: drop-shadow(0 0 5px #DDB1FF);
        cursor: pointer;
    }
.link{
    color: white;
}   
</style>