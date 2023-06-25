<template>
    
  <pv-toolbar class="surface-0">
    <template #start>
      <img
        src="./img/Hero_img.png"
        alt="logo de pagina"
        height="40"
        class="mr-2"
      />
      <img alt="logo" src="./img/Logo.png" height="40" class="mr-2" />
    </template>
    <template #center>
      <router-link v-for="i in buttons" :to="i.to">
        <pv-button class="surface-0 text-orange-500 mr-3 ml-3">
          {{ i.label }}</pv-button
        >
      </router-link>
    </template>

    <template #end>
      <div class="flex justify-end items-center">
        <pv-menubar :model="item">
          <router-link
            v-for="i in item.items"
            :to="i.to"
            custom
            v-slot="{ navigate, href }"
            :key="i.label"
          >
            <pv-button
              class="p-button-text text-white"
              :href="href"
              @click="navigate"
              >{{ i.label }}</pv-button
            >
          </router-link>
        </pv-menubar>
      </div>
    </template>
  </pv-toolbar>

  <RouterView />
</template>

<script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";

const addres_value = ref(null);
const date_value = ref(null);

const selectedCity = ref();
const cities = ref([
  { name: "A-Z", code: "NY" },
  { name: "Mejor calificados", code: "RM" },
  { name: "Mejor tarifa", code: "LDN" },
]);
const services = ref([
  { name: "Adiestrador", code: "NY" },
  { name: "Paseador", code: "RM" },
  { name: "Veterinario", code: "LDN" },
]);

const item = ref([
  {
    label: "Pamela",
    icon: "pi pi-fw pi-power-off",
    items: [
      {
        label: "Ver perfil",
        icon: "pi pi-fw pi-align-left",
        to: "/my-account",
      },
      {
        label: "Mis mascotas",
        icon: "pi pi-fw pi-align-right",
        to: "/petlist",
      },
      {
        label: "Mis servicios",
        icon: "pi pi-fw pi-align-right",
        to: "/mis-servicios"
      },
      {
        label: "Mis favoritos",
        icon: "pi pi-fw pi-align-right",
        to: "/misfavoritos",
      },
      {
        label: "Salir",
        icon: "pi pi-fw pi-align-right",
        to: "/log",
      },
    ],
  },
]);

const buttons = ref([
  {
    label: "Inicio",
    icon: "pi pi-fw pi-file",
    to: "/",
  },
  {
    label: "Buscar un servicio",
    icon: "pi pi-fw pi-pencil",
    to: "/",
    items: [
      {
        label: "Adiestrador",
        icon: "pi pi-fw pi-align-left",
      },
      {
        label: "Paseador",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Veterinario",
        icon: "pi pi-fw pi-align-center",
      },
    ],
  },
  {
    label: "Publicar un servicio",
    icon: "pi pi-fw pi-user",
    to: "/post-service",
  },
  {
    label: "Ayuda",
    to: "/help",
    icon: "pi pi-fw pi-calendar",
  },
]);
</script>

<script>
export default {
  name: "header-content.component",
};
</script>

<style scoped></style>
