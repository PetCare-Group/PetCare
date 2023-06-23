<script setup>

import HeaderContent from "@/components/header-content.component.vue";
import FooterContent from "@/components/footer-content.component.vue";
</script>

<template>
  <HeaderContent />
  <div class="container">
    <div class="left-side-container">
      <h1>Publicar servicio</h1>
      <img src="src/assets/logo.svg" alt="img1">
      <pv-button
          severity="warning"

          :style="{
        'display': 'flex',
        'margin-top': '25px',
        'border-radius': '7px',
        'justify-content': 'center',
        'color': 'white',
        }">Crear servicio</pv-button>
    </div>
    <div class="right-side-container">
      <div class="name-container" style="display: flex; justify-content: space-between;">
        <div class="name-sub-container">
          <h2>Nombre</h2>
          <pv-input-text class="txt1"
                         v-model="value1"
                         type="text"
                         placeholder="Carmen"
                         :style="{
                'border-radius': '7px',
                'background-color': '#FFF389',
                'font-family': 'Inter',
                'font-size': '14px',
                'font-weight': 'bold',
                }"
          />
        </div>
        <div class="name-sub-container" style="margin-left: 10%;">
          <h2>Teléfono</h2>
          <pv-input-text class="txt1"
                         v-model="value1"
                         type="text"
                         placeholder="974 567 321"
                         :style="{
                'border-radius': '7px',
                'background-color': '#FFF389',
                'font-family': 'Inter',
                'font-size': '14px',
                'font-weight': 'bold',
                }"
          />
        </div>
      </div>
      <div class="name-sub-container">
        <h2>Correo electrónico</h2>
        <pv-input-text class="txt1"
                       v-model="value1"
                       type="text"
                       placeholder="carmenduenasserna@gmail.com"
                       :style="{
                'width': '110%',
                'border-radius': '7px',
                'background-color': '#FFF389',
                'font-family': 'Inter',
                'font-size': '14px',
                'font-weight': 'bold',
            }"
        />
      </div>
      <h1>Botones*</h1>
      <div class="name-container" style="display: flex; justify-content: space-between;">
        <div class="name-sub-container">
          <h2>Nombre</h2>
          <pv-input-text class="txt1"
                         v-model="value1"
                         type="text"
                         placeholder="Carmen"
                         :style="{
                'border-radius': '7px',
                'background-color': '#FFF389',
                'font-family': 'Inter',
                'font-size': '14px',
                'font-weight': 'bold',
                }"
          />
        </div>
        <div class="name-sub-container" style="margin-left: 10%;">
          <h2>Teléfono</h2>
          <pv-input-text class="txt1"
                         v-model="value1"
                         type="text"
                         placeholder="974 567 321"
                         :style="{
                'border-radius': '7px',
                'background-color': '#FFF389',
                'font-family': 'Inter',
                'font-size': '14px',
                'font-weight': 'bold',
                }"
          />
        </div>
      </div>
      <div class="name-sub-container">
        <h2>Descripción</h2>
        <pv-input-text class="txt1"
                       v-model="value1"
                       type="text"
                       placeholder=""
                       :style="{
                'width': '110%',
                'border-radius': '7px',
                'background-color': '#FFF389',
                'font-family': 'Inter',
                'font-size': '14px',
                'font-weight': 'bold',
                'color': '#FBB847',
                }"
        />
      </div>
    </div>
  </div>
  <FooterContent />
</template>

<style scoped>

.container{
  margin-top: 5%;
  margin-bottom: 5%;
  display:flex;
  justify-content: center;
  text-align: center;
}

.left-side-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  float: left;
}

.right-side-container{
  display: flex;
  float: left;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
}

h1{
  font-weight: bold;
  font-size: 50px;
  color: #FBB847;
}

h2{
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 5%;
  color: #FBB847;
}

.name-sub-container{
  margin-bottom: 7%;
}

img{
  width: 200px;
  height: 200px;
  border-radius: 100px;
}

.txt1::placeholder {
  font-weight: bold;
  color: #FBB847;
}

</style>