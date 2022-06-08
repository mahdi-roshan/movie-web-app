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
      <router-link
        to="/"
        class="
          bg-blue-400
          text-white
          w-[100px]
          px-4
          py-1
          text-lg
          rounded-full
          flex
          items-center
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        Back
      </router-link>
      <div class="ml-24">
        <h5 class="font-bold text-xl">{{ title }}</h5>
        <span class="font-semibold text-lg">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "tag"],
};
</script>

<style>
</style>