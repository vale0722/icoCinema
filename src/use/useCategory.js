import { categoriesService, categoryService } from '../services/categoryService';
import { ref } from "vue";

const categories = ref({});
const category = ref({})


const saveOneCategory = (id) => localStorage.setItem(`activeCategory`, id);

const refreshCategories = async (force) => {
    if (!categories.value || force) categories.value = await categoryService.all();
}

const storeErrors = ref([]);

const storeCategories = async (attributes) => {
    try {
        await categoriesService.create(attributes);
        storeErrors.value = [];
        await refreshCategories(true);
    } catch (error) {
        error.response.data.errors.errors.forEach(data => {
            storeErrors.value[data.param] = 'El valor ingresado es invalido';
        });
    }
}

export default function useCategories() {
    return {
        category,
        categories,
        refreshCategories,
        saveOneCategory,
        storeCategories,
        storeErrors
    }
}