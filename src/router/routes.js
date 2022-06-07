
import { createRouter, createWebHashHistory } from 'vue-router'

// components
import Movies from '@/views/movies/MovieList.vue'

const routes = [
    { name: 'movies', path: "/", component: Movies }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;