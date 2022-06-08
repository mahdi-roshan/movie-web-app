<template>
  <div class="container max-w-[1256px] mx-auto p-2">
    <SearchSection />
    <ListSection />
    <PaginateSection />
  </div>
</template>

<script>
import SearchSection from "@/components/movies/SearchSection.vue";
import PaginateSection from "@/components/movies/PaginateSection.vue";
import ListSection from "@/components/movies/ListSection.vue";

import {onBeforeMount} from 'vue'
export default {
  components: {
    SearchSection,
    ListSection,
    PaginateSection,
  },
  setup() {
    onBeforeMount(()=>{
      
    })
  },
};
</script>

<style>
</style>