<script setup>
</script>

<template>
    <div class="filme">
        <div class="cartaz">
            <img src="../../public/open.png" alt="">
        </div>
        <div class="informacoes">
            <div class="deyverson">
                <h1>Duna</h1>
                <div class="generos"> 
                <span class="genero">Ação</span>
                <span class="genero">Drama</span>
            </div>   
            <div class="infos">
                <span>2h21min | </span>
                <span> 8/10 | </span>
                <img src="../../public/class14.png" alt="">
            </div>
            <p class="sinopse">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dicta quam natus maiores vitae sint, asperiores est temporibus odio aperiam reprehenderit eius debitis alias, quaerat, cumque ex velit error quia.</p>
        </div>
            <div class="botoes">
                <button class="botao">
                    Trailer
                </button>
                <button class="botao">
                    Comprar Ingressos
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .filme {
        display: flex;
        padding: 20px;
        background-color: #262424;
    }
    .cartaz {
        width: 30%;
        display: flex;
        justify-content: center;
    }
    .cartaz img {
        width: 60%;
    }
    .generos {
        display: flex;
        gap: 10px;
        margin: 10px 0;
    }
    .genero{
        max-width: fit-content;
        padding: 7px 12px;
        border-radius: 20px;
        font-size: 18px;
        background-color: #3E3C3C;
        font-size: 12px;
        color: #DDB1FF;
        font-weight: bold;
    }
    .informacoes {                                    
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .informacoes h1 {
        font-size: 24px;
        color: white;
    }
    .informacoes p, span {
        font-size: 16px;
        color: white;
    }
    .informacoes img {
        width: 16px;
    }
    .sinopse {
        font-size: 18px;
        margin: 5px 0;
    }
    .botoes{
        z-index: 999;
        display: flex;
        gap: 20px;
    }
    .botao{
        padding: 5px 20px;
        background-color: #262424;
        box-shadow: #DDB1FF 0px 0px 7px;
        border-radius: 20px;
        color: #DDB1FF;
        font-weight: bold;  
    }
</style>