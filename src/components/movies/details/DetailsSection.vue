<template>
  <div class="grid grid-cols-3 gap-16 mt-32">
    <div class="col-span-1">
      <img
        class="w-full rounded-lg"
        :src="'https://image.tmdb.org/t/p/original/' + details.poster_path"
        alt=""
      />
    </div>
    <div class="col-span-2">
      <ul class="space-y-6">
        <li class="flex justify-between items-center">
          <span class="font-bold">Budget</span
          ><span class="font-semibold"
            >${{ details.budget.toLocaleString() }}</span
          >
        </li>
        <li class="flex justify-between items-center">
          <span class="font-bold">Revenue</span
          ><span class="font-semibold"
            >${{ details.revenue.toLocaleString() }}</span
          >
        </li>
        <li class="flex justify-between items-center">
          <span class="font-bold">Release Date</span
          ><span class="font-semibold">{{ details.release_date }}</span>
        </li>
        <li class="flex justify-between items-center">
          <span class="font-bold">Runtime</span
          ><span class="font-semibold">{{ (parseInt(details.runtime / 60)) + ' h ' + (details.runtime % 60) + ' m'}}</span>
        </li>
        <li class="flex justify-between items-center">
          <span class="font-bold">Score</span>
          <div>
            <span class="font-semibold">{{ details.vote_average }}</span>
            <small class="ml-2 font-normal"
              >({{ details.vote_count }} votes)</small
            >
          </div>
        </li>
        <li class="flex justify-between items-center">
          <span class="font-bold">Gneres</span>
          <div>
            <span
              v-for="gnere in details.genres"
              :key="gnere.id"
              class="font-normal"
              >{{ gnere.name + " " }}</span
            >
          </div>
        </li>
        <li class="flex justify-between items-center">
          <span class="font-bold">IMDB Link</span
          ><a
            :href="details.homepage"
            class="font-semibold text-lg underline text-blue-600"
            >link</a
          >
        </li>
        <li class="flex justify-between items-center">
          <span class="font-bold">Homepage Link</span
          ><a
            :href="details.homepage"
            class="font-semibold text-lg underline text-blue-600"
            >link</a
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="mt-11">
    <p class="font-semibold w-full">{{ details.overview }}</p>
  </div>
  <div class="mt-24">
    <h5 class="text-xl font-bold">Credits :</h5>
    <div class="mb-36">
      <span
        class="font-semibold py-16"
        v-for="credit in credits"
        :key="credit.id"
        >{{ credit.name + " , " }}</span
      >
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  props: ["details", "credits"],
  setup(props) {
    let credits = reactive([]);
    credits = props.credits.slice(0, 11);
    console.log(credits);
    return {
      credits,
    };
  },
};
</script>

<style>
</style>