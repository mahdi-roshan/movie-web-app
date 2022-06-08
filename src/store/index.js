import { createStore } from 'vuex'
import { getMovies } from '@/services/moviesApi'
const store = createStore({
    state: {
        movies: {}
    },
    mutations: {
        setMovieList(state, movies) {
            state.movies = movies
        }
    },
    actions: {
        async fetchMovieList(contex, payload) {
            try {
                let response = await getMovies(payload);
                console.log(response)
                contex.commit('setMovieList', response)
            } catch (err) {
                console.log(err)
            }
        }
    }
})


export default store;