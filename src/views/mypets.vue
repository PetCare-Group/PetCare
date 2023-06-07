<template>
  <HeaderContent />
  <div class="text-orange-500 text-5xl font-semibold">Mis Mascotas</div>
  <div class="flex flex-box justify-content-center mt-7 mb-7">
    <div v-for="user in articles" class="flex flex-wrap justify-content-center">
      <div
          class="flex flex-wrap w-10rem flex-column justify-content-between row-gap-6"
      >
        <pv-button
            class="border-0 w-auto h-auto surface-0 block"
            v-for="pet in user.pets"
        >
          <img
              :alt="foto_perfil"
              :src="pet.image"
              class="border-circle border-0 w-5rem h-5rem"
          />
          <p class="p-button bg-orange-500 text-white-alpha-90">
            {{ pet.name }}
          </p>
        </pv-button>
      </div>
    </div>
    <pv-button
        icon="pi pi-plus"
        severity="warning"
        rounded
        aria-label="Notification"
        class="w-3rem h-3rem flex"
    />
  </div>
  <FooterContent />
</template>

<script>
import { PetApiService } from "../learning/services/pet-api.service";
import HeaderContent from "@/components/header-content.component.vue";
import FooterContent from "@/components/footer-content.component.vue";
export default {
  name: "mypets",
  components: {FooterContent, HeaderContent},

  data() {
    return {
      articles: Array,
      errors: [],
      newsApi: new PetApiService(),
    };
  },
  created() {
    // console.log("created");
    this.getUsers();
  },
  methods: {
    // Fetch Articles for selected Source
    getUsers() {
      this.newsApi
          .getUser()
          .then((response) => {
            this.articles = response.data;
            // console.log(response.data);
          })
          .catch((e) => {
            this.errors.push(e);
          });
    },
  },
};
</script>

<style scoped></style>
