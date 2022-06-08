import { createStore } from 'vuex'
import { getMovies, getGenres } from '@/services/moviesApi'
const store = createStore({
    state: {
        movies: {},
        gneres: [],
        loader: true,
        paginate: {
            page: 1,
            totalPage: 0
        }
    },
    getters: {
        movieList(state) {
            if (state.movies.data.results != undefined) {
                const movieList = [];
                state.movies.data.results.forEach((movie) => {
                    let gneres = [];
                    movie.genre_ids.forEach((gnere) => {
                        state.gneres.data.genres.forEach((gne) => {
                            if (gne.id == gnere) {
                                gneres.push(gne.name);
                            }
                        });
                    });
                    movieList.push({
                        id: movie.id,
                        title: movie.original_title,
                        releaseData: movie.release_date,
                        picture: movie.poster_path,
                        gneres,
                    });
                });
                return movieList;
            }
        },
        paginate(state) {
            return state.paginate
        },
        loader(state) {
            return state.loader
        }
    },
    mutations: {
        setMovieList(state, movies) {
            state.movies = movies;
        },
        setGnereList(state, gneres) {
            state.gneres = gneres;
        },
        setPaginate(state, data) {
            state.paginate.page = data.page;
            state.paginate.totalPage = data.total_pages
        },
        setLoader(state, status) {
            state.loader = status
        }
    },
    actions: {
        async fetchMovieList(contex, payload) {
            contex.commit('setLoader', true);
            try {
                let response = await getMovies(payload);
                contex.commit('setMovieList', response);
                contex.commit('setPaginate', response.data)
                contex.commit('setLoader', false);
            } catch (err) {
                console.log(err)
            }
        },

        async fetchGnereList(contex) {
            try {
                let response = await getGenres()
                contex.commit('setGnereList', response)
            } catch (err) {
                console.log(err)
            }
        }
    }
})


export default store;