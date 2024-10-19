<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useMoviesStore } from '@/stores/movie';
import convertTime from './helpers/formatTime';

const route = useRoute();
const movieStore = useMoviesStore();

async function getMovie() {
    await movieStore.getMovie(route.params.id);
    console.log(movieStore);
};

onMounted(async () => {
    await getMovie();
});
</script>

<template>
    <div class="container">
        <div class="filme">
            <div class="cartaz">
                <img :src="`https://image.tmdb.org/t/p/w500/${movieStore.movie?.poster_path}`" alt="">
            </div>
            <div class="informacoes">
                <div class="deyverson">
                    <h1>{{ movieStore.movie?.title }}</h1>
                    <div class="generos">
                        <span v-for="genre in movieStore.movie?.genres" :key="genre.id" class="genero">{{ genre.name }}</span>
                    </div>
                    <div class="infos">
                        <span>{{convertTime(movieStore.movie?.runtime)}} | </span>
                        <span> {{movieStore.movie?.vote_average}}/10 | </span>
                        <img src="../../public/class14.png" alt="">
                    </div>
                    <p class="sinopse">{{movieStore.movie?.overview}}</p>
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
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #262424;
}

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

.genero {
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

.informacoes p,
span {
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

.botoes {
    z-index: 999;
    display: flex;
    gap: 20px;
}

.botao {
    padding: 5px 20px;
    background-color: #262424;
    box-shadow: #DDB1FF 0px 0px 7px;
    border-radius: 20px;
    color: #DDB1FF;
    font-weight: bold;
}
</style>