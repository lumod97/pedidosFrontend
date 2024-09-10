<template>
    <b-table
    :fields="fields"
    ref="table"
    sticky-header
    show-empty
    :provider="myProvider"
    empty-text="No existen categorias de platos registradas aún."
    class="text-nowrap"
    responsive
    hover
    >
    <template #table-busy> Cargando... </template>

    <template #cell(actions)="data">
      <b-badge
        v-b-tooltip.hover.top="'Eliminar'"
        class="cursor-pointer"
        pill
        variant="danger"
        @click="deleteFoodDishCategory(data.item.id)"
      >
        <i-bi-trash3 />
      </b-badge>
      <b-badge
        v-b-tooltip.hover.top="'Editar'"
        class="ms-2 cursor-pointer"
        pill
        variant="warning"
        @click="editFoodDishCategory(data.item)"
      >
        <i-bi-pencil-square />
      </b-badge>
    </template>
  </b-table>
</template>

<script>
import {
  getFoodDishCategories,
  deleteFoodDishCategory,
} from "@/views/FoodDishCategories/services/FoodDishCategoriesService.js";
export default {
    data(){
        return{
            fields:[
            { key: "id", label: "ID" },
            { key: "name", label: "NOMBRE" },
            { key: "description", label: "DESCRIPCION" },
            { key: "number_of_food_dishes", label: "CANTIDAD DE PLATOS" },
            { key: "actions", label: "ACCIONES" },
            ]
        }
    },
    methods:{
      async myProvider(){
        const {data} = await getFoodDishCategories()
        return data
      },
      async editFoodDishCategory(food_dish_category) {
      this.$emit("editFoodDishCategory", food_dish_category);
    },
    async deleteFoodDishCategory(id_food_dish_category) {
      try {
        const params = {
          id_food_dish_category: id_food_dish_category,
        }
        const response = await deleteFoodDishCategory(params);
        this.$refs.table.refresh();
      } catch (error) {
        console.log(error);
      }
    },
    }
}
</script>