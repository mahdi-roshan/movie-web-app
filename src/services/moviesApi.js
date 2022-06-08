import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/discover/movie'


function getMovies(page) {
    return axios.get(`?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
}


export { getMovies }