
import { createRouter, createWebHashHistory } from 'vue-router'

// components
import Movies from '@/views/movies/Movies.vue'
import MoviePage from '@/views/movies/MoviePage.vue'
const routes = [
    { name: 'movies', path: "/", component: Movies },
    { name: 'moviePage', path: "/movie/:id", component: MoviePage }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;