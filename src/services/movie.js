import axios from 'axios';

async function getReleasedMovies() {
  const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=pt-BR', { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWYyYjU2OGRjY2ZjMGFhNWVhZGM2ZDk0MzQzNDUzZCIsIm5iZiI6MTcyOTE4NDUzMC40MzgyNTYsInN1YiI6IjY1NGE0MzVmZmQ0ZjgwMDEzY2VhNzdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.laHqA6w4nII6an5-Zf4n97PuYgsUlF3Th9CLrH9u-co` } });
  console.log(data);
  
  return data;
}

export { getReleasedMovies };