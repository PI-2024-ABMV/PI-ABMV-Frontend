<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { useMoviesStore } from '@/stores/movie'
import convertTime from '../../../helpers/formatTime'

const route = useRoute()
const movieStore = useMoviesStore()

async function getMovie() {
  await movieStore.getMovie(route.params.id)
}

onMounted(async () => {
  await getMovie()
})

onUnmounted(() => {
  movieStore.movie = null
})
</script>

<template>
  <div class="container">
    <div class="filme">
      <div class="cartaz">
        <img :src="`https://image.tmdb.org/t/p/w500/${movieStore.movie?.poster_path}`" alt="" />
      </div>
      <div class="informacoes">
        <div class="deyverson">
          <h1>{{ movieStore.movie?.title }}</h1>
          <div class="generos">
            <span v-for="genre in movieStore.movie?.genres" :key="genre.id" class="genero">{{
              genre.name
            }}</span>
          </div>
          <div class="infos">
            <span>{{ convertTime(movieStore.movie?.runtime) }} | </span>
            <span> {{ movieStore.movie?.vote_average.toFixed(1) }}/10 | </span>
            <img src="../../public/class14.png" alt="" />
          </div>
          <p class="sinopse">{{ movieStore.movie?.overview }}</p>
        </div>
        <div class="botoes">
          <button class="botao">Trailer</button>
         <router-link to="/selecaoassento" class="link"> <button class="botao">Comprar Ingressos</button></router-link>
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
  background-color: #3e3c3c;
  font-size: 12px;
  color: #ddb1ff;
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
  box-shadow: #ddb1ff 0px 0px 7px;
  border-radius: 20px;
  color: #ddb1ff;
  font-weight: bol;
  cursor: pointer;
}
.link{
  text-decoration: none;
  
}
</style>
