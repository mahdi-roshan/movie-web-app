<template>
  <div
    class="
      bg-gray-200
      h-24
      flex
      items-center
      justify-between
      rounded-lg
      mt-10
      px-6
    "
  >
    <div class="flex items-center">
      <span class="font-medium text-lg">Search by release date : </span>
      <input type="text" class="outline-none ml-4 h-8 w-56 p-1" />
    </div>
    <div>
      <button class="bg-blue-400 text-white px-3 py-2 text-lg rounded-full">
        Search
      </button>
      {{ count }}
    </div>
  </div>
</template>

<script>
// import { computed } from "@vue/runtime-core";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "search-section",
};
</script>

<style>
</style>