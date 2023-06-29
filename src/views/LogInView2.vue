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
     
        <div class="input-container">
          <label for="username">Correo:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="input-container">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <pv-button @click="createdUser" class="action-button" >Iniciar sesión</pv-button>
       
      <p v-if="error" class="error-message">{{ error }}</p>
      <p v-if="loggedIn" class="success-message">Sesión iniciada correctamente!</p>
    </div>
  </div>
</template>

<script >

import { PetApiService } from "@/learning/services/pet-api.service";
import { FilterMatchMode } from "primevue/api";
import HeaderContent from "@/components/header-content.component.vue";
import FooterContent from "@/components/footer-content.component.vue";
import router from "../router";
export default {
    name: "login",
    components: { FooterContent, HeaderContent},
    data() {
        return {

            username: null,
            password: null,
            id: null,
            date_value: null,
            time_value: null,
            user: null,
            user_info: null,
            petService: null,
            success:false,
            token: null,
        };
    },

    created() {
       this.petService=new PetApiService();
    },

    methods: {

       
        
        entrar(data) {

            this.petService.PostAuthentication(data).then((response) => {
                this.user_info = response.data;
                console.log(this.user_info);
                if(this.user_info!=null){
                    console.log( " si ")
                    this.id= this.user_info.id;
                    this.token=this.user_info.token;
                    console.log(this.id);
                    this.validation(this.id);
                }
                // console.log(this.pets);
            });
            
            

        },
        
        

        createdUser() {

            
            this.user = new Object({
                mail: this.username,
                password: this.password
            });

            //console.log(this.user);
            this.entrar(this.user);


        },

        validation(id){

            if(id!=null){
                console.log(" si 2")
                sessionStorage.setItem("token", `${this.token}`);
                sessionStorage.setItem("userId", `${this.id}`);

                router.push({ name: 'home', params: { id: JSON.stringify(this.id), token:JSON.stringify(this.token)  } });

            }
            else {
                console.log(" ");
            }

        },

    }
}

  
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