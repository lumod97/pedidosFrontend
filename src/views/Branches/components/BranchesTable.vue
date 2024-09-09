<template>
    <b-table
    :fields="fields"
    ref="table"
    sticky-header
    :provider="myProvider"
    show-empty
    empty-text="No existen sucursales registradas aún."
    class="text-nowrap"
    responsive
    hover
  >
    <template #table-busy>
      <div style="height: 90px !important">
        <div class="pac-man" />
      </div>
    </template>

    <template #cell(actions)="data">
      <b-badge
        v-b-tooltip.hover.top="'Eliminar'"
        class="cursor-pointer"
        pill
        variant="danger"
        @click="deleteBranch(data.item.id)"
      >
        <i-bi-trash3 />
      </b-badge>
      <b-badge
        v-b-tooltip.hover.top="'Editar'"
        class="ms-2 cursor-pointer"
        pill
        variant="warning"
        @click="editBranch(data.item)"
      >
        <i-bi-pencil-square />
      </b-badge>
    </template>
  </b-table>
</template>

<script>
import { getBranches, deleteBranch } from "@/views/Branches/services/BranchesService.js";
export default {
  data() {
    return {
      fields: [
        // { key: "id", label: "ID" },
        { key: "company_name", label: "EMPRESA" },
        { key: "name", label: "NOMBRE" },
        { key: "address", label: "DIRECCIÓN" },
        { key: "district", label: "DISTRITO" },
        { key: "province", label: "PROVINCIA" },
        { key: "departament", label: "DEPARTAMENTO" },
        { key: "phone", label: "TELÉFONO" },
        { key: "email", label: "E-MAIL" },
        { key: "website", label: "WEB" },
        { key: "actions", label: "ACCIONES" },
      ],
    };
  },
  mounted() {},
  methods: {
    async myProvider() {
      try {
        const { data } = await getBranches();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    editBranch(branch) {
      this.$emit("editBranch", branch);
    },
    async deleteBranch(id_branch) {
      const params = {
        id_branch: id_branch,
      };
      try {
        const response = await deleteBranch(params);
        this.$refs.table.refresh();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>