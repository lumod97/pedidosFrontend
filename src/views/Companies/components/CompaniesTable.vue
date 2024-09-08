<template>
  <b-table
    :fields="fields"
    ref="table"
    sticky-header
    :provider="myProvider"
    class="text-nowrap"
    show-empty
    empty-text="No existen compañías registradas aún."
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
        @click="deleteCompany(data.item.id)"
      >
        <i-bi-trash3 />
      </b-badge>
      <b-badge
        v-b-tooltip.hover.top="'Editar'"
        class="ms-2 cursor-pointer"
        pill
        variant="warning"
        @click="editCompany(data.item)"
      >
        <i-bi-pencil-square />
      </b-badge>
    </template>
  </b-table>
</template>

<script>
import {getCompanies, deleteCompany} from "@/views/Companies/services/CompaniesService.js";

export default {
  mounted() {},
  data() {
    return {
      isLoading: false,
      fields: [
        // { key: "id", label: "ID" },
        { key: "name", label: "NOMBRE" },
        { key: "ruc", label: "RUC" },
        // {key: 'created_by', label: 'CREADO POR'},
        { key: "created_at", label: "FECHA CREACIÓN" },
        { key: "actions", label: "ACCIONES" },
      ],
    };
  },
  methods: {
    async myProvider() {
      try {
        const { data } = await getCompanies();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    editCompany(company) {
      this.$emit("editCompany", company);
    },
    async deleteCompany(id_company) {
      const params = {
        id_company: id_company,
      };
      try {
        const response = await deleteCompany(params);
        this.$refs.table.refresh();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
/* LESS Vars */
@primaryClr: #fed75a; // Adjust this value to change the color
@pacman-zise: 70px;

.pac-man {
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 2em;
  border-radius: 100em 100em 0 0;
  background: #f00;
  transform-origin: bottom;
  animation: eating-top 0.5s infinite;

  &,
  &::before {
    width: @pacman-zise;
    height: calc(@pacman-zise / 2);
    background: @primaryClr;
  }

  &::before {
    content: "";
    display: block;
    margin-top: calc(@pacman-zise / 2);
    position: absolute;
    transform-origin: top;
    border-radius: 0 0 100em 100em;
    transform: rotate(80deg);
    animation: eating-bottom 0.5s infinite;
  }

  &::after {
    position: absolute;
    border-radius: 100em;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    margin-top: calc((@pacman-zise / 2) - 10px);
    margin-left: calc((@pacman-zise / 2) - 10px);
    transform-origin: center;
    animation: center 0.5s infinite, ball 0.5s -0.33s infinite linear;
  }
}

@keyframes eating-top {
  0% {
    transform: rotate(-40deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-40deg);
  }
}

@keyframes eating-bottom {
  0% {
    transform: rotate(80deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(80deg);
  }
}

@keyframes center {
  0% {
    transform: rotate(40deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(40deg);
  }
}

@keyframes ball {
  0% {
    opacity: 0.7;
    box-shadow: 70px 0 0 0 @primaryClr, 120px 0 0 0 @primaryClr,
      170px 0 0 0 @primaryClr, 220px 0 0 0 @primaryClr;
  }
  100% {
    box-shadow: 20px 0 0 0 @primaryClr, 70px 0 0 0 @primaryClr,
      120px 0 0 0 @primaryClr, 170px 0 0 0 @primaryClr;
  }
}
</style>