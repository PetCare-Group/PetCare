<script >

import SearchBarContent from "../components/search-bar-content.vue";
import FilterContent from "../components/filter-content.component.vue"
import ResultContent from "../components/result-content.vue";
import HeaderContent from "../components/header-content.component.vue"
import {PetApiService} from "../learning/services/pet-api.service";
export default {

    name: "home.component",
    components: {HeaderContent, ResultContent, FilterContent, SearchBarContent},

    data() {
        return {
            id: sessionStorage.getItem("userId"),
            token:sessionStorage.getItem("token"),
            petService:null,
            user:null
            
        }
        // return {
        //     id: JSON.parse(this.$route.params.id),
        //     token:JSON.parse(this.$route.params.token),
        //     petService:null,
        //     user:null
            
        // }
    },
    
    created() {
        
        this.petService = new PetApiService();
        this.petService.getUserById(this.id,this.token).then((response) => {
            console.log(this.token);
            console.log(response);
            this.user = response;
            console.log(this.user);
        });


    }
    
    
}

</script>

<template>
    <HeaderContent :valor_label="this.user.firstName" :valor_id="this.id" :valor_token="this.token"/>
    <SearchBarContent />
    <div class="flex flex-wrap justify-content-between w-10 mx-auto mt-4">
      <FilterContent />
      
    </div>

</template>

