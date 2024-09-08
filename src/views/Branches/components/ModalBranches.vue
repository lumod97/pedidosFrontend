<template>
  <b-modal ref="branch_modal" size="lg" hide-footer>
    <template #title> {{ isEdit ? "Editar" : "Nueva" }} Sucursal </template>
    <b-row class="px-4">
      <b-col cols="6" class="mt-2">
        <b-form-group label="Empresa">
          <b-form-select
            v-model="branch.id_companies"
            :options="companiesOptions"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col cols="6" class="mt-2">
        <b-form-group label="Nombre">
          <b-form-input v-model="branch.name"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="12" class="mt-2">
        <b-form-group label="Direccion">
          <b-form-input v-model="branch.address"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="4" class="mt-2">
        <b-form-group label="Distrito">
          <b-form-input v-model="branch.district"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="4" class="mt-2">
        <b-form-group label="Provincia">
          <b-form-input v-model="branch.province"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="4" class="mt-2">
        <b-form-group label="Departamento">
          <b-form-input v-model="branch.departament"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="4" class="mt-2">
        <b-form-group label="Teléfono">
          <b-form-input v-model="branch.phone"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="4" class="mt-2">
        <b-form-group label="E-Mail">
          <b-form-input v-model="branch.email"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="4" class="mt-2">
        <b-form-group label="Web">
          <b-form-input v-model="branch.website"> </b-form-input>
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
          @click="isEdit ? editBranch() : saveBranch()"
        >
          {{ isEdit ? "Editar" : "Guardar" }}
        </b-button>
      </div>
    </b-row>
  </b-modal>
</template>

<script>
import { getCompaniesForSelect } from "@/views/Companies/services/CompaniesService.js";
import { insertBranch, editBranch } from "@/views/Branches/services/BranchesService.js";

export default {
  props: {
    showModal: false,
    isEdit: {
      type: Boolean,
      default: false,
    },
    branchEdit: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      branch: {
        id: "",
        id_companies: "",
        name: "",
        address: "",
        district: "",
        province: "",
        departament: "",
        phone: "",
        email: "",
        website: "",
      },
      companiesOptions: [],
    };
  },
  mounted() {
    this.$refs.branch_modal.show();
    this.getCompanies();
    if (this.isEdit) {
      this.branch.id = this.branchEdit.id;
      this.branch.id_companies = this.branchEdit.id_companies;
      this.branch.name = this.branchEdit.name;
      this.branch.address = this.branchEdit.address;
      this.branch.district = this.branchEdit.district;
      this.branch.province = this.branchEdit.province;
      this.branch.departament = this.branchEdit.departament;
      this.branch.phone = this.branchEdit.phone;
      this.branch.email = this.branchEdit.email;
      this.branch.website = this.branchEdit.website;
    }
  },
  methods: {
    closeModal() {
      this.$emit("hidden");
    },
    async getCompanies() {
      try {
        const params = [];
        const { data } = await getCompaniesForSelect(params);
        data.forEach((option) => {
          this.companiesOptions.push({
            value: option.id,
            text: option.name,
          });
        });
      } catch (error) {}
    },
    async saveBranch() {
      try {
        const data = await insertBranch(this.branch);
        console.log(data);
        this.$emit("saved");
      } catch (error) {
        console.log(error);
      }
    },
    async editBranch() {
      try {
        const data = await editBranch(this.branch);
        this.$emit("edited");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>