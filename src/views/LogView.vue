<template>
  <div class="login-container">
    <div class="image-container">
      <img src="/src/components/img/LogBackground.jpg" alt="Login Image" class="login-image">
      <div class="image-text">
        <h1 class="h1-bg">PetCare</h1>
        <p class="p-bg">Una comunidad creada especialmente para los amantes de las mascotas</p>
      </div>
    </div>
    <div class="form-container">
      <h2>Bienvenido a PetCare</h2>
      <form>
        <button type="button" class="action-button" @click="goToLogin">Iniciar sesión</button>
        <button type="button" class="action-button" @click="goToSignIn">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push('/login');
};

const goToSignIn = () => {
  router.push('/signin');
};
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.image-container {
  width: 50%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.login-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.image-text h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 0 black;
}

.image-text p {
  font-size: 1.2rem;
  text-shadow: 2px 2px 0 black;
}

.form-container {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  margin: 0 auto;
}

h2 {
  margin-bottom: 20px;
}

input {
  border-radius: 10px;
}

label {
  display: block;
  font-weight: bold;
  text-align: center;
}

button.action-button {
  display: block;
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  background-color: #fbb847;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

</style>

