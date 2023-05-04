<template>
    <div class="flex justify-content-between flex-wrap mt-4 z-0 w-10 mx-auto">
        <div class="card flex justify-content-center flex-column">
            <label class="mb-2" for="username">Servicios:</label>

            <pv-dropdown
                    style="background-color: #fff389"
                    v-model="selectedCity"
                    :options="services"
                    optionLabel="name"
                    placeholder="Servicios"
                    class="w-full md:w-14rem"
            />
        </div>
        <div class="flex flex-column gap-2">
            <label for="username">Direccion</label>
            <pv-input-text
                    style="background-color: #fff389"
                    id="username"
                    v-model="addres_value"
                    placeholder="Direccion"
                    aria-describedby="username-help"
            />
        </div>

        <div class="flex flex-column gap-2">
            <label for="username">Fecha </label>
            <pv-input-text
                    style="background-color: #fff389"
                    type="date"
                    id="username"
                    v-model="date_value"
                    aria-describedby="username-help"
            />
        </div>

        <pv-button
                class="surface-0 bg-yellow-500"
                style="width: 280px"
                type="submit"
                label="Submit"
        />
    </div>

    <div class="flex justify-content-end mt-4 w-10 mx-auto">
        <div class="card flex justify-content-center flex-column">
            <label class="mb-2" for="username"> </label>

            <pv-dropdown
                    style="background-color: #fff389"
                    v-model="selectedCity"
                    :options="cities"
                    optionLabel="name"
                    placeholder="Ordenar por"
                    class="w-full md:w-14rem"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "search-bar-content",
    data() {
        return {
            addres_value: null,
            date_value: null,
            selectedCity: null,
            cities: [
                { name: "A-Z", code: "NY" },
                { name: "Mejor calificados", code: "RM" },
                { name: "Mejor tarifa", code: "LDN" },
            ],
            services: [
                { name: "Adiestrador", code: "NY" },
                { name: "Paseador", code: "RM" },
                { name: "Veterinario", code: "LDN" },
            ],
        };
    },
};
</script>

<style scoped></style>
