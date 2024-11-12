<script setup>
import { onMounted } from 'vue';
import { useMoviesStore } from '@/stores/movie';
import MapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue';

const movieStore = useMoviesStore();

async function getUpcomingMovies() {
    await movieStore.getUpcomingMovies();
};

async function getPlayingMovies() {
    await movieStore.getPlayingMovies();
};

onMounted(async () => {
    await getUpcomingMovies();
    await getPlayingMovies();
});

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
        <div class="Conteiner">
            <h2>Em Cartaz</h2>
        <div class="ListagemFilm">
            <div v-for="movie in movieStore.movies" :key="movie.id">
                <div class="CartazFilm">
                    <RouterLink :to="{ name: 'filme', params: { id: movie.id } }" class="Link">
                        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
                        {{ movie.title }}
                    </RouterLink>
                </div>
            </div>
        </div>
        <h2>Em Breve</h2>
        <div class="ListagemFilm">
            <div v-for="movie in movieStore.upcomingMovies" :key="movie.id">
                <div class="CartazFilm">
                    <RouterLink :to="{ name: 'filme', params: { id: movie.id } }" class="Link">
                        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
                        {{ movie.title }}
                    </RouterLink>
                </div>
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
    border-radius: 5px;
}

.Conteiner {
    background-color: #262424;
    color: #DDB1FF;
    font-family: 'Lexend Mega';
    height: 100vh;
}

.Conteiner h2 {
    padding: 3vh;
    font-size: 1.5rem;
    font-family: 'Lexend Mega';
    color: #DDB1FF;
    filter: drop-shadow(0px 0px 10px #DDB1FF);
}

.CartazFilm img {
    width: 25vw;
}

.Link {
    color: #DDB1FF;
    text-decoration: none;
}

.ListagemFilm {
    display: flex;
    flex-direction: row;
    color: #DDB1FF;
    font-family: 'Lexend Mega';
    justify-content: left;
    gap: 2rem;
    margin: 0 0 0 5%;
    overflow-x: scroll;
}

.ListagemFilm::-webkit-scrollbar {
    height: 5px;
}

.ListagemFilm::-webkit-scrollbar-thumb {
    background-color: #DDB1FF;
}
</style>