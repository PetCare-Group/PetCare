<template>
    <HeaderContent />

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
  <FooterContent />

</template>

<script>
import HeaderContent from "@/components/header-content.component.vue";
import FooterContent from "@/components/footer-content.component.vue";

export default {
  name: "FavouritesView",
  components: {FooterContent, HeaderContent},
  data() {
    return {
      ultimosServicios: [
        { id: 1, nombre: "Juan Carlos", tipoServicio: "Entrenador", ubicacion: "San Miguel", precio: 20 },
        
        { id: 2, nombre: "Hiro Cardenas", tipoServicio: "Paseador", ubicacion: "Santiago de Surco", precio: 35 },
      ],
    };
  },
};
</script>
