<template>
  <b-table
    :fields="fields"
    ref="table"
    sticky-header
    show-empty
    :provider="myProvider"
    empty-text="No existen categorias de insumos registradas aún."
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
        @click="deleteKitchenSuppliesCategory(data.item.id)"
      >
        <i-bi-trash3 />
      </b-badge>
      <b-badge
        v-b-tooltip.hover.top="'Editar'"
        class="ms-2 cursor-pointer"
        pill
        variant="warning"
        @click="editKitchenSuppliesCategory(data.item)"
      >
        <i-bi-pencil-square />
      </b-badge>
    </template>
  </b-table>
</template>

<script>
import {
  getKitchenSuppliesCategories,
  deleteKitchenSuppliesCategory,
} from "@/views/KitchenSuppliesCategories/services/KitchenSuppliesCategoriesService.js";
export default {
  data() {
    return {
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "NOMBRE" },
        { key: "description", label: "DESCRIPCION" },
        { key: "number_of_kitchen_supplies", label: "CANTIDAD DE INSUMOS" },
        { key: "actions", label: "ACCIONES" },
      ],
    };
  },
  methods: {
    async myProvider() {
      const { data } = await getKitchenSuppliesCategories();
      return data;
    },
    async editKitchenSuppliesCategory(kitchen_supplies_category) {
      this.$emit("editKitchenSuppliesCategory", kitchen_supplies_category);
    },
    async deleteKitchenSuppliesCategory(id_kitchen_supplies_category) {
      try {
        const params = {
          id_kitchen_supplies_category: id_kitchen_supplies_category,
        }
        const response = await deleteKitchenSuppliesCategory(params);
        this.$refs.table.refresh();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>