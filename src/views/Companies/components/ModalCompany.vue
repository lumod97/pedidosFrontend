<template>
  <b-modal hide-footer ref="company_modal" size="lg">
    <template #title> {{ isEdit ? "Editar" : "Nueva" }} Empresa </template>
    <b-row>
      <b-col cols="6">
        <b-form-group label="Nombre">
          <b-form-input v-model="company.name"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label="RUC">
          <b-form-input v-model="company.ruc"> </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <!-- BUTTONS -->
    <b-row class="mt-4">
      <div class="d-flex justify-content-end">
        <b-button class="w-auto" variant="secondary" @click="closeModal()">
          Cancelar
        </b-button>
        <b-button
          class="w-auto ms-2"
          variant="primary"
          @click="isEdit ? editCompany() : saveCompany()"
        >
          {{ isEdit ? "Editar" : "Guardar" }}
        </b-button>
      </div>
    </b-row>
  </b-modal>
</template>

<script>
import {insertCompany, editCompany} from "@/views/Companies/services/CompaniesService.js";

export default {
  props: {
    showModal: false,
    isEdit: {
      type: Boolean,
      default: false,
    },
    companyEdit: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      company: {
        id: "",
        name: "",
        ruc: "",
      },
    };
  },
  mounted(){
    this.$refs.company_modal.show()
    if(this.isEdit){
      this.company.id = this.companyEdit.id
      this.company.name = this.companyEdit.name
      this.company.ruc = this.companyEdit.ruc
    }
  },
  methods: {
    closeModal() {
      this.$emit("hidden");
    },
    async saveCompany() {
      try {
        const data = await insertCompany(this.company);
        console.log(data);
        this.$emit("saved");
      } catch (error) {
        console.log(error);
      }
    },
    async editCompany() {
        try {
          const data = await editCompany(this.company);
          this.$emit("edited");
        } catch (error) {
          console.log(error);
        }
    },
  },
};
</script>