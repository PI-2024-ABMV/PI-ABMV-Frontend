import { ref } from 'vue';
import { defineStore } from 'pinia'

import MovieService from '@/services/movie';

const movieService = new MovieService();

export const useMoviesStore = defineStore('movies', () => {
   const movies = ref([]);

   async function getUpcomingMovies() {
      movies.value = await movieService.getUpcomingMovies();
   }

   return { movies, getUpcomingMovies };
});