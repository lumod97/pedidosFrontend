<template>
  <b-modal hide-footer ref="food_dish_category_modal" size="lg">
    {{ food_dish_category }}
    <template #title> {{ isEdit ? "Editar" : "Nueva" }} Categoría de Platos </template>
    <b-row>
      <b-col cols="6">
        <b-form-group label="Nombre">
          <b-form-input v-model="food_dish_category.name"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label="Descripción">
          <b-form-input v-model="food_dish_category.description"> </b-form-input>
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
          @click="isEdit ? editFoodDishCategory() : savedFoodDishCategory()"
        >
          {{ isEdit ? "Editar" : "Guardar" }}
        </b-button>
      </div>
    </b-row>
  </b-modal>
</template>

<script>
import { editFoodDishCategory, insertFoodDishCategory } from "@/views/FoodDishCategories/services/FoodDishCategoriesService";

export default {
  props: {
    showModal: false,
    isEdit: {
      type: Boolean,
      default: false,
    },
    foodDishCategoryEdit: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      food_dish_category: {
        id: "",
        name: "",
        description: ""
      },
    };
  },
  mounted(){
    this.$refs.food_dish_category_modal.show()
    if(this.isEdit){
      this.food_dish_category.id = this.foodDishCategoryEdit.id
      this.food_dish_category.name = this.foodDishCategoryEdit.name
      this.food_dish_category.description = this.foodDishCategoryEdit.description
    }
  },
  methods: {
    closeModal() {
      this.$emit("hidden");
    },
    async savedFoodDishCategory() {
      try {
        const data = await insertFoodDishCategory(this.food_dish_category);
        console.log(data);
        this.$emit("saved");
      } catch (error) {
        console.log(error);
      }
    },
    async editFoodDishCategory() {
        try {
          const data = await editFoodDishCategory(this.food_dish_category);
          this.$emit("edited");
        } catch (error) {
          console.log(error);
        }
    },
  },
};
</script>