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
      <Datepicker
        class="ml-4 w-[300px] p-1"
        v-model="date"
        multiCalendars
        range
        multiCalendarsSolo
        :enableTimePicker="false"
      ></Datepicker>
    </div>
    <div>
      <button
        @click="searchMovie"
        class="bg-blue-400 text-white px-3 py-2 text-lg rounded-full"
      >
        Search
      </button>
      {{ count }}
    </div>
  </div>
</template>

<script>
// date picker plugin
import Datepicker from "@vuepic/vue-datepicker";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  name: "search-section",
  components: { Datepicker },

  setup() {
    const store = useStore();
    const date = ref();

    // convert day and month to 2 digit for search
    function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    }

    function searchMovie() {
      const startDay = padTo2Digits(date.value[0].getDate()),
        startMonth = padTo2Digits(date.value[0].getMonth() + 1),
        startYear = date.value[0].getFullYear();
      const startDate = `${startYear}-${startMonth}-${startDay}`;

      // check for release end date 
      // if user dont enter release end date we only search base on release start date
      if (date.value[1] != null) {
        const endDay = padTo2Digits(date.value[1].getDate()),
          endMonth = padTo2Digits(date.value[1].getMonth() + 1),
          endYear = date.value[1].getFullYear();
        const endDate = `${endYear}-${endMonth}-${endDay}`;
        store.dispatch("fetchSearch", { startDate, endDate });
      } else {
        store.dispatch("fetchSearch", { startDate });
      }
    }

    return {
      date,
      searchMovie,
    };
  },
};
</script>

<style>
</style>