<script setup>
    import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue';
    import TicketOutline from 'vue-material-design-icons/TicketOutline.vue';
    import MapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue';
    </script>
    
    <template>
        <div class="cabecalho">
            <header>
                <img src="../../../public/logoMew.png" height="70vh">
                <div class="icon">
                    <TicketOutline :size="45" class="hover"/>
                    <AccountCircleOutline :size="45" class="hover"/>
                </div>
            </header>
            <nav>
                <div class="acessos">
    
                    <p class="hover">EM BREVE </p>
                    <p class="hover">EM CARTAZ</p>
             
                 
    
                </div>
                
                <p class="hover"><MapMarkerOutline :size="20"/>Mew Theater</p>
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
        flex-direction: row;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        height: 5vh;
        background-color: #490175;
        font-family: 'Lexend Mega';
        font-size: 17px;
        
    }
    .icon{
        display: flex;
        gap: 1rem;
        align-items: center;
        width: 5%;
        margin-right: 3vh;
    }
    .acessos{
        display: flex;
        align-items: center;
        gap: 2rem;
        width: 50%;
        margin-left: 3vh;
        margin-right: 3vh;
       
        
    }
    .hover:hover{
        filter: drop-shadow(0 0 5px #DDB1FF);
        cursor: pointer;
    }
    
    </style>