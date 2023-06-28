<script setup>
import HeaderContent from "@/components/header-content.component.vue";
import FooterContent from "@/components/footer-content.component.vue";
import { ref } from 'vue';

import PaymentForm from "@/components/payment-form-component.vue"; 
let showPaymentForm = ref(false); // Declarar una variable reactiva para controlar la visibilidad del formulario de pago
</script>

<template>
 

  <div class="confirmation-container">
    <img src="src/assets/logo.svg" alt="img1">
    <h1>Tu reserva se realizó con éxito</h1>
    <p>Podrás visualizar la información de tu reserva en Mis Servicios. </p>
    <pv-button
      severity="warning"
      :style="{
        'display': 'flex',
        'margin-top': '25px',
        'border-radius': '7px',
        'justify-content': 'center',
        'color': 'white',
      }"
      
    >Volver al inicio</pv-button>
  </div>

  <!-- Capa flotante del formulario de pago -->
  <div class="payment-form-overlay" v-if="showPaymentForm">
    <PaymentForm @close="showPaymentForm = false" /> <!-- Pasar un evento "close" para cerrar el formulario -->
  </div>

  <!-- <FooterContent /> -->
</template>

<style scoped>
.confirmation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-weight: bold;
  font-size: 30px;
  color: #FBB847;
  margin-top: 20px;
}

p {
  font-size: 18px;
  margin-top: 10px;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 100px;
}

.payment-form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
