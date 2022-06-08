
import { createRouter, createWebHashHistory } from 'vue-router'

// components
import Movies from '@/views/movies/Movies.vue'

const routes = [
    { name: 'movies', path: "/", component: Movies }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;