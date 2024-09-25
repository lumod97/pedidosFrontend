<template>
  <b-modal hide-footer ref="attention_table_modal" size="lg">
    <!-- {{ attention_table }} -->
    <template #title>
      {{ isEdit ? "Editar" : "Nueva" }} Mesa de Atención
    </template>
    <b-row>
      <b-col cols="6">
        <b-form-group label="Sucursal">
          <b-form-select
            v-model="attention_table.id_branches"
            :options="branchesOptions"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label="Categoria de Mesa">
          <b-form-select
            v-model="attention_table.id_table_categories"
            :options="tableCategoriesOptions"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group label="Descripción">
          <b-form-input v-model="attention_table.details"> </b-form-input>
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
          @click="isEdit ? editAttentionTable() : saveAttentionTable()"
        >
          {{ isEdit ? "Editar" : "Guardar" }}
        </b-button>
      </div>
    </b-row>
  </b-modal>
</template>

<script>
import { editAttentionTable, insertAttentionTable } from "@/views/Tables/services/AttentionTablesService.js";
import { getBranchesForSelect } from "@/views/Branches/services/BranchesService.js";
import { getTableCategoriesForSelect } from "@/views/TableCategories/services/TableCategoriesService.js";

export default {
  props: {
    showModal: false,
    isEdit: {
      type: Boolean,
      default: false,
    },
    attentionTableEdit: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      attention_table: {
        id: "",
        id_branch: "",
        id_table_category: "",
        description: "",
      },
      branchesOptions: [],
      tableCategoriesOptions: [],
    };
  },
  mounted() {
    this.$refs.attention_table_modal.show();
    if (this.isEdit) {
      this.attention_table.id = this.attentionTableEdit.id;
      this.attention_table.id_branches = this.attentionTableEdit.id_branches;
      this.attention_table.id_table_categories = this.attentionTableEdit.id_table_categories;
      this.attention_table.details = this.attentionTableEdit.details;
    }
    this.getBranches()
    this.getTableCategories()
  },
  methods: {
    closeModal() {
      this.$emit("hidden");
    },
    async getBranches() {
      try {
        const params = [];
        const { data } = await getBranchesForSelect(params);
        data.forEach((option) => {
          this.branchesOptions.push({
            value: option.id,
            text: option.name,
          });
        });
      } catch (error) {}
    },
    async getTableCategories() {
      try {
        const params = [];
        const { data } = await getTableCategoriesForSelect(params);
        data.forEach((option) => {
          this.tableCategoriesOptions.push({
            value: option.id,
            text: option.name,
          });
        });
      } catch (error) {}
    },
    async saveAttentionTable() {
      console.log('fino')
      try {
        const data = await insertAttentionTable(this.attention_table);
        console.log(data);
        this.$emit("saved");
      } catch (error) {
        console.log(error);
      }
    },
    async editAttentionTable() {
      try {
        const data = await editAttentionTable(this.attention_table);
        this.$emit("edited");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>