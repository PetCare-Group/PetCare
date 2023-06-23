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
                pets:null,
                petService: null,
                id: JSON.parse(this.$route.params.id),
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
    
    <div class=" flex flex-box flex-column w-18rem border-bottom-1 border-orange-500 ml-5 mr-5 gap-3">
        <p class="text-orange-500 ">¿Cual es su servicio seleccionado ?</p>
        <p class=" text-center mb-3 " > {{this.workers.typeService}} </p>
        
    </div>

    <div>
        <pv-dropdown
            style="background-color: #fff389"
            v-model="selectedPets"
            :options="pets"
            optionLabel="name"
            placeholder="nombre"
            class="w-full md:w-14rem"
        />

    </div>



</div>
</template>

<style >

</style>