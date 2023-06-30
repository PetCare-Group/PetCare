<template>
   
    <div class="servicio-container">
      <div class="servicio-info">
        <div class="info__profile">
          <pv-image
            src="https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg"
            alt="Image"
            width="160"
            preview
          ></pv-image>
            <p>{{this.workers.id}}</p>
          <div class="info__profile__data">
            <p v-if="this.worker && this.worker.location" class="text-yellow-500 font-bold text-lg">{{ this.worker.location }}</p>
  
            <div>
              <p v-if="this.worker && this.worker.review" class="text-yellow-500 font-bold text-lg">Valoraciones: {{ this.worker.review }}</p>
            </div>
            <p v-if="this.worker && this.worker.id" class="text-yellow-500 font-bold text-lg">Servicios realizados: {{ this.worker.id }}</p>
          </div>
          <div class="info__profile__services">
            <p class="text-yellow-500 font-bold text-lg">Servicios</p>
            <div>
              <img src="/assets/service-content/image 7.png" alt="" width="50" style="border: 1px solid #FBB847; border-radius: 50%; padding: 8px; margin-right: 12px;">
              <img src="/assets/service-content/Group 9.png" alt="" width="50" style="border: 1px solid #FBB847; border-radius: 50%; padding: 8px;">
            </div>
          </div>
        </div>
        <div class="servicio-info__about">
          <h3 class="text-yellow-500 font-medium">Sobre {{ this.workers.user.firstName }}</h3>
          <div class="servicio-info__about__message">
            <p >{{ this.workers.description }}</p>
            <p class="text-yellow-500">Continuar leyendo</p>
          </div>
          <div class="servicio-info__about__detail">
            <img src="./../assets/service-content/icon _pills_.png" height="20px" style="margin-right: 16px; margin-left: 8px;" alt="">
            <span>Aplico medicina oral</span>
          </div>
          <div class="servicio-info__about__detail">
            <img src="./../assets/service-content/icon _white cat_.png" height="20px" style="margin-right: 12px;" alt="">
            <span>Acepto a gatos</span>
          </div>
          <div class="servicio-info__about__detail">
            <img src="./../assets/service-content/icon _heart rate_.png" height="20px" style="margin-right: 12px;" alt="">
            <span>Brindo cuidado para discapacitados</span>
          </div>
        </div>
        <div class="servicio-info__coments">
          <div>
            <h3 class="text-yellow-500 font-bold">Valoraciones</h3>
            <div class="servicio-info__coments__cards">
              <div>
                <img src="/assets/service-content/image 20.png" alt="" width="60px" height="60px">
                <div>
                  <span>Estrellas</span>
                </div>
                <p class="text-yellow-500 text-xs">Servicio contratado el <br><span>12 de marzo del 2013</span></p>
              </div>
              <div>
                <img src="/assets/service-content/image 20.png" alt="" width="60px" height="60px">
                <div>
                  <span>Estrellas</span>
                </div>
                <p class="text-yellow-500 text-xs">Servicio contratado el <br><span>12 de marzo del 2013</span></p>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-yellow-500 font-bold">Comentarios</h3>
            <div class="servicio-info__coments__cards">
              <div>
                <img src="./../assets/service-content/image 20.png" height="60px" style="margin-right: 12px;" alt="">
                <p class="text-yellow-500">Servicio contratado el <br><span>12 de marzo del 2013</span></p>
              </div>
              <div>
                <img src="./../assets/service-content/image 20.png" height="60px" style="margin-right: 12px;" alt="">
                <p class="text-yellow-500">Servicio contratado el <br><span>12 de marzo del 2013</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="servicio-tarifa">
        <div class="tarifa">
          <h3 class="text-yellow-500">Tarifas</h3>
          <div>
              <p  class="text-yellow-500">{{ this.workers.typeService }}</p>
            <p  class="text-yellow-500">S/{{ this.workers.price }}.0</p>
          </div>
            <router-link :to=" { name: 'booked', params:{id:JSON.stringify(this.id),userId:JSON.stringify(this.userId),token:JSON.stringify(this.token)}}">
          <pv-button label="Reservar" severity="warning" raised />
            </router-link>
        </div>
        <div class="calendario">
          <h3>Disponibilidad</h3>
          <div class="card flex justify-content-center" style="width: 100%; height: 200px;">
            <pv-calendar v-model="date" inline showWeek />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const date = ref();
  </script>
  
  <script>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import { PetApiService } from "@/learning/services/pet-api.service";
  import HeaderContent from "../components/header-content.component.vue"
  export default {
    name: "service-content.component",
      components: {HeaderContent},
    data() {
      return {
        workers: null,
        petService: null,
        id: JSON.parse(this.$route.params.id),
          userId: JSON.parse(this.$route.params.userId),
          token: JSON.parse(this.$route.params.token)
          
      }
    },
    created() {
      
      this.petService = new PetApiService();
      this.petService.getWorkerId(this.id).then((response) => {
          console.log(response.data);
        this.workers = response.data;
        console.log(this.workers);
      });
    },
    methods: {
      worker() {
        const workerId = JSON.parse(this.$route.para.id);

        console.log(this.$route, "-----")
        return this.workerId = workerId;
        console.log(this.workerId);
        // return this.workers.find((worker) => worker.id === workerId);
      },
    },
  };
  </script>
  <style scoped>

.servicio-container{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    gap: 26px;
    margin-top: 40px;
    /* flex-direction: column; */
}
.servicio-info{
    display: flex;
    flex-direction: column;
    width: 70%;
}
.info__profile{
    display: flex;
    margin-bottom: 20px;
    /* justify-content: space-between; */
}
.info__profile__data{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 28px;
}
/*  */

.servicio-info__about__message{
    border: 1px solid #FFF389;
    border-radius: 16px;
    margin-bottom: 20px;
    padding: 12px;
    margin-top: 8px;
}
/*  */

.servicio-info__coments{
    display: flex;
    gap: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.servicio-info__coments > div{
width: 50%;
}
.servicio-info__coments__cards{
    border-radius: 16px ;
    background-color: #FBB847;
    /* width: 50%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 0;
    gap: 12px;
}
.servicio-info__coments__cards > div{
    width: 90%;
    height: auto;
    background-color: #fff;
    border-radius: 8px;
    color: black;
    display: flex;
    align-items: center;
}
.servicio-info__coments__cards > div img{
    margin-right: 12px;
}
.servicio-info__coments__cards > div > div{
    margin-right: 12px;
}

.servicio-tarifa{
    width: 30%;
}
.tarifa{
    display: flex;
    flex-direction: column;
    align-content: center;
    /* text-align: center; */
    border: 1px solid #FBB847;
    border-radius: 12px;
    padding: 20px 12px;
}
.tarifa div{
    display: flex;
    justify-content: space-between;
    margin-top: 12px;

}
.tarifa button{
    margin-top: 20px;
}
</style>
