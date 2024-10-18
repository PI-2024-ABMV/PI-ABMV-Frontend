import axios from 'axios';
export default class MovieService {
  async getUpcomingMovies() {
    const { data } = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWYyYjU2OGRjY2ZjMGFhNWVhZGM2ZDk0MzQzNDUzZCIsIm5iZiI6MTcyOTE4NDUzMC40MzgyNTYsInN1YiI6IjY1NGE0MzVmZmQ0ZjgwMDEzY2VhNzdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.laHqA6w4nII6an5-Zf4n97PuYgsUlF3Th9CLrH9u-co`
      }
    });
    console.log(data);
    return data.results;
  };
  async getPlayingMovies() {
    const { data } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1', {
      headers: {
        Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWYyYjU2OGRjY2ZjMGFhNWVhZGM2ZDk0MzQzNDUzZCIsIm5iZiI6MTcyOTI2NzY4OS4yOTU5MTcsInN1YiI6IjY1NGE0MzVmZmQ0ZjgwMDEzY2VhNzdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H-hdcSW-Iu7iWCOvHWSx3IIk3ob1zeMZd7KhRdcvTSY'
      }
    });
    console.log(data);
    return data.results;
  };
  async getMovies(id) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR&page=1`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWYyYjU2OGRjY2ZjMGFhNWVhZGM2ZDk0MzQzNDUzZCIsIm5iZiI6MTcyOTE4NDUzMC40MzgyNTYsInN1YiI6IjY1NGE0MzVmZmQ0ZjgwMDEzY2VhNzdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.laHqA6w4nII6an5-Zf4n97PuYgsUlF3Th9CLrH9u-co`
      }
    });
    console.log(data);
    return data.results;
  };
}