<script setup>
import MapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue';
</script>
<template>
    <div class="ApreFilme">
        <div class="Loc">
            <MapMarkerOutline :size="40" />
            <h2>Mew Movies</h2>
        </div>
        <img src="/public/wolverine.png" width="100%" height="300px" alt="">
        <div class="Texto">
            <div class="Classificacao">
            <img src="../../public/image.png" alt="">
            <p>Ação, Aventura, Comédia</p>
            </div>
            <div class="Titulo"><h2>Deadpool & Wolverine</h2></div>
        </div>
    </div>
    <main>
        <div class="Tudo">
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
            </div>
        </div>
    </main>
</template>
<style scoped>
.Loc{
    display: flex;
    gap: 0.5rem;
    align-items: center;
    z-index: 999;
    position: absolute;
    top: 0;
    color: #DDB1FF;
    font-family: 'Lexend Mega';
}
.Classificacao{
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: small;
}
.Texto{
    z-index: 999;
    position: absolute;
    top: 225px;
    color: white;
    font-family: 'Lexend Mega';
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
}
.Texto img {
    width: 30px;
    margin: 0 auto;
}
.ApreFilme {
    background-color: #262424;
}
.Tudo {
    background-color: #262424;
    color: #DDB1FF;
    font-family: 'Lexend Mega';
    height: 100vh;
}
.Tudo h2 {
    padding: 3vh;
    font-size: 1.5rem;
    font-family: 'Lexend Mega';
    color: #DDB1FF;
    filter: drop-shadow(0px 0px 10px #DDB1FF);
}

.CartazFilm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

}

.CartazFilm img {
    width: 25vw;
    margin: 0 auto;
}

.ListagemFilm {
    display: flex;
    flex-direction: row;
    color: #DDB1FF;
    font-family: 'Lexend Mega';
    justify-content: left;
    gap: 2rem;
    margin: 0 0 0 5%;
    background-color: #262424;
}
</style>