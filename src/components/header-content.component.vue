<template>
  <div class="sticky z-1 surface-0">
    <pv-menubar :model="items">
      <template #start>
        <img
          src="./img/Hero_img.png"
          alt="logo de pagina"
          height="40"
          class="mr-2"
        />
        <img alt="logo" src="./img/Logo.png" height="40" class="mr-2" />
      </template>
      <template #end>
        <div class="flex justify-end items-center">
          <pv-menubar :model="item" />
        </div>
      </template>
    </pv-menubar>
  </div>
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
        label: "Editar perfil",
        icon: "pi pi-fw pi-align-left",
      },
      {
        label: "Mis mascotas",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Mis servicios",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Mis favoritos",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Salir",
        icon: "pi pi-fw pi-align-right",
      },
    ],
  },
]);

const items = ref([
  {
    label: "Inicio",
    icon: "pi pi-fw pi-file",
  },
  {
    label: "Buscar un servicio",
    icon: "pi pi-fw pi-pencil",
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
  },
  {
    label: "Ayuda",
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
