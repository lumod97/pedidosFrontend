<template>
  <b-modal hide-footer ref="modal_kitchen_supplies_category_modal" size="lg">
    {{ modal_kitchen_supplies_category }}
    <template #title> {{ isEdit ? "Editar" : "Nueva" }} Categoría de Insumos de Cocina </template>
    <b-row>
      <b-col cols="6">
        <b-form-group label="Nombre">
          <b-form-input v-model="modal_kitchen_supplies_category.name"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label="Descripción">
          <b-form-input v-model="modal_kitchen_supplies_category.description"> </b-form-input>
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
          @click="isEdit ? editKitchenSuppliesCategory() : saveKitchenSuppliesCategory()"
        >
          {{ isEdit ? "Editar" : "Guardar" }}
        </b-button>
      </div>
    </b-row>
  </b-modal>
</template>

<script>
import { editKitchenSuppliesCategory, insertKitchenSuppliesCategory } from "@/views/KitchenSuppliesCategories/services/KitchenSuppliesCategoriesService";

export default {
  props: {
    showModal: false,
    isEdit: {
      type: Boolean,
      default: false,
    },
    kitchenSuppliesCategoryEdit: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      modal_kitchen_supplies_category: {
        id: "",
        name: "",
        description: ""
      },
    };
  },
  mounted(){
    this.$refs.modal_kitchen_supplies_category_modal.show()
    if(this.isEdit){
      this.modal_kitchen_supplies_category.id = this.kitchenSuppliesCategoryEdit.id
      this.modal_kitchen_supplies_category.name = this.kitchenSuppliesCategoryEdit.name
      this.modal_kitchen_supplies_category.description = this.kitchenSuppliesCategoryEdit.description
    }
  },
  methods: {
    closeModal() {
      this.$emit("hidden");
    },
    async saveKitchenSuppliesCategory() {
      try {
        const data = await insertKitchenSuppliesCategory(this.modal_kitchen_supplies_category);
        console.log(data);
        this.$emit("saved");
      } catch (error) {
        console.log(error);
      }
    },
    async editKitchenSuppliesCategory() {
        try {
          const data = await editKitchenSuppliesCategory(this.modal_kitchen_supplies_category);
          this.$emit("edited");
        } catch (error) {
          console.log(error);
        }
    },
  },
};
</script>