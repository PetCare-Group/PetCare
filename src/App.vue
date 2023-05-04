<template>
  <HeaderContent />

  <SearchBarContent />
  <div class="flex flex-wrap justify-content-between gap-4">
    <FilterContent />

    <ResultContent class="mr-6" />
  </div>

  <FooterContent />
</template>

<script>
import FooterContent from "@/components/footer-content.component.vue";
import FilterContent from "@/components/filter-content.component.vue";
import HeaderContent from "@/components/header-content.component.vue";
import SearchBarContent from "@/components/search-bar-content.vue";
import ResultContent from "@/components/result-content.vue";
import { TutorialsApiService } from "@/learning/services/tutorials-api.service";
export default {
  name: "App",
  components: {
    FooterContent,
    FilterContent,
    HeaderContent,
    SearchBarContent,
    ResultContent,
  },
  data() {
    return {
      articles: Array,
      errors: [],
      newsApi: new TutorialsApiService(),
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
