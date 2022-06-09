<template>
  <div class="mt-32">
    <div class="grid md:grid-cols-3 gap-x-20 gap-y-11">
      <div
        v-for="movie in movieList"
        :key="movie.id"
        class="
          bg-gray-200
          rounded-md
          border-[1px] border-gray-400
          flex
          h-64
          overflow-x-auto
        "
      >
        <router-link
          class="flex-shrink-0 h-full"
          :to="{ name: 'moviePage', params: { id: movie.id } }"
        >
          <div class="h-full">
            <img
              class="w-40 h-full rounded-l-lg p-1"
              :src="'https://image.tmdb.org/t/p/original/' + movie.picture"
              alt=""
            />
          </div>
        </router-link>
        <router-link
          class="relative w-full py-4 px-2"
          :to="{ name: 'moviePage', params: { id: movie.id } }"
        >
          <div>
            <h4 class="font-semibold text-xl">
              {{ movie.title }}
            </h4>
            <div class="absolute bottom-8">
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
                  movie.releaseData
                }}</span>
              </div>
              <div class="text-gray-600 text-sm space-x-1 mt-3">
                <span v-for="(gnere, index) in movie.gneres" :key="index"
                  >● {{ gnere }}
                </span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-section",
  props: ["movieList"],
};
</script>

<style>
</style>