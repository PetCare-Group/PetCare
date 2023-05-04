<template>
  <footer class="w-full">
    <div
      class="flex-wrap flex align-items-center justify-content-around border-bottom-1 pb-3"
    >
      <div class="inline-flex w-min">
        <img class="logoApp" src="./img/Hero_img.png" alt="logo de pagina" />
        <img class="logoApp" src="./img/Logo.png" alt=" logo petcare" />
      </div>

      <ul>
        <h1>Aplicacion Web</h1>
        <div
          class="relative sm: w-9rem h-5rem ml-0 mr-3 mb-3 my-3 md:my-0 border-round list-none"
        >
          <li><pv-button label="Caracteristicas" link /></li>
          <li><pv-button label="Enlace" link /></li>
          <li><pv-button label="Instrucciones" link /></li>
        </div>
      </ul>

      <ul>
        <h1>Soporte</h1>
        <div
          class="relative w-9rem h-5rem ml-0 mr-3 my-3 md:my-0 border-round list-none"
        >
          <li><pv-button label="FAQ" link /></li>
          <li><pv-button label="Consulta" link /></li>
          <li><pv-button label="Solucionar problemas" link /></li>
        </div>
      </ul>
      <ul>
        <h1>Sobre nosotros</h1>
        <div
          class="relative w-9rem h-5rem ml-0 mr-3 my-3 md:my-0 border-round list-none"
        >
          <li><pv-button label="Quienes somos" link /></li>
          <li><pv-button label="Historia" link /></li>
          <li><pv-button label="Objetivos" link /></li>
        </div>
      </ul>
    </div>

    <div class="flex-wrap flex align-items-center justify-content-between m-3">
      <p>© PetCare, 2023. ¡Amamos a nuestro usuarios!</p>
      <div class="social-media">
        <p class="follow">Siganos</p>
        <i class="pi pi-facebook"></i>
        <i class="pi pi-instagram"></i>
      </div>
    </div>
  </footer>
</template>

<script>
import IconCommunity from "@/components/icons/IconCommunity.vue";

export default {
  name: "footer-content.component.vue",
  components: { IconCommunity },
};
</script>

<style scoped>
footer {
  color: #fbb847;
}
.logoApp {
  width: 10vw;
}

h1 {
  color: #fbb847;
  font-family: "Inter Semi Bold", sans-serif;
  font-size: 18px;
  top: 0%;
  left: 0%;
  position: relative;
  display: block;
  text-align: left;
}

li {
  text-align: left;
}

:deep(.p-button .p-button-label) {
  color: #fbb847;
  font-family: "Inter", sans-serif;
  margin: 0px 0px -2px 0px;
  text-align: left;
  font-weight: lighter;
  font-size: 11px;
  line-height: 7px;
  /* or 100% */
  align-content: end;
  position: relative;
  letter-spacing: -0.015em;
}

.footer-bottom-content {
  background-color: white;
  display: block;
  float: left;
  width: 100%;
  text-align: left;
}
.footer-separador {
  size: 2px;
  color: #fbb847;
}

p {
  display: inline;
}

.social-media {
  right: 15%;
  left: -5%;
  float: right;
  text-align: right;
  display: inline;
  margin: 10px 20px;
}
.follow {
  display: inline;
  right: 0%;
  text-align: right;
  margin: 0% 8px;
  font-size: 12px;
}

.pi-facebook {
  margin: 5px 10px;
}

.pi-instagram {
  margin: 5px 10px;
}
</style>
