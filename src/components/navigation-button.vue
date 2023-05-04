<template>
    <pv-button
            severity="warning" outlined
            class="p-button p-component
            p-button-rounded
            p-button-text-icon-left"
            :style="{
            'width': '120%',
            'height':'30%',
            'border-radius': '15px',
            'background-color': '#FFFFFF',
           }">
        <img src="src\assets\logo.svg" class="user-avatar" alt="Avatar de usuario" />
        <div class="user-info">
            <div class="user-name">Nombre de la persona</div>
            <div class="user-details">
                <div class="user-distance">500m - Buenaventura 1730</div>
                <div class="user-stars">
                    <i class="pi pi-star"></i>
                    5.0 (70)</div>
            </div>
        </div>
        <div class="price-container">
            <div class="price-info">S/ 15.00</div>
            <div class="per-X">Por día</div>
        </div>
    </pv-button>
</template>

<script>

export default {
    name: 'navigation-button.component'
}

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
    color: #7C7C7C;
}

.user-distance {
    margin-right: 5px;
}

.user-stars {
    margin-right: 10px;
}

.price-container{
    margin-left: auto;
    margin-right: 10%;
    align-items: end;
    text-align: right;
}

.price-info {
    color: black;
}

.per-X{
    color: #7C7C7C;
}
</style>
