import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'


function getMovies(page) {
    return axios.get(`discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
}

function getGenres() {
    return axios.get('genre/movie/list?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US')
}

function getMovieDetails(id) {
    return axios.get(`movie/${id}?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US`)
}

function getMovieCredits(id) {
    return axios.get(`movie/${id}/credits?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US`)
}


export { getMovies, getGenres, getMovieDetails, getMovieCredits }