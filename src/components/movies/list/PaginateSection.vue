<template>
  <div class="mt-44 flex justify-center mb-10">
    <div>
      <div class="divide-x-2 divide-gray-400">
        <button
          @click="previousPage"
          class="py-3 px-4 text-lg font-bold text-gray-500"
        >
          Previous Page
        </button>
        <button
          @click="nextPage"
          class="py-3 px-4 text-lg font-bold text-blue-600"
        >
          Next Page
        </button>
      </div>
      <div class="flex justify-center mt-5 font-normal text-lg text-gray-500">
        <span
          >Showing results {{ paginate.page }}-{{ paginate.totalPage }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "paginate-section",
  setup() {
    const store = useStore();
    const paginate = computed(() => store.getters.paginate);

    function nextPage() {
      if (store.state.paginate.page < store.state.paginate.totalPage) {
        store.dispatch("fetchMovieList", store.state.paginate.page + 1);
      }
    }

    function previousPage() {
      if (store.state.paginate.page > 1) {
        store.dispatch("fetchMovieList", store.state.paginate.page - 1);
      }
    }

    return {
      paginate,
      nextPage,
      previousPage,
    };
  },
};
</script>

<style>
</style>