<template>
  <b-container fluid>
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col cols="6">
          <b-card no-body class="h-100">
            <template #header>
              <div class="d-flex justify-content-between align-items-center">
                <h5>Empresas</h5>
                <b-button
                  pill
                  class="w-auto float-end"
                  variant="primary"
                  @click="toggleCompanyModal(true)"
                >
                  +
                </b-button>
              </div>
            </template>
            <companies-table ref="companies_table" @editCompany="editCompany" />
          </b-card>
        </b-col>
        <b-col cols="6">
          <b-card no-body class="h-100">
            <template #header>
              <div class="d-flex justify-content-between align-items-center">
                <h5>Sucursales</h5>
                <b-button
                  pill
                  class="w-auto float-end"
                  variant="primary"
                  @click="toggleBranchesModal(true)"
                >
                  +
                </b-button>
              </div>
            </template>
            <branches-table ref="branches_table" @editBranch="editBranch"/>
            <!-- <companies-table ref="companies_table" @editCompany="editCompany" /> -->
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <modal-company
      v-if="showCompanyModal"
      @hidden="toggleCompanyModal(false)"
      @saved="companySuccessfullySaved()"
      @edited="companySuccessfullySaved()"
      :isEdit="isEditCompany"
      :companyEdit="companyEdit"
      />
      <modal-branches
      v-if="showBranchesModal"
      @hidden="toggleBranchesModal(false)"
      @saved="branchSuccessfullySaved()"
      @edited="branchSuccessfullySaved()"
      :isEdit="isEditBranch"
      :branchEdit="branchEdit"
    />
  </b-container>
</template>
<script>
import CompaniesTable from "@/views/Companies/components/CompaniesTable.vue";
import BranchesTable from "@/views/Branches/components/BranchesTable.vue";
import ModalCompany from "@/views/Companies/components/ModalCompany.vue";
import ModalBranches from "@/views/Branches/components/ModalBranches.vue";
export default {
  components: {
    CompaniesTable,
    BranchesTable,
    ModalCompany,
    ModalBranches,
  },
  mounted() {},
  data() {
    return {
      showCompanyModal: false,
      showBranchesModal: false,
      isEditCompany: false,
      companyEdit: {},
      isEditBranch: false,
      branchEdit: {},
    };
  },
  methods: {
    // COMPANIES METHODS
    toggleCompanyModal(value) {
      this.showCompanyModal = value;
      if(!value){
        this.companyEdit = {}
        this.isEditCompany = false;
      }
    },
    editCompany(company) {
      this.companyEdit = company;
      this.isEditCompany = true;
      this.showCompanyModal = true;
    },
    companySuccessfullySaved() {
      this.showCompanyModal = false;
      this.refreshCompaniesTable();
      this.isEditCompany = false;
      this.companyEdit = {}
    },
    refreshCompaniesTable() {
      this.$refs.companies_table.$refs.table.refresh();
    },
    // BRANCHES METHODS
    toggleBranchesModal(value) {
      this.showBranchesModal = value;
      if(!value){
        this.branchEdit = {}
        this.isEditBranch = false;
      }
    },
    editBranch(branch) {
      this.branchEdit = branch;
      this.isEditBranch = true;
      this.showBranchesModal = true;
    },
    branchSuccessfullySaved() {
      this.showBranchesModal = false;
      this.refreshBranchesTable();
      this.isEditBranch = false;
      this.branchEdit = {}
    },
    refreshBranchesTable() {
      this.$refs.branches_table.$refs.table.refresh();
    },
  },
};
</script>