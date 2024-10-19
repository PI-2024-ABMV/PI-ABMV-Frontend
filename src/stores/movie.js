import { ref } from 'vue';
import { defineStore } from 'pinia'

import MovieService from '@/services/movie';

const movieService = new MovieService();

export const useMoviesStore = defineStore('movies', () => {
   const movies = ref([]);
   const upcomingMovies = ref([]);
   const movie = ref();

   async function getUpcomingMovies() {
      upcomingMovies.value = await movieService.getUpcomingMovies();
   };
   async function getPlayingMovies() {
      movies.value = await movieService.getPlayingMovies();
   };
   async function getMovie(id) {
      movie.value = await movieService.getMovie(id);
   }
   return { movies, upcomingMovies, movie, getUpcomingMovies, getPlayingMovies, getMovie };
});