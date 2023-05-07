<template>
    <div class="flex flex-wrap">
        <div class="container">
            <div v-for="worker in workers" :key="worker.id" class="dsp-work">


                <pv-button
                  severity="warning"
                  outlined
                  class="p-button p-component p-button-rounded p-button-text-icon-left"
                  :style="{
        width: '120%',
        height: '80%',
        'border-radius': '15px',
        'background-color': '#FFFFFF',
      }"
                >
                    <img
                      src="src\assets\logo.svg"
                      class="user-avatar"
                      alt="Avatar de usuario"
                      width="20%"
                    />
                    <div class="user-info">
                        <div class="user-name">{{ worker.name }}</div>
                        <div class="user-details">
                            <div class="user-distance">{{ worker.direction }}</div>
                            <div class="user-stars">
                                <i class="pi pi-star"></i>
                                5.0 (70)
                            </div>
                        </div>
                    </div>
                    <div class="price-container">
                        <div class="price-info">S/ 15.00</div>
                        <div class="per-X">Por día</div>
                    </div>
                </pv-button>
            </div>
        </div>

    </div>
</template>

<script>
import { PetApiService } from "@/learning/services/pet-api.service";
export default {
    name: "result-content",
    data() {
        return {
            id: null,
            workers: [],
            worker: {},
            petService: null,
        }
    },
    created() {
        this.petService = new PetApiService();
        this.petService.getWorkers().then((response) => {
            this.workers = response.data;
            // console.log(this.workers);
        })
    }
};
</script>

<style scoped>
.user-avatar {
    border-radius: 50%;
    width: 10%;
    height: 10%;
    margin-left: 5%;
}

.user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 10%;
}

.user-name {
    font-weight: bold;
    margin-bottom: 5px;
    text-align: left;
    color: black;
}

.user-details {
    align-items: center;
    text-align: left;
    color: #7c7c7c;
}

.user-distance {
    margin-right: 5px;
}

.user-stars {
    margin-right: 10px;
}

.price-container {
    margin-left: auto;
    margin-right: 10%;
    align-items: end;
    text-align: right;
}

.price-info {
    color: black;
}

.per-X {
    color: #7c7c7c;
}

.container{
    display: flex;
    flex-direction: column;
}

</style>