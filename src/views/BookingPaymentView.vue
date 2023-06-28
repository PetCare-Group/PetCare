<script>
import {PetApiService} from "../learning/services/pet-api.service";
import HeaderContent from "../components/header-content.component.vue"
import { mapState } from 'vuex';
export default ({
    name: "BookingPaymentView",
    components: {HeaderContent},
    data() {
        return {
            workers: null,
            selectedPets:null,
            pets:null,
            petService: null,
            id: JSON.parse(this.$route.params.id),
            idP: JSON.parse(this.$route.params.idP),
            serviceType: 'Básica',
            servicioCost: 0,
            adicionalesCost: 0,
            discount: 0,
            cuotaPetCare: 1.2,
        }
    },

    computed: {

       
        
        
        totalToPay() {
            return this.servicioCost + this.adicionalesCost - this.discount + this.cuotaPetCare;
        },
    },

    methods: {
        changeServiceType(type) {
            this.serviceType = type;
            this.adicionalesCost = (type === 'Premium') ? 10 : 0;
        }
    },

    created() {

        this.petService = new PetApiService();
        this.petService.getWorkerId(this.id).then((response) => {
            console.log(response.data);
            this.workers = response.data;
            console.log(this.workers);
        });

        this.petService.getPetId(this.idP).then((response) => {
            console.log(response.data);
            this.pets = response.data;
            console.log(this.pets);
        });

        this.petService.GetUSerService(this.id).then((response) => {
            console.log(response.data);
            this.workers = response.data;
            console.log(this.services);
        });
    },
})
</script>

<template>
    
    <h1 class="title">Tu reserva</h1>
    <div class="booking-details">
        <div class="booking-info">
            <p class="bold-text">Direccion:</p>
            <p>{{ workers.location }}</p>
            <p class="bold-text">Servicio:</p>
            <p>{{ workers.typeService }}</p>
            <p class="bold-text">Fecha de inicio:</p>
            <p>{{ startDate }}</p>
            <p class="bold-text">Fecha de termino:</p>
            <p>{{ endDate }}</p>
        </div>
        <div class="booking-actions">
            <pv-button class="booking-button">Cambiar</pv-button>
            <pv-button class="booking-button">Ver horario</pv-button>
        </div>
    </div>

    <div class="pet-section">
        <h2 class="section-title">Su mascota {{this.pets.name}} </h2>
        <div class="pet-image-name">
            <pv-image :src="pets.image" class="pet-image"/>
            <div class="pet-name">{{ pets.name }}</div>
        </div>
    </div>

    <div class="promo-section">
        <h2 class="section-title">Promociones</h2>
        <div class="promo-actions">
            <pv-input-text class="promo-input"></pv-input-text>
            <pv-button class="promo-button">Agregar</pv-button>
        </div>
    </div>

    <div class="payment-section">
        <h2 class="section-title">Método de pago</h2>
        <div class="payment-info">
            <pv-image :src="cardImage" class="card-image"/>
            <div>
                <p class="card-type">{{ cardType }}</p>
                <p class="card-number">{{ cardLastFour }}</p>
                <p class="card-owner">{{ cardOwner }}</p>
            </div>
            <pv-button class="change-payment-button">Cambiar</pv-button>
        </div>
    </div>

    <div class="worker-section">
        <pv-image :src="workers.image" class="worker-image"/>
        <div class="worker-details">
            <h2 class="worker-name">{{ workers.name }}</h2>
            <p>Dirección: <span>{{ workers.location }}</span></p>
            <p>Valoraciones: <span>{{ workers.valoraciones }}</span></p>
        </div>
    </div>

    <div class="service-section">
        <h2 class="section-title">Tipo de servicio</h2>
        <div class="service-options">
            <div class="service-option">
                <input type="radio" id="premium" value="Premium" v-model="serviceType" @change="changeServiceType('Premium')">
                <label for="premium">Premium</label>
                <p class="service-description">Ten un servicio con seguimiento personalizado para tu mascota</p>
                <p class="service-cost">+S/10</p>
            </div>
            <div class="service-option">
                <input type="radio" id="basica" value="Básica" v-model="serviceType" @change="changeServiceType('Básica')">
                <label for="basica">Básica</label>
                <p class="service-description">Servicio básico</p>
                <p class="service-cost">+S/0</p>
            </div>
        </div>
    </div>

    <div class="payment-summary-section">
        <h2 class="section-title">Resumen de pago</h2>
        <div class="payment-details">
            <p>Costo de servicio: <span>{{ servicioCost }}</span></p>
            <p>Adicionales: <span>{{ adicionalesCost }}</span></p>
            <p>Descuento: <span>{{ discount }}</span></p>
            <p>Cuota PetCare: <span>{{ cuotaPetCare }}</span></p>
            <p class="total">Total a Pagar: <span>{{ totalToPay }}</span></p>
            <p class="small-text">Realizaremos una reserva a tu método de pago por el valor de la orden.</p>
        </div>
    </div>

    <router-link to="/reserva-exitosa">
    <pv-button class="make-reservation-button">Realizar reserva</pv-button>
    </router-link>
</template>

<style scoped>
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title {
    color: #FBB847;
    font-weight: bold;
    margin-left: 10px;
    font-size: 40px;
}

.booking-details {
    display: flex;
}

.booking-info {
    margin-left: 10px;
}

.bold-text {
    font-weight: bold;
    color: #FBB847;
    font-size: 17px;
}

.booking-info p {
    color: #FBB847;
}

.booking-actions {
    margin-left: 200px;
    display: flex;
    flex-direction: column;
    gap: 27px;
}

.booking-button {
    width: 142px;
    height: 31px;
    background-color: #FBB847;
    color: #FFFFFF;
    font-weight: bold;
    align-items: center;
    justify-content: center;
}

.section-title {
    font-size: 17px;
    font-weight: bold;
    color: #FBB847;
    margin-top: 40px;
}

.pet-section,
.promo-section,
.payment-section {
    margin-top: 40px;
}

.pet-image {
    width: 91px;
    height: 91px;
    border-radius: 50%;
}

.pet-name {
    width: 86.489px;
    height: 16.349px;
    background-color: #FBB847;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
}

.promo-input {
    width: 362px;
    height: 50px;
}

.promo-button {
    width: 142px;
    height: 31px;
    background-color: #FBB847;
    color: #FFFFFF;
    font-weight: bold;
    margin-left: 30px;
    align-items: center;
    justify-content: center;
}

.card-image {
    width: 60px;
    height: 60px;
}

.change-payment-button {
    width: 142px;
    height: 31px;
    background-color: #FBB847;
    color: #FFFFFF;
    font-weight: bold;
    margin-left: 300px;
    align-items: center;
    justify-content: center;
}

.worker-section {
    display: flex;
    width: 525px;
    height: 158px;
    margin-top: 20px;
    background: #FFF389;
    border-radius: 5px;
    padding: 15px;
    align-items: center;
}

.worker-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.worker-details {
    margin-left: 15px;
}

.worker-details p {
    margin: 0;
}

.worker-name {
    font-size: 20px;
    font-weight: bold;
}

.service-section,
.payment-summary-section {
    background: #FFF389;
    border-radius: 5px;
    padding: 15px;
    width: 525px;
    margin-top: 12px;
}

.service-options {
    display: flex;
    justify-content: space-between;
}

.service-option {
    display: flex;
    flex-direction: column;
}

.service-description {
    margin: 0;
}

.service-cost {
    color: black;
}

.payment-details {
    display: flex;
    flex-direction: column;
}

.payment-details p {
    margin: 0;
}

.payment-details span {
    color: black;
}

.total {
    font-size: 20px;
    font-weight: bold;
}

.small-text {
    font-size: 12px;
}

.make-reservation-button {
    width: 351px;
    height: 50px;
    background-color: #FBB847;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
}


</style>
