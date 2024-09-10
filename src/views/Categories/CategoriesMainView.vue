<template>
  <b-container>
    <b-row>
      <!-- CATEGORÍA DE MESAS -->
      <b-col cols="12">
        <b-card no-body>
          <template #header>
            <div class="d-flex justify-content-between align-items-center">
              <h5>Categoría de Mesas</h5>
              <b-button
                pill
                class="w-auto float-end"
                variant="primary"
                @click="toggleTableCategoryModal(true)"
              >
                <!-- @click="toggleCompanyModal(true)" -->
                +
              </b-button>
            </div>
          </template>
          <table-categories-table
            ref="table_categories_table"
            @editTableCategory="editTableCategory"
          />
        </b-card>
      </b-col>
      <!-- CATEGORÍA DE MENÚS -->
      <b-col cols="12" class="mt-3">
        <b-card no-body>
          <template #header>
            <div class="d-flex justify-content-between align-items-center">
              <h5>Categoría de Menús</h5>
              <b-button
                pill
                class="w-auto float-end"
                variant="primary"
                @click="toggleDailyMenuCategoryModal(true)"
              >
                <!-- @click="toggleCompanyModal(true)" -->
                +
              </b-button>
            </div>
          </template>
          <daily-menu-categories-table
            ref="daily_menu_categories_table"
            @editDailyMenuCategory="editDailyMenuCategory"
          />
        </b-card>
      </b-col>
      <!-- CATEGORÍA DE INSUMOS -->
      <b-col cols="12" class="mt-3">
        <b-card no-body>
          <template #header>
            <div class="d-flex justify-content-between align-items-center">
              <h5>Categoría de Insumos</h5>
              <b-button
                pill
                class="w-auto float-end"
                variant="primary"
                @click="toggleKitchenSuppliesCategoryModal(true)"
              >
                <!-- @click="toggleCompanyModal(true)" -->
                +
              </b-button>
            </div>
          </template>
          <kitchen-supplies-categories-table
            ref="kitchen_supplies_categories_table"
            @editKitchenSuppliesCategory="editKitchenSuppliesCategory"
          />
        </b-card>
      </b-col>
      <!-- CATEGORÍA DE PLATOS -->
      <b-col cols="12" class="mt-3">
        <b-card no-body>
          <template #header>
            <div class="d-flex justify-content-between align-items-center">
              <h5>Categoría de Platos</h5>
              <b-button
                pill
                class="w-auto float-end"
                variant="primary"
                @click="toggleFoodDishCategoryModal(true)"
              >
                +
              </b-button>
            </div>
          </template>
          <food-dish-categories-table
            ref="food_dish_categories_table"
            @editFoodDishCategory="editFoodDishCategory"
          />
        </b-card>
      </b-col>
    </b-row>
    <!-- <<< MODALS >>> -->
    <!-- <modal-company
    v-if="showCompanyModal"
    @hidden="toggleCompanyModal(false)"
    @saved="companySuccessfullySaved()"
    @edited="companySuccessfullySaved()"
    :isEdit="isEditCompany"
    :companyEdit="companyEdit"
    /> -->
    <modal-table-category
    v-if="showTableCategoryModal"
    @hidden="toggleTableCategoryModal(false)"
    @saved="tableCategorySuccessfullySaved()"
    @edited="tableCategorySuccessfullySaved()"
    :isEdit="isEditTableCategory"
    :tableCategoryEdit="tableCategoryEdit"
    />
    <modal-daily-menu-category
    v-if="showDailyMenuCategoryModal"
    @hidden="toggleDailyMenuCategoryModal(false)"
    @saved="dailyMenuCategorySuccessfullySaved()"
    @edited="dailyMenuCategorySuccessfullySaved()"
    :isEdit="isEditDailyMenuCategory"
    :dailyMenuCategoryEdit="dailyMenuCategoryEdit"
    />
    <modal-kitchen-supplies-category
    v-if="showKitchenSuppliesCategoryModal"
    @hidden="toggleKitchenSuppliesCategoryModal(false)"
    @saved="kitchenSuppliesCategorySuccessfullySaved()"
    @edited="kitchenSuppliesCategorySuccessfullySaved()"
    :isEdit="isEditKitchenSuppliesCategory"
    :kitchenSuppliesCategoryEdit="kitchenSuppliesCategoryEdit"
    />
    <modal-food-dish-category
    v-if="showFoodDishCategoryModal"
    @hidden="toggleFoodDishCategoryModal(false)"
    @saved="foodDishCategorySuccessfullySaved()"
    @edited="foodDishCategorySuccessfullySaved()"
    :isEdit="isEditFoodDishCategory"
    :foodDishCategoryEdit="foodDishCategoryEdit"
    />
  </b-container>
</template>

<script>
import TableCategoriesTable from "@/views/TableCategories/components/TableCategoriesTable.vue";
import ModalTableCategory from "@/views/TableCategories/components/ModalTableCategory.vue";
import DailyMenuCategoriesTable from "@/views/DailyMenuCategories/components/DailyMenuCategoriesTable.vue";
import ModalDailyMenuCategory from "@/views/DailyMenuCategories/components/ModalDailyMenuCategory.vue";
import KitchenSuppliesCategoriesTable from "@/views/KitchenSuppliesCategories/components/KitchenSuppliesCategoriesTable.vue";
import ModalKitchenSuppliesCategory from "@/views/KitchenSuppliesCategories/components/ModalKitchenSuppliesCategory.vue";
import FoodDishCategoriesTable from "@/views/FoodDishCategories/components/FoodDishCategoriesTable.vue";
import ModalFoodDishCategory from "@/views/FoodDishCategories/components/ModalFoodDishCategory.vue";
export default {
  components: {
    TableCategoriesTable,
    ModalTableCategory,
    ModalDailyMenuCategory,
    ModalKitchenSuppliesCategory,
    ModalFoodDishCategory,
    DailyMenuCategoriesTable,
    KitchenSuppliesCategoriesTable,
    FoodDishCategoriesTable,
  },
  data() {
    return {
      showTableCategoryModal: false,
      showDailyMenuCategoryModal: false,
      showKitchenSuppliesCategoryModal: false,
      showFoodDishCategoryModal: false,
      isEditTableCategory: false,
      tableCategoryEdit: {},
      isEditDailyMenuCategory: false,
      dailyMenuCategoryEdit: {},
      isEditKitchenSuppliesCategory: false,
      kitchenSuppliesCategoryEdit: {},
      isEditFoodDishCategory: false,
      foodDishCategoryEdit: {},
    };
  },
  methods: {
    tableCategorySuccessfullySaved() {
      this.showTableCategoryModal = false;
      this.refreshTableCategoryTable();
      this.isEditTableCategory = false;
      this.tableCategoryEdit = {};
    },
    refreshTableCategoryTable(){
      this.$refs.table_categories_table.$refs.table.refresh();
    },
    dailyMenuCategorySuccessfullySaved() {
      this.showDailyMenuCategoryModal = false;
      this.refreshDailyMenuCategoryTable();
      this.isEditDailyMenuCategory = false;
      this.dailyMenuCategoryEdit = {};
    },
    refreshDailyMenuCategoryTable(){
      this.$refs.daily_menu_categories_table.$refs.table.refresh();
    },
    kitchenSuppliesCategorySuccessfullySaved() {
      this.showKitchenSuppliesCategoryModal = false;
      this.refreshKitchenSuppliesCategoryTable();
      this.isEditKitchenSuppliesCategory = false;
      this.kitchenSuppliesCategoryEdit = {};
    },
    refreshKitchenSuppliesCategoryTable(){
      this.$refs.kitchen_supplies_categories_table.$refs.table.refresh();
    },
    foodDishCategorySuccessfullySaved() {
      this.showFoodDishCategoryModal = false;
      this.refreshFoodDishCategoryTable();
      this.isEditFoodDishCategory = false;
      this.foodDishCategoryEdit = {};
    },
    refreshFoodDishCategoryTable(){
      this.$refs.food_dish_categories_table.$refs.table.refresh();
    },
    toggleTableCategoryModal(value) {
      this.showTableCategoryModal = value;
      if (!value) {
        this.tableCategoryEdit = {};
        this.isEditTableCategory = false;
      }
    },
    toggleDailyMenuCategoryModal(value) {
      this.showDailyMenuCategoryModal = value;
      if (!value) {
        this.dailyMenuCategoryEdit = {};
        this.isEditDailyMenuCategory = false;
      }
    },
    toggleKitchenSuppliesCategoryModal(value) {
      this.showKitchenSuppliesCategoryModal = value;
      if (!value) {
        this.kitchenSuppliesCategoryEdit = {};
        this.isEditKitchenSuppliesCategory = false;
      }
    },
    toggleFoodDishCategoryModal(value) {
      this.showFoodDishCategoryModal = value;
      if (!value) {
        this.foodDishCategoryEdit = {};
        this.isEditFoodDishCategory = false;
      }
    },
    editTableCategory(table_category) {
      this.tableCategoryEdit = table_category;
      this.isEditTableCategory = true;
      this.showTableCategoryModal = true;
    },
    editDailyMenuCategory(menu_category) {
      this.dailyMenuCategoryEdit = menu_category;
      this.isEditDailyMenuCategory = true;
      this.showDailyMenuCategoryModal = true;
    },
    editKitchenSuppliesCategory(kitchen_supplies_category) {
      this.kitchenSuppliesCategoryEdit = kitchen_supplies_category;
      this.isEditKitchenSuppliesCategory = true;
      this.showKitchenSuppliesCategoryModal = true;
    },
    editFoodDishCategory(food_dish_category) {
      this.foodDishCategoryEdit = food_dish_category;
      this.isEditFoodDishCategory = true;
      this.showFoodDishCategoryModal = true;
    },
  },
};
</script>