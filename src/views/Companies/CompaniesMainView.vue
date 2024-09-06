<template>
  <b-container fluid>
    <b-card>
      <b-row>
        <b-col cols="6">
          <b-card no-body>
            <template #header>
              <div class="d-flex justify-content-between align-items-center">
                <h5>Empresas</h5>
                <b-button pill class="w-auto float-end" variant="primary" @click="toggleCompanyModal(true)">
                  +
                </b-button>
              </div>
            </template>
            <companies-table ref='companies_table'/>
          </b-card>
        </b-col>
        <b-col cols="6">
          <b-card no-body>
            <template #header>
              <div class="d-flex justify-content-between align-items-center">
                <h5>Sucursales</h5>
                <b-button pill class="w-auto float-end" variant="primary" @click="toggleBranchesModal(true)">
                  +
                </b-button>
              </div>
            </template>
            <branches-table />
          </b-card>
        </b-col>
      </b-row>
    </b-card>
    <modal-company v-model="showCompanyModal" @hidden='toggleCompanyModal(false)' @saved='companySuccessfullySaved()'/>
    <modal-branches v-model="showBranchesModal" @hidden='toggleBranchesModal(false)' @saved='branchSuccessfullySaved()'/>
  </b-container>
</template>
<script>
import CompaniesTable from "@/views/Companies/components/CompaniesTable.vue";
import BranchesTable from "@/views/Companies/components/BranchesTable.vue";
import ModalCompany from "@/views/Companies/components/ModalCompany.vue";
import ModalBranches from "@/views/Companies/components/ModalBranches.vue";
export default {
  components: {
      CompaniesTable,
    BranchesTable,
    ModalCompany,
    ModalBranches,
  },
  mounted(){
      
      },
  data(){
    return{
        showCompanyModal: false,
        showBranchesModal: false,
    }
  },
  methods:{
    toggleCompanyModal(value){
        this.showCompanyModal = value
    },
    toggleBranchesModal(value){
        this.showBranchesModal = value
    },
    companySuccessfullySaved(){
        this.showCompanyModal = false
        this.refreshCompaniesTable()
    },
    refreshCompaniesTable(){
        this.$refs.companies_table.$refs.table.refresh()
    },
    branchSuccessfullySaved(){
        this.showBranchesModal = false
        this.refreshBranchesTable()
    },
    refreshBranchesTable(){
    },
  }
};
</script>