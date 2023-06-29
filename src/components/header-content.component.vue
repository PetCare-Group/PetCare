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
        >{{ i.label }}</pv-button>
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

const buttons = ref([
  {
    label: "Inicio",
    icon: "pi pi-fw pi-file",
    to: "/home",
  },
  {
    label: "Buscar un servicio",
    icon: "pi pi-fw pi-pencil",
    to: "/home",
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
import {PetApiService} from "../learning/services/pet-api.service";
import axios from "axios";
import {ref} from "vue";

export default {
    name: "header-content.component",
    props: {
        valor_label: String,
        valor_id: Number,
        valor_token: String,
    },

    methods: {
      logout (){
        console.log("RMV")
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("token");

        this.$router.push('/log');

      }
    },

    data() {
        return {
            user: null,
            petService: null,
            valor_name: "hola",
            item: [
                {
                    label: String,
                    icon: "pi pi-fw pi-power-off",
                    items: [
                        {
                            label: "Ver perfil",
                            icon: "pi pi-fw pi-align-left",
                            to: String,
                        },
                        {
                            label: "Mis mascotas",
                            icon: "pi pi-fw pi-align-right",
                            to: String,
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
                            // to: "/log",
                            command: () => this.logout(),

                        },
                    ]

                }
            ],

            buttons: [
                {
                    label: "Inicio",
                    icon: "pi pi-fw pi-file",
                    to: "/home",
                },
                {
                    label: "Buscar un servicio",
                    icon: "pi pi-fw pi-pencil",
                    to: "/home",
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
                    to: "/petlist",
                },
                {
                    label: "Ayuda",
                    to: "/help",
                    icon: "pi pi-fw pi-calendar",
                },
            ]
        };
    },

    mounted() {

        console.log(this.valor_label)
        this.item[0].label = this.valor_label;
        this.item[0].items[1].to = {name: 'list', params: {id: JSON.stringify(this.valor_id)}};
        this.item[0].items[0].to = {
            name: 'account',
            params: {id: JSON.stringify(this.valor_id), token: JSON.stringify(this.valor_token)}
        };
        this.buttons[0].to = {
            name: 'home',
            params: {id: JSON.stringify(this.valor_id), token: JSON.stringify(this.valor_token)}
        }
    }

}

</script>

<style scoped></style>
