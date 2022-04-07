import { defineStore } from "pinia";
import { categoriesService } from "../services/categoryService";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    category: {},
    categories: {},
    storeErrors: [],
  }),
  actions: {
    setCategoryActive(category) {
      this.category = category;
    },
    async refreshCategories(force) {
      if (!this.categories.length || force) {
        this.categories = await categoriesService.all();
      }

      return this.categories;
    },
    async storeCategory(attributes) {
      try {
        await categoriesService.create(attributes);
        this.storeErrors = [];
      } catch (error) {
        error.response.data.errors.errors.forEach((data) => {
          this.storeErrors[data.param] = "El valor ingresado es invalido";
        });
      }
    },
    async updateCategory(category, attributes) {
      try {
        await categoriesService.update(category.id, attributes);
        this.storeErrors = [];
      } catch (error) {
        error.response.data.errors.errors.forEach((data) => {
          this.storeErrors[data.param] = "El valor ingresado es invalido";
        });
      }
    },
    async deleteCategory(category) {
      try {
        await categoriesService.delete(category.id);
        this.storeErrors = [];
      } catch (error) {
        this.storeErrors = ["Ha ocurrido un error al eliminar la categoria"];
      }
    },
  },
});
