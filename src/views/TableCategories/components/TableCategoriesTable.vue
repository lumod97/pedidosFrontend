<template>
  <b-table
    :fields="fields"
    ref="table"
    :provider="myProvider"
    sticky-header
    show-empty
    empty-text="No existen categorias de mesas registradas aún."
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
        @click="deleteTableCategory(data.item.id)"
      >
        <i-bi-trash3 />
      </b-badge>
      <b-badge
        v-b-tooltip.hover.top="'Editar'"
        class="ms-2 cursor-pointer"
        pill
        variant="warning"
        @click="editTableCategory(data.item)"
      >
        <i-bi-pencil-square />
      </b-badge>
    </template>
  </b-table>
</template>

<script>
import {
  getTableCategories,
  deleteTableCategory,
} from "@/views/TableCategories/services/TableCategoriesService.js";
export default {
  data() {
    return {
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "NOMBRE" },
        { key: "description", label: "DESCRIPCION" },
        { key: "number_of_tables", label: "CANTIDAD DE MESAS" },
        { key: "actions", label: "ACCIONES" },
      ],
    };
  },
  methods: {
    async myProvider() {
      try {
        const { data } = await getTableCategories();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async editTableCategory(table_category) {
      this.$emit("editTableCategory", table_category);
    },
    async deleteTableCategory(id_table_category) {
      try {
        const params = {
          id_table_category: id_table_category,
        }
        const response = await deleteTableCategory(params);
        this.$refs.table.refresh();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>