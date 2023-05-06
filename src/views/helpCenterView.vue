<template>
  <div class="container">
    <h1 class="main-title">Solucionador de problemas</h1>

    <div class="buttons-container">
      <pv-button class="custom-button" label="Chat online" severity="warning" />
      <pv-button
        class="custom-button"
        label="Realizar consulta"
        severity="warning"
        @click="showForm = !showForm"
      />
    </div>
    <div v-if="showForm">
      <div class="input-fields">
        <div>
          <h3 class="section-title">Título de consulta</h3>
          <pv-input-text
            class="input-title"
            v-model="value2"
            type="text"
            placeholder="Título de consulta"
          />
        </div>
        <div>
          <h3 class="section-title">Descripción</h3>
          <pv-input-text
            class="input-description"
            v-model="value2"
            type="text"
            placeholder="Descripción"
          />
        </div>
      </div>
      <div class="attach-images">
        <h3 class="section-title attach-images-title">Adjuntar imágenes</h3>
        <i class="pi pi-plus-circle custom-icon"></i>
        <pv-button
          class="custom-button generate-button"
          label="Generar consulta"
          severity="warning"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TutorialsApiService } from "@/learning/services/tutorials-api.service";
export default {
  name: "helpCenterView",
  data() {
    return {
      id: null,
      workers: [],
      worker: {},
      petService: null,
      showForm: false,
      value2: "",
    };
  },
  created() {
    this.petService = new TutorialsApiService();
    this.petService.GetWorkers().then((response) => {
      this.workers = response.data;
      console.log(this.workers);
    });
  },
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
}
.main-title {
  width: 750px;
  height: 68px;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 68px;
  color: #fbb847;
  text-align: center;
  margin-bottom: 15px;
}
.buttons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.custom-button {
  box-sizing: border-box;
  width: 299px;
  height: 53px;
  background: #fbb847;
  border: 5px solid #fbb847;
  border-radius: 15px;
  margin-bottom: 15px;
}
.section-title {
  width: 176px;
  height: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #fbb847;
  margin-bottom: 10px;
}
.input-fields {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-title {
  box-sizing: border-box;
  width: 1154px;
  height: 53px;
  background: #fff389;
  border: 1px solid #fbb847;
  border-radius: 15px;
  margin-bottom: 20px;
}
.input-description {
  box-sizing: border-box;
  width: 1154px;
  padding-top: 10px;
  padding-bottom: 205px;
  background: #fff389;
  border: 1px solid #fbb847;
  border-radius: 15px;
  text-align: left;
  margin-bottom: 20px;
}
.attach-images {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-left: 36%;
}
.attach-images-title {
  white-space: nowrap;
}
.custom-icon {
  font-size: 38px;
  color: #fbb847;
  margin-bottom: 15px;
}
.generate-button {
  margin-bottom: 15px;
}
@media (max-width: 1150px) {
  .container {
    margin-top: 20px;
  }
  .main-title {
    font-size: 32px;
    line-height: 40px;
    width: auto;
    height: auto;
  }
  .custom-button {
    width: 100%;
  }
  .input-title,
  .input-description {
    width: 100%;
  }
  .attach-images {
    align-items: center;
    margin-left: 0;
  }
  .generate-button {
    width: 50%;
  }
}
@media (max-width: 768px) {
  .custom-button {
    width: 99%;
  }
  .generate-button {
    width: 30%;
  }
}
</style>
