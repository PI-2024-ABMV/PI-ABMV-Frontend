<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

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
            <p>Duração: {{ convertTime(movieStore.movie?.runtime) }}</p>
            <p>Avaliação: {{ movieStore.movie?.vote_average.toFixed(1) }}/10 </p>
            <img src="../../public/class14.png" alt="" />
          </div>
        </div>
      </div>
      <div class="box">
        <p class="sinopse">{{ movieStore.movie?.overview }}</p>
        <div class="botoes">
          <button class="botao">Trailer</button>
          <button class="botao">Comprar Ingressos</button>
        </div>
      </div>
    </div>
</template>

<style scoped>

.filme {
  display: flex;
  padding: 20px;
  background-color: #262424;
  flex-wrap: wrap
}

.cartaz {
  width: 50%;
  display: flex;
  justify-content: center;
}

.cartaz img {
  width: 70%;
}

.generos {
  display: flex;
  gap: 10px;
  margin: 10px 0;
  flex-wrap: wrap;
}

.genero {
  padding: 15px 20px;
  font-size: 12px;
  border-radius: 20px;
  font-weight: bold;
  background-color: #3e3c3c;
  color: #ddb1ff;
}

.informacoes {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
}

.sinopse {
  font-size: 16px;
  margin: 8%;
}

.botoes {
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
}

.botao {
  padding: 10px 20px;
  background-color: #262424;
  box-shadow: #ddb1ff 0px 0px 7px;
  border-radius: 20px;
  color: #ddb1ff;
  font-weight: bold;
}
.botao:hover {
  background-color: #ddb1ff;
  color: #262424;
}
.filme h1 {
  color: #ddb1ff;
  font-size: 30px;
  margin: 0;
}
.filme p {
  color: white;
}
</style>
