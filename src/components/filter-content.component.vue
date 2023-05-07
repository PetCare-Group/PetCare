<template>
  <div
    class="flex-direction-column flex-wrap flex align-items-center justify-content-between row-gap-2 w-20rem h-auto border-orange-500 border-2 p-4"
  >
    <div>
      <h1 class="inline-block font-semibold">Otros filtros</h1>
      <pv-button
        @click="cleaner()"
        class="text-orange-500"
        label="Limpiar"
        link
      />
    </div>

    <div class="relative w-20rem h-auto">
      <span class="block font-normal text-100 text-black-alpha-50">
        ¿Cuanto pesa su mascota?</span
      >
      <div
        class="buttons flex flex-wrap justify-content-between align-items-center row-gap-4"
      >
        <pv-button
          v-model="checkeds[0]"
          label="0-5Kg"
          severity="warning"
          @click="change(0)"
          :class="{ yes: checkeds[0], no: !checkeds[0] }"
        />
        <pv-button
          v-model="checkeds[1]"
          label="5-15Kg"
          severity="warning"
          @click="change(1)"
          :class="{ yes: checkeds[1], no: !checkeds[1] }"
        />

        <pv-button
          v-model="checkeds[2]"
          label="15-30Kg"
          severity="warning"
          @click="change(2)"
          :class="{ yes: checkeds[2], no: !checkeds[2] }"
        />
        <pv-button
          v-model="checkeds[3]"
          label="+ 30Kg"
          severity="warning"
          @click="change(3)"
          :class="{ yes: checkeds[3], no: !checkeds[3] }"
        />
      </div>
    </div>

    <div
      class="flex-direction-column flex flex-wrap w-20rem justify-content-between row-gap-2"
    >
      <span class="block font-normal text-100 text-black-alpha-50">
        ¿Cual es su rango de precio?</span
      >
      <div
        class="w-full flex-direction-column flex flex-wrap justify-content-around"
      >
        <div>
          <pv-slider v-model="value" range class="w-12rem mb-3 mr-3" />
        </div>
        <div>
          <pv-input-text
            v-model.number="value[0]"
            class="w-5rem h-3rem mr-3 ml-3"
          />
          <pv-input-text
            v-model.number="value[value.length - 1]"
            class="w-5rem h-3rem mr-3 ml-3"
          />
        </div>
      </div>
    </div>

    <div
      class="flex-direction-column flex flex-wrap w-20rem justify-content-between row-gap-2"
    >
      <span class="block font-normal text-100 text-black-alpha-50">
        Caracteristicas del experto</span
      >

      <div
        class="flex-direction-column flex flex-wrap justify-content-start w-full mb-3"
      >
        <div>
          <div class="buttons flex flex-wrap justify-content-between w-full">
            <p>Suministrar medicamentos</p>
            <pv-toogle-buttom
              v-model="medicine"
              :class="{ yes: medicine, no: !medicine }"
            />
          </div>
          <p class="text-black-alpha-30 text-50">
            El experto puede administrar medicamentos a su mascota
          </p>
        </div>

        <div>
          <div class="buttons flex flex-wrap justify-content-between w-full">
            <p>Variedad de mascotas</p>
            <pv-toogle-buttom v-model="pet" :class="{ yes: pet, no: !pet }" />
            <!--            <ToggleButton v-model="checked" class="w-8rem" />-->
          </div>
          <p class="text-black-alpha-30 text-50">
            El experto acepta variedad de mascotas
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filter-content.component",

  data() {
    return {
      value: [0, 80],
      checkeds: [false, false, false, false],
      medicine: false,
      pet: false,
    };
  },

  methods: {
    change(value) {
      for (let i = 0; i < this.checkeds.length; i++) {
        if (i !== value) {
          this.checkeds[i] = false;
        } else {
          this.checkeds[value] = !this.checkeds[value];
        }
      }
    },

    cleaner() {
      for (let i = 0; i < this.checkeds.length; i++) {
        this.checkeds[i] = false;
      }

      this.medicine = false;
      this.pet = false;
      this.value = [0, 80];
    },
  },
};
</script>

<style scoped>
.buttons .yes {
  background-color: #fbb847 !important;
  color: white;
  height: 2rem;
}

.buttons .no {
  background-color: #ccc !important;
  color: white;
  height: 2rem;
}
</style>
