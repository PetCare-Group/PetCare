<template>
      <HeaderContent :valor_label="this.user.firstName" :valor_id="this.id" :valor_token="this.token" />


  <div class="card">
    <h2>servicios favoritos</h2>
    <pv-data-table :value="ultimosServicios" :paginator="true" :rows="5">
      <pv-column field="id" header="ID"></pv-column>
      <pv-column field="nombre" header="Nombre"></pv-column>
      <pv-column field="tipoServicio" header="Tipo de Servicio"></pv-column>
      <pv-column field="ubicacion" header="Ubicación"></pv-column>
      <pv-column field="precio" header="Precio"></pv-column>
    </pv-data-table>
  </div>
  <!-- <FooterContent /> -->

</template>

<script>
import HeaderContent from "@/components/header-content.component.vue";
import FooterContent from "@/components/footer-content.component.vue";
import { PetApiService } from "../learning/services/pet-api.service";

export default {
  name: "FavouritesView",
  components: {FooterContent, HeaderContent},
  data() {
    return {
      id: sessionStorage.getItem("userId"),
      token: sessionStorage.getItem("token"),
      petService: null,
      user: null,

      ultimosServicios: [
        { id: 1, nombre: "Juan Carlos", tipoServicio: "Entrenador", ubicacion: "San Miguel", precio: 20 },
        
        { id: 2, nombre: "Hiro Cardenas", tipoServicio: "Paseador", ubicacion: "Santiago de Surco", precio: 35 },
      ],
    };
  },
  created() {

this.petService = new PetApiService();
this.petService.getUserById(this.id,this.token).then((response) => {
        console.log(this.token);
        console.log(response);
        this.user = response;
        console.log(this.user);
    });
}

};
</script>
