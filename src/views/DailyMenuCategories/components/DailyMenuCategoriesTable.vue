<template>
    <b-table
    :fields="fields"
    ref="table"
    sticky-header
    :provider="myProvider"
    show-empty
    empty-text="No existen categorias de menús registradas aún."
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
        @click="deleteDailyMenuCategory(data.item.id)"
      >
        <i-bi-trash3 />
      </b-badge>
      <b-badge
        v-b-tooltip.hover.top="'Editar'"
        class="ms-2 cursor-pointer"
        pill
        variant="warning"
        @click="editDailyMenuCategory(data.item)"
      >
        <i-bi-pencil-square />
      </b-badge>
    </template>
  </b-table>
</template>

<script>
import {
  getDailyMenuCategories,
  deleteDailyMenuCategory,
} from "@/views/DailyMenuCategories/services/DailyMenuCategoriesService.js";

export default {
    data(){
        return{
            fields:[
            { key: "id", label: "ID" },
            { key: "name", label: "NOMBRE" },
            { key: "description", label: "DESCRIPCION" },
            { key: "number_of_daily_menus", label: "CANTIDAD DE MENÚS" },
            { key: "actions", label: "ACCIONES" },
            ]
        }
    },
    methods:{
      async myProvider(){
        const {data} = await getDailyMenuCategories()
        return data
      },
    async editDailyMenuCategory(table_category) {
      this.$emit("editDailyMenuCategory", table_category);
    },
    async deleteDailyMenuCategory(id_daily_menu_category) {
      try {
        const params = {
          id_daily_menu_category: id_daily_menu_category,
        }
        const response = await deleteDailyMenuCategory(params);
        this.$refs.table.refresh();
      } catch (error) {
        console.log(error);
      }
    },
    }
}
</script>