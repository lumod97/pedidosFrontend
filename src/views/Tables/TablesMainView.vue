<template>
  <!-- <b-container>
    <b-row> -->
  <div id="drag-area">
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
    <div
      class="draggable-item"
      v-for="(item, index) in items"
      :style="{ top: item.top + 'px', left: item.left + 'px' }"
      @mousedown="onMouseDown($event, item)"
      :key="index"
    >
      <b-img src="@/assets/table_icon.png" fluid alt="Fluid image" />
    </div>
  </div>
  <!-- </b-row>
  </b-container> -->
</template>
<script>
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
</script>

<style scoped>
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
</style>