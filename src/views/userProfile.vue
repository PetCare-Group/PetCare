<script >

import HeaderContent from "@/components/header-content.component.vue";
import FooterContent from "@/components/footer-content.component.vue";
import {PetApiService} from "../learning/services/pet-api.service";

export default ({
    name: "UserProfile",
    components: {HeaderContent, FooterContent},
    data() {
        return {
           id: sessionStorage.getItem("userId"),
            token:sessionStorage.getItem("token"),
            petService:null,
            user:null,

            selectedUser: null,
            name_value:null,
            mail_value:null,
            password_value: null,
           last_name_value: null,
            pets:null,
            petService: null,
            // id: JSON.parse(this.$route.params.id),
            // token:JSON.parse(this.$route.params.token),
           
        }
    },

    created() {

        this.petService = new PetApiService();
        this.petService.getUserById(this.id,this.token).then((response) => {
            console.log(response);
            this.selectedUser = response;
            this.user = response;
            console.log(this.selectedUser);
            this.sendData(this.selectedUser);
        });

        this.petService.getPet(this.id).then((response) => {
            console.log(response.data);
            this.pets = response.data;
            console.log(this.pets);
        });
    },

    methods:{
        
       sendData(user){
           
           this.name_value= user.firstName;
           this.last_name_value= user.lastName;
           this.mail_value=user.mail;
           
       }
        
    }})
</script>

<template>
   <HeaderContent :valor_label="this.user.firstName" :valor_id="this.id" :valor_token="this.token"/>

  <div class="container">
    <div class="left-side-container">
      <h1>Mi perfil</h1>
      <img src="/src/assets/logo.svg" alt="img1">
      <pv-button
          severity="warning"

          :style="{
        'display': 'flex',
        'margin-top': '25px',
        'border-radius': '7px',
        'justify-content': 'center',
        'color': 'white',
        }">Guardar</pv-button>
    </div>
    <div class="right-side-container">
      <div class="name-container" style="display: flex; justify-content: space-between;">
        <div class="name-sub-container">
          <h2>Nombre</h2>
            <pv-input-text class="txt1"
                           v-model="value1"
                           type="text"
                           :placeholder="name_value"
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
          <h2>Apellido</h2>
          <pv-input-text class="txt1"
                         v-model="value1"
                         type="text"
                         :placeholder="last_name_value"
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
      <div class="name-container" style="display: flex; justify-content: space-between;">
        <div class="name-sub-container">
          <h2>Teléfono</h2>
          <pv-input-text class="txt1"
                         v-model="value1"
                         type="text"
                         placeholder="982399406"
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
          <h2>DNI</h2>
          <pv-input-text class="txt1"
                         v-model="value1"
                         type="text"
                         placeholder="10725572"
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
                       :placeholder="mail_value"
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
      <div class="name-sub-container">
        <h2>Contraseña</h2>
        <pv-input-text class="txt1"
                       v-model="value1"
                       type="text"
                       placeholder="******"
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

      <h2>Cuentas vinculadas</h2>
      <div class="name-container" style="display: flex; justify-content: space-between;">
        <pv-button
            severity="warning"
            :style="{
                'margin-left': '10%',
                'width': '80%',
                'display': 'flex',
                'border-radius': '20px',
                'justify-content': 'center',
                'color': 'white',
            }">Facebook</pv-button>
        <pv-button
            severity="warning"
            :style="{
                'margin-left': '5%',
                'width': '80%',
                'display': 'flex',
                'border-radius': '20px',
                'justify-content': 'center',
                'color': 'white',
            }">Google</pv-button>
      </div>
      <pv-button
          severity="warning"
          :style="{
                'margin-top': '7%',
                'width': '110%',
                'display': 'flex',
                'border-radius': '20px',
                'justify-content': 'center',
                'color': 'white',
            }">Cambiar contraseña</pv-button>
      <pv-button
          severity="warning"
          :style="{
                'margin-top': '7%',
                'width': '110%',
                'display': 'flex',
                'border-radius': '20px',
                'justify-content': 'center',
                'color': 'white',
            }">Eliminar cuenta</pv-button>
    </div>
  </div>
  
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