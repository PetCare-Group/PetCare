<template>
  <div>
    <div class="card">
      <pv-toolbar class="mb-4">
        <template #start>
          <pv-button
            label="New"
            icon="pi pi-plus"
            class="p-button-success mr-2"
            @click="openNew()"
          />
          <pv-button
            label="Delete"
            icon="pi pi-trash"
            class="p-button-danger"
            @click="confirmDeleteSelected"
            :disabled="!selectedpets || !selectedpets.length"
          />
        </template>
      </pv-toolbar>
      <pv-data-table
        ref="dt"
        :value="pets"
        v-model:selection="selectedpets"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} tutorials"
        responsiveLayout="scroll"
      >
        <template #header>
          <div
            class="table-header flex flex-column md:flex-row md:justify-content-between"
          >
            <h5 class="mb-2 md:m-0 p-as-md-center text-xl">Manage Tutorials</h5>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <pv-input-text
                v-model="filters['global'].value"
                placeholder="Search..."
              />
            </span>
          </div>
        </template>

        <pv-column
          selectionMode="multiple"
          style="width: 3rem"
          :exportable="false"
        ></pv-column>
        <pv-column
          field="id"
          header="Id"
          :sortable="true"
          style="min-width: 12rem"
        ></pv-column>
        <pv-column
          field="name"
          header="Name"
          :sortable="true"
          style="min-width: 16rem"
        ></pv-column>
        <pv-column
          field="description"
          header="Description"
          :sortable="true"
          style="min-width: 16rem"
        ></pv-column>
        <pv-column
          field="castrado"
          header="Castrado"
          :sortable="true"
          style="min-width: 12rem"
        >
          <template #body="slotProps">
            <pv-tag
              v-if="slotProps.data.status === 'Castrado'"
              severity="success"
            >
              {{ slotProps.data.status }}
            </pv-tag>
            <pv-tag v-else severity="info">{{ slotProps.data.status }}</pv-tag>
          </template>
        </pv-column>
        <pv-column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <pv-button
              icon="pi pi-pencil"
              class="p-button-text p-button-rounded"
              @click="editPet(slotProps.data)"
            />
            <pv-button
              icon="pi pi-trash"
              class="p-button-text p-button-rounded"
              @click="confirmDeletePet(slotProps.data)"
            />
          </template>
        </pv-column>
      </pv-data-table>
    </div>
    <pv-dialog
      v-model:visible="petDialog"
      :style="{ width: '450px' }"
      header="Tutorial Information"
      :modal="true"
      class="p-fluid"
    >
      <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text
            type="text"
            id="name"
            v-model.trim="pet.name"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !pet.name }"
          />
          <label for="name">Title</label>
          <small class="p-error" v-if="submitted && !pet.name">
            Title is required.
          </small>
        </span>
      </div>

      <div class="field">
        <span class="p-float-label">
          <pv-textarea
            id="description"
            v-model="pet.description"
            required="false"
            rows="2"
            cols="20"
          />
          <label for="description">Description</label>
        </span>
      </div>
      <div class="field">
        <pv-dropdown
        id="castrado"
        v-model="pet.castrado"
        :options="statuses"
        optionLabel="label"
        :placeholder="statuses ? 'Select a Status' : ''"
      >

        <template #value="slotProps">
          <div v-if="slotProps.value && slotProps.value.label">
        <span :class="'pet-badge status-' + slotProps.value.value">
          {{ slotProps.value.label }}
        </span>
      </div>

          <div v-else-if="slotProps.value && typeof slotProps.value === 'string'">
            <span :class="'pet-badge status-' + slotProps.value.toLowerCase()">
              {{ slotProps.value }}
            </span>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>

        </pv-dropdown>
      </div>
      <template #footer>
        <pv-button
          :label="'Cancel'.toUpperCase()"
          icon="pi pi-times"
          class="p-button-text"
          @click="hideDialog"
        />
        <pv-button
          :label="'Save'.toUpperCase()"
          icon="pi pi-check"
          class="p-button-text"
          @click="savePet"
        />
      </template>
    </pv-dialog>

    <pv-dialog
      v-model:visible="deletePetDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="pet">
          Are you sure you want to delete <b>{{ pet.name }}</b
          >?
        </span>
      </div>
      <template #footer>
        <pv-button
          :label="'No'.toUpperCase()"
          icon="pi pi-times"
          class="p-button-text"
          @click="deletePetDialog = false"
        />
        <pv-button
          :label="'Yes'.toUpperCase()"
          icon="pi pi-check"
          class="p-button-text"
          @click="deletePet"
        />
      </template>
    </pv-dialog>

    <pv-dialog
      v-model:visible="deletePetsDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="pet">
          Are you sure you want to delete the selected pets?
        </span>
      </div>
      <template #footer>
        <pv-button
          :label="'No'.toUpperCase()"
          icon="pi pi-times"
          class="p-button-text"
          @click="deletePetsDialog = false"
        />
        <pv-button
          :label="'Yes'.toUpperCase()"
          icon="pi pi-check"
          class="p-button-text"
          @click="deleteSelectedPets"
        />
      </template>
    </pv-dialog>
  </div>
</template>

<script>
import { PetApiService } from "@/learning/services/pet-api.service";
import { FilterMatchMode } from "primevue/api";
export default {
  name: "pet-list.component",
  data() {
    return {
      pets: [],
      petDialog: false,
      deletePetDialog: false,
      deletePetsDialog: false,
      pet: {},
      selectedpets: null,
      filters: {},
      submitted: false,
      statuses: [
        { label: "Castrado", value: "castrado" },
        { label: "No castrado", value: "no castrado" },
      ],
      petsService: null,
    };
  },

  created() {
    this.petsService = new PetApiService();
    this.petsService.getPet().then((response) => {
      this.pets = response.data;
      // console.log(this.pets);
      this.pets.forEach((pet) => this.getDisplayablePet(pet));
      // console.log(this.pets);
    });
    this.initFilters();
  },

  methods: {
    getDisplayablePet(pet) {
      pet.status = pet.castrado
        ? this.statuses[0].label
        : this.statuses[1].label;
      return pet;
    },
    getStorablePet(displayablePet) {
      return {
        id: displayablePet.id,
        name: displayablePet.name,
        description: displayablePet.description,
        castrado: displayablePet.castrado.value == "no castrado"? false : true,

      };
    },
    openNew() {
      this.pet = {};
      this.submitted = false;
      this.petDialog = true;
    },
    hideDialog() {
      this.petDialog = false;
      this.submitted = false;
    },
    findIndexById(id) {
      // console.log(`current id: ${id}`);
      return this.pets.findIndex((pet) => pet.id === id);
    },
    savePet() {
      this.submitted = true;
      if (this.pet.name.trim()) {
        if (this.pet.id) {
          // console.log(this.pet);
          this.pet = this.getStorablePet(this.pet);
          this.petsService.update(this.pet.id, this.pet).then((response) => {
            // console.log(response.data.id);
            this.pets[this.findIndexById(response.data.id)] =
              this.getDisplayablePet(response.data);
            this.$toast.add({
              severity: "success",
              summary: "Successful",
              detail: "Pet Updated",
              life: 3000,
            });
            // console.log(response);
          });
        } else {
          this.pet.id = 0;
          // console.log(this.pet);
          this.pet = this.getStorablePet(this.pet);
          this.petsService.create(this.pet).then((response) => {
            this.pet = this.getDisplayablePet(response.data);
            this.pets.push(this.pet);
            this.$toast.add({
              severity: "success",
              summary: "Successful",
              detail: "Pet Created",
              life: 3000,
            });
            // console.log(response);
          });
        }
        this.petDialog = false;
        this.pet = {};
      }
    },
    editPet(pet) {
      // console.log(pet);
      this.pet = { ...pet };
      // console.log(this.pet);
      this.petDialog = true;
      // console.log(this.petDialog);
    },
    confirmDeletePet(pet) {
      this.pet = pet;
      this.deletePetDialog = true;
    },
    deletePet() {
      this.petsService.delete(this.pet.id).then((response) => {
        this.pets = this.pets.filter((t) => t.id !== this.pet.id);
        this.deletePetDialog = false;
        this.pet = {};
        this.$toast.add({
          severity: "success",
          summary: "Successful",
          detail: "Pet Deleted",
          life: 3000,
        });
        // console.log(response);
      });
    },
    exportToCSV() {
      this.$refs.dt.exportCSV();
    },
    confirmDeleteSelected() {
      this.deletePetsDialog = true;
    },
    deleteSelectedPets() {
      this.selectedpets.forEach((pet) => {
        this.petsService.delete(pet.id).then((response) => {
          this.pets = this.pets.filter((t) => t.id !== pet.id);
          // console.log(response);
        });
      });
      this.deletePetsDialog = false;
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
  },
};
</script>

<style scoped></style>
