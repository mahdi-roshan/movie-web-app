<template>
  <div class="mt-32">
    <div v-if="loader">hiiii</div>
    <div v-else class="grid md:grid-cols-3 gap-x-20 gap-y-11">
      <div
        v-for="movie in movies.data.results"
        :key="movie.id"
        class="bg-gray-200 rounded-md border-[1px] border-gray-400 flex h-64"
      >
        <div class="flex-shrink-0">
          <img
            class="w-40 h-full rounded-l-lg p-1"
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
            alt=""
          />
        </div>
        <div class="relative w-full py-4 px-2">
          <h4 class="font-semibold text-xl">
            {{ movie.original_title }}
          </h4>
          <div class=" absolute bottom-8">
            <div class="flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="font-normal text-gray-600 text-sm">{{
                movie.release_date
              }}</span>
            </div>
            <div class="text-gray-600 text-sm space-x-1 mt-3">
              <span>● Action </span>
              <span>● Drama</span>
              <span>● Sci-Fi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeMount, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "list-section",
  setup() {
    const store = useStore();
    const movies = computed(() => store.state.movies);
    const loader = ref(true);
    onBeforeMount(async () => {
      await store.dispatch("fetchMovieList", 1);
      console.log(movies);
      loader.value = false;
    });

    return {
      loader,
      movies,
    };
  },
};
</script>

<style>
</style>