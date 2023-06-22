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
      <h2>Iniciar sesión</h2>
      <form @submit="login">
        <div class="input-container">
          <label for="username">Correo:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="input-container">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit" class="action-button" >Iniciar sesión</button>

      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
      <p v-if="loggedIn" class="success-message">Sesión iniciada correctamente!</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const error = ref('');
const loggedIn = ref(false);

const goToHome = () => {
  // console.log("Loginaaa")

  router.push('/');
};

const login = (event) => {
  console.log("Login")
  event.preventDefault();
  fetch('http://localhost:5013/api/v1/users/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mail: username.value,
      password: password.value
    })
  })
      .then(response => {
        if (response.ok) {
          error.value = '';
          loggedIn.value = true;
          console.log(response)
          goToHome()
        } else {
          error.value = 'Invalid mail or password';
          loggedIn.value = false;
        }
        username.value = '';
        password.value = '';
      })
      .catch(error => {
        console.error('Login request error:', error);
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

input{
  border-radius: 10px;
}

label {
  display: block;
  font-weight: bold;
  text-align: center;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
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