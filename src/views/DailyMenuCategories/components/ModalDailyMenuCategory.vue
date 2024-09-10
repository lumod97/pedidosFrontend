<template>
  <b-modal hide-footer ref="daily_menu_category_modal" size="lg">
    {{ daily_menu_category }}
    <template #title> {{ isEdit ? "Editar" : "Nueva" }} Categoría de Menú Diario </template>
    <b-row>
      <b-col cols="6">
        <b-form-group label="Nombre">
          <b-form-input v-model="daily_menu_category.name"> </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label="Descripción">
          <b-form-input v-model="daily_menu_category.description"> </b-form-input>
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
          @click="isEdit ? editDailyMenuCategory() : saveDailyMenuCategory()"
        >
          {{ isEdit ? "Editar" : "Guardar" }}
        </b-button>
      </div>
    </b-row>
  </b-modal>
</template>

<script>
import { editDailyMenuCategory, insertDailyMenuCategory } from "@/views/DailyMenuCategories/services/DailyMenuCategoriesService";

export default {
  props: {
    showModal: false,
    isEdit: {
      type: Boolean,
      default: false,
    },
    dailyMenuCategoryEdit: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      daily_menu_category: {
        id: "",
        name: "",
        description: ""
      },
    };
  },
  mounted(){
    this.$refs.daily_menu_category_modal.show()
    if(this.isEdit){
      this.daily_menu_category.id = this.dailyMenuCategoryEdit.id
      this.daily_menu_category.name = this.dailyMenuCategoryEdit.name
      this.daily_menu_category.description = this.dailyMenuCategoryEdit.description
    }
  },
  methods: {
    closeModal() {
      this.$emit("hidden");
    },
    async saveDailyMenuCategory() {
      try {
        const data = await insertDailyMenuCategory(this.daily_menu_category);
        console.log(data);
        this.$emit("saved");
      } catch (error) {
        console.log(error);
      }
    },
    async editDailyMenuCategory() {
        try {
          const data = await editDailyMenuCategory(this.daily_menu_category);
          this.$emit("edited");
        } catch (error) {
          console.log(error);
        }
    },
  },
};
</script>