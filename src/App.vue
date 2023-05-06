<template>
  <HeaderContent />
  <serviceContentComponent/>
  <!-- <SearchBarContent />
  <div class="flex flex-wrap justify-content-between gap-4">
    <FilterContent />

    <result-content class="mr-6" />
  </div> -->

  <FooterContent />
</template>

<script>
import FooterContent from "@/components/footer-content.component.vue";
import FilterContent from "@/components/filter-content.component.vue";
import HeaderContent from "@/components/header-content.component.vue";
import SearchBarContent from "@/components/search-bar-content.vue";
import ResultContent from "@/components/result-content.vue";

import serviceContentComponent from "@/components/service-content.component.vue";
import { PetApiService } from "@/learning/services/pet-api.service";


export default {
  name: "App",
  components: {
    FooterContent,
    FilterContent,
    HeaderContent,
    SearchBarContent,
    ResultContent,
    serviceContentComponent
  },
  data() {
    return {
      articles: Array,
      errors: [],
      newsApi: new PetApiService(),
    };
  },
  created() {
    console.log("created");
    this.getUsers();
  },
  methods: {
    // Fetch Articles for selected Source
    getUsers() {
      this.newsApi
        .getUser()
        .then((response) => {
          this.articles = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>
