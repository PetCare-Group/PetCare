<script>
import {PetApiService} from "../learning/services/pet-api.service";
import HeaderContent from "../components/header-content.component.vue"
export default ({
name: "CreatedBookedView",
    components: {HeaderContent},
        data() {
            return {
                workers: null,
                selectedPets:null,
                date_value:null,
                time_value: null,
                pets:null,
                petService: null,
                id: JSON.parse(this.$route.params.id),
                hours: [{value:"08:00"},{value:"09:00"} ,{value:"10:00"},{value:"11:00"},{value:"12:00"},{value:"13:00"},{value:"14:00"},{value:"15:00"},{value:"16:00"},{value:"17:00"},{value:"18:00"}],
            }
        },

    created() {

        this.petService = new PetApiService();
        this.petService.getWorkerId(this.id).then((response) => {
            console.log(response.data);
            this.workers = response.data;
            console.log(this.workers);
        });

        this.petService.getPet().then((response) => {
            console.log(response.data);
            this.pets = response.data;
            console.log(this.pets);
        });
    },
    
    methods:{
    
    showDate(){
        
        console.log(this.date_value);
    }
    
    }
    
})
</script>

<template>
    <HeaderContent/>
<div class="flex-column flex-wrap justify-content-start mt-5rem">
    <div class="flex flex-box flex-row flex-wrap justify-content-around text-5xl text-orange-500 mb-5">
    Reservar servicio con {{this.workers.user.firstName}}
      
    </div>
   
    <div class="flex flex-box flex-row flex-wrap mr-5 ml-5 text-orange-500 border-bottom-1 mb-5">
   
    <pv-image
        src="https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg"
        alt="Image"
        width="160"
        preview
    ></pv-image>
        <div class="flex flex-wrap flex-column justify-content-start ml-5   ">
            <p class="font-semibold text-3xl">{{this.workers.user.firstName}}</p>
            <p>{{this.workers.location}}</p>
            <p>{{this.workers.description}}</p>
        </div>
        
        
    </div>

    <div class="flex flex-box flex-row w-full gap- 6">
        
     <div>   
    <div class=" flex flex-box flex-column w-18rem border-bottom-1 border-orange-500 ml-5 mr-5 gap-3">
        <p class="text-orange-500 ">¿Cual es su servicio seleccionado ?</p>
        <p class=" text-center mb-3 " > {{this.workers.typeService}} </p>
        
    </div>

    <div class=" flex flex-box flex-column w-18rem border-bottom-1 border-orange-500 ml-5 mr-5 gap-3">

        <p class="text-orange-500 mt-3">¿Que mascota desea seleccionar?</p>
        <pv-dropdown
            style="background-color: #fff389"
            v-model="selectedPets"
            :options="pets"
            optionLabel="name"
            placeholder="nombre"
            class="w-full md:w-14rem mb-5"
            
            
        />

    </div>

    </div>
         
    
        <div>
            <div class="flex flex-box flex-column w-18rem border-bottom-1 border-orange-500 ml-5 mr-5 gap-3 mb-3">


                <p  class="text-orange-500 ">Fecha </p>
                <pv-input-text
                    style="background-color: #fff389 "
                    type="date"
                    id="username"
                    v-model="date_value"
                    aria-describedby="username-help"
                    class="w-full md:w-14rem "

                />

                <p class="text-orange-500 ">Hora </p>

                <pv-dropdown
                    style="background-color: #fff389"
                    v-model="time_value"
                    :options="hours"
                    optionLabel="value"
                    placeholder="hh:mm"
                    class="w-full md:w-14rem mb-3"
                />

      
            
            
        </div>
        </div>
        <div>
            <router-link :to=" { name: 'payment', params:{id:JSON.stringify(this.id)}}">
            <pv-button
                class="surface-0 bg-yellow-500"
                style="width: 280px"
                type="submit"
                label="Continuar"
            />
            </router-link>
    
     </div>

</div>
</div>

</template>

<style >

</style>