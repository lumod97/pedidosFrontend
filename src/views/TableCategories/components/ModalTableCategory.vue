<template>
  <b-modal hide-footer ref="table_category_modal" size="lg">
    {{ table_category }}
    <template #title> {{ isEdit ? "Editar" : "Nueva" }} Categoría de Mesa </template>
    <b-row>
      <b-col cols="6">
        <b-form-group label="Nombre">
          <b-form-input v-model="table_category.name"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label="Descripción">
          <b-form-input v-model="table_category.description"> </b-form-input>
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
          @click="isEdit ? editTableCategory() : saveTableCategory()"
        >
          {{ isEdit ? "Editar" : "Guardar" }}
        </b-button>
      </div>
    </b-row>
  </b-modal>
</template>

<script>
import { editTableCategory, insertTableCategory } from "@/views/TableCategories/services/TableCategoriesService";

export default {
  props: {
    showModal: false,
    isEdit: {
      type: Boolean,
      default: false,
    },
    tableCategoryEdit: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      table_category: {
        id: "",
        name: "",
        description: ""
      },
    };
  },
  mounted(){
    this.$refs.table_category_modal.show()
    if(this.isEdit){
      this.table_category.id = this.tableCategoryEdit.id
      this.table_category.name = this.tableCategoryEdit.name
      this.table_category.description = this.tableCategoryEdit.description
    }
  },
  methods: {
    closeModal() {
      this.$emit("hidden");
    },
    async saveTableCategory() {
      try {
        const data = await insertTableCategory(this.table_category);
        console.log(data);
        this.$emit("saved");
      } catch (error) {
        console.log(error);
      }
    },
    async editTableCategory() {
        try {
          const data = await editTableCategory(this.table_category);
          this.$emit("edited");
        } catch (error) {
          console.log(error);
        }
    },
  },
};
</script>