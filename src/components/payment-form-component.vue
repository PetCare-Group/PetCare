<template>
    <div class="payment-form">
      <h2>Ingrese los detalles de pago</h2>
  
      <div class="form-group">
        <label for="cardNumber">Número de tarjeta</label>
        <input type="text" id="cardNumber" v-model="cardNumber" placeholder="Número de tarjeta" />
      </div>
  
      <div class="form-group">
        <label for="firstName">Nombre</label>
        <input type="text" id="firstName" v-model="firstName" placeholder="Nombre" />
      </div>
  
      <div class="form-group">
        <label for="lastName">Apellido</label>
        <input type="text" id="lastName" v-model="lastName" placeholder="Apellido" />
      </div>
  
      <div class="form-group">
        <label for="expirationDate">Fecha de expiración</label>
        <input type="text" id="expirationDate" v-model="expirationDate" placeholder="MM/AA" />
      </div>
  
      <div class="form-group">
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" v-model="cvv" placeholder="CVV" />
      </div>
  
      <div class="form-actions">
        <button @click="submitForm">Realizar pago</button>
        <button @click="closeForm">Cancelar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cardNumber: '',
        firstName: '',
        lastName: '',
        expirationDate: '',
        cvv: '',
      };
    },
    methods: {
      submitForm() {
        // Lógica para procesar el pago
        // Puedes enviar los datos a un servidor o realizar validaciones adicionales aquí
        console.log('Formulario de pago enviado');
      },
      closeForm() {
        this.$emit('close'); // Emitir evento para cerrar el formulario
      },
    },
  };
  </script>
  
  <style scoped>
  .payment-form {
    width: 300px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
  }
  
  .payment-form h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-actions {
    margin-top: 20px;
  }
  
  .form-actions button {
    margin-right: 10px;
    padding: 8px 16px;
    background-color: #FBB847;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  