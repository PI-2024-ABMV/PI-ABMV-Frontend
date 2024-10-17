import { getMovies } from "@/services/movie";

import { defineStore } from 'pinia'
import { reactive } from "vue";

export const useMoviesStore = defineStore('movies', () => {

 const state = reactive({
    movies: []
 });

    async function fetchMovies() {
        const { results } = await getMovies();
        state.movies = results;
    }
  
  return { 
    state,
    fetchMovies
   }
});