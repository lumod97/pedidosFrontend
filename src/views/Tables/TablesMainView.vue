<!--  -->
<template>
  <div>
    <b-button
      pill
      class="w-auto float-end"
      variant="primary"
      @click="toggleAttentionTableModal(true)"
    >
      <!-- @click="toggleCompanyModal(true)" -->
      +
    </b-button>
    <b-table
      :fields="fields"
      ref="table"
      sticky-header
      show-empty
      :provider="myProvider"
      empty-text="Aún no ha registrado mesas en ninguna sucursal."
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
          @click="deleteAttentionTables(data.item.id)"
        >
          <i-bi-trash3 />
        </b-badge>
        <!-- {{data.item}} -->
        <b-badge
          v-b-tooltip.hover.top="'Editar'"
          class="ms-2 cursor-pointer"
          pill
          variant="warning"
          @click="editAttentionTable(data.item)"
        >
          <i-bi-pencil-square />
        </b-badge>
      </template>
    </b-table>
    <modal-attention-table v-if="showAttentionTableModal" :isEdit="isEditAttentionTable" :attentionTableEdit="attentionTableEdit" @hidden="showAttentionTableModal = false" @saved="attentionTableSuccessfullySaved()" @edited="attentionTableSuccessfullySaved()"/>
  </div>
</template>

<script>
import {
  getAttentionTables,
  deleteAttentionTable,
} from "@/views/Tables/services/AttentionTablesService.js";
import ModalAttentionTable from '@/views/Tables/components/ModalAttentionTable.vue'
export default {
  components: {
    ModalAttentionTable,
  },
  data() {
    return {
      fields: [
        { key: "id", label: "ID" },
        { key: "branch", label: "SUCURSAL" },
        { key: "table_category", label: "CATEGORÍA" },
        { key: "details", label: "DETALLES" },
        { key: "actions", label: "ACCIONES" },
      ],
      showAttentionTableModal: false,
      isEditAttentionTable: false,
      attentionTableEdit: {},
    };
  },
  methods: {
    async myProvider() {
      const { data } = await getAttentionTables();
      return data;
    },
    attentionTableSuccessfullySaved() {
      this.showAttentionTableModal = false;
      this.refreshAttentionTableTable();
      this.isEditAttentionTable = false;
      this.attentionTableEdit = {};
    },
    refreshAttentionTableTable(){
      this.$refs.table.refresh()
    },
    toggleAttentionTableModal(value){
      this.showAttentionTableModal = value
    },
    editAttentionTable(attention_table) {
      // this.$emit("editAttentionTable", attention_table);
      this.attentionTableEdit = attention_table
      this.isEditAttentionTable = true
      this.showAttentionTableModal = true
    },
    async deleteAttentionTable(id_attention_table) {
      try {
        const params = {
          id_attention_table: id_attention_table,
        };
        const response = await deleteAttentionTable(params);
        this.$refs.table.refresh();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
  <!-- <b-container>
    <b-row> -->
  <!-- <div id="drag-area"> -->
    <!-- <div
          v-for="(item, index) in items"
          :key="index"
          class="draggable-item"
          :style="{ top: item.top + 'px', left: item.left + 'px' }"
          @mousedown="onMouseDown($event, item)"
        >
          {{ item.name }}
        </div> -->
    <!-- :src="https://picsum.photos/300/150/?image=41" -->

    <!-- <img
    class="img-fluid img-logo-navbar"
    sm="d-none"
    alt=""
    src="@/assets/logo.svg"
    /> -->
    <!-- <div
      class="draggable-item"
      v-for="(item, index) in items"
      :style="{ top: item.top + 'px', left: item.left + 'px' }"
      @mousedown="onMouseDown($event, item)"
      :key="index"
    >
      <b-img src="@/assets/table_icon.png" fluid alt="Fluid image" />
    </div> -->
  <!-- </div> -->
  <!-- </b-row>
  </b-container> -->
<!-- </template> -->
<!-- <script>
export default {
  data() {
    return {
      items: [
        { name: "Item 1", top: 20, left: 20 },
        { name: "Item 2", top: 100, left: 100 },
      ],
      selectedElement: null,
      offsetX: 0,
      offsetY: 0,
    };
  },
  methods: {
    onMouseDown(event, item) {
      this.selectedElement = item;
      this.offsetX = event.clientX - item.left;
      this.offsetY = event.clientY - item.top;
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    },
    onMouseMove(event) {
      if (this.selectedElement) {
        this.selectedElement.left = event.clientX - this.offsetX;
        this.selectedElement.top = event.clientY - this.offsetY;
      }
    },
    onMouseUp() {
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
      this.selectedElement = null;
    },
  },
};
</script> -->

<!-- <style scoped>
#drag-area {
  width: 60vw;
  height: 85vh;
  border: 2px solid #333;
  position: relative;
  overflow: hidden;
}

.draggable-item {
  width: 100px;
  height: 100px;
  /* background-color: #f1c40f; */
  position: absolute;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.draggable-item > img {
  width: 85px;
  height: 85px;
  /* background-color: #f1c40f; */
    /* position: absolute;
    cursor: grab;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none; */
}

.draggable-item:hover {
  width: 100px;
  height: 100px;
  background-color: #0fb5f1;
  /* padding: 10px; */
  border-radius: 50px;
}
</style> -->