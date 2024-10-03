<script setup>

</script>

<template>

<div class="ApreFilme">
    <img id="CartazApre" height="400px" src="../../public/aprefilme.png" alt="">
    <div class="ContainerTexto">
    <h1>Duna - Parte 2</h1>
    <p>Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família. Enfrentando uma escolha entre o amor de sua vida e o destino do universo, ele deve evitar um futuro terrível que só ele pode prever.</p>
    <div class="Botoes">
    <button>Trailer</button>
    <button>Ingressos</button>
</div>
</div>

</div>
<main>
<h2>Em Cartaz</h2>
<div class="ListagemFilm">
    <div class="CartazFilm">
    <img src="/public/open.png" alt="">
    <p>Duna</p>
    </div>
    <div class="CartazFilm">
    <img src="/public/open.png" alt="">
    <p>Duna</p>
    </div>
    <div class="CartazFilm">
    <img src="/public/open.png" alt="">
    <p>Duna</p>
    </div>
    <div class="CartazFilm">
    <img src="/public/open.png" alt="">
    <p>Duna</p>
    </div>
    <div class="CartazFilm">
    <img src="/public/open.png" alt="">
    <p>Duna</p>
    </div>
</div>
<h2>Em Breve</h2>
<div class="ListagemFilm">
    <div class="CartazFilm">
    <img src="/public/open.png" alt="">
    <p>Duna</p>
    </div>
    <div class="CartazFilm">
    <img src="/public/open.png" alt="">
    <p>Duna</p>
    </div>
    <div class="CartazFilm">
    <img src="/public/open.png" alt="">
    <p>Duna</p>
    </div>
    <div class="CartazFilm">
    <img src="/public/open.png" alt="">
    <p>Duna</p>
    </div>
    <div class="CartazFilm">
    <img src="/public/open.png" alt="">
    <p>Duna</p>
    </div>
</div>
</main>
</template>
<style scoped>
main{
    background-color: #262424;
    color: #DDB1FF;
    font-family: 'Lexend Mega';
    height: 100vh;
}
h2{
    padding: 5vh;
    font-size: 2rem;
    font-family: 'Lexend Mega';
    color: #DDB1FF;
    filter: drop-shadow(0px 0px 10px #DDB1FF);
}
.CartazFilm{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

}
.CartazFilm img {
    width: 10vw;
    margin: 0 auto;
}
.ListagemFilm{
display: flex;
flex-direction: row;
color: #DDB1FF;
font-family: 'Lexend Mega';
justify-content: left;
gap: 5rem;
margin: 0 0 0 5%;
}
.ApreFilme img {
    width: 80%;  
    z-index: -10;
    position: absolute;
    
    }
.ApreFilme{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: 400px;
    z-index: 10;
    background: #262424;
    background: radial-gradient(circle, rgba(38,36,36,0) 0%, rgba(180,159,131,0) 0%, rgba(38,36,36,1) 75%);
}
.ContainerTexto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 50%;
    color: #DDB1FF;
    font-family:'Lexend Mega';
    margin-top: 15vh;
    z-index: 20;
    margin-left: -40vw;    
}
.ContainerTexto p {
    margin-left: 1vw;
}
.Botoes {
    display: flex;
    margin-top: 3vh;
}
.Botoes button {
    background-color: #262424;
    color: #DDB1FF;
    border: none;
    padding: 8px 13px;
    margin: 0 10px;
    font-family: 'Lexend Mega';
    font-size: 1rem;
    cursor: pointer;
    box-shadow: #DDB1FF 0px 0px 10px 3px ;
    align-self: initial;
    border-radius: 20px;
}

 
</style>
