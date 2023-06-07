<template>
  <div class="login-container">
    <div class="image-container">
      <img src="src/components/img/LogBackground.jpg" alt="Login Image" class="login-image">
      <div class="image-text">
        <h1 class="h1-bg">PetCare</h1>
        <p class="p-bg">Una comunidad creada especialmente para los amantes de las mascotas</p>
      </div>
    </div>
    <div class="form-container">
      <h2>Registrarse</h2>
      <form @submit="signup">
        <div class="input-container">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="input-container">
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="input-container">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="input-container">
          <label for="role">Rol:</label>
          <div class="card flex justify-content-center">
            <pv-dropdown v-model="selectedRole" :options="roles" optionLabel="name" placeholder="Seleccione un rol" class="w-full md:w-14rem custom-dropdown" />
          </div>
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
      <p v-if="signedUp" class="success-message">Registro Completado!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');
const role = ref('');
const error = ref('');
const signedUp = ref(false);

//Enviar la información de tipo de cuenta/rol
const selectedRole = ref();
const roles = ref([
  { name: 'Dueño de mascota', code: 'DM' },
  { name: 'Adiestrador/Veterinario', code: 'A' },
]);

const signup = (event) => {
  event.preventDefault();
  fetch('http://localhost:3000/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value,
      role: role.value
    })
  })
      .then(response => {
        if (response.ok) {
          error.value = '';
          signedUp.value = true;
        } else {
          error.value = 'Registration failed';
          signedUp.value = false;
        }
        name.value = '';
        email.value = '';
        password.value = '';
      })
      .catch(error => {
        console.error('Signup request error:', error);
      });
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

.input-container {
  margin-bottom: 15px;
  width: 100%;
}

input, .custom-dropdown {
  border-radius: 10px;
  border: 1px solid #fbb847;
  padding: 8px;
  width: 100%;
}

label {
  display: block;
  font-weight: bold;
  text-align: center;
}

button {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #fbb847;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

.error-message {
  color: red;
}

.success-message {
  color: green;
}
</style>