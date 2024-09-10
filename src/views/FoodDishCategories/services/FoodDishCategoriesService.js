import axios from "../../../axios/axios.js"


export async function getFoodDishCategories(params) {
    try {
        const $data = await axios.post('food-dish-categories/get-food-dish-categories', params)
        return $data
    } catch (error) {
        console.error('Error inserting food-dish-category:', error);
        throw error;
    }
}

export async function insertFoodDishCategory(params) {
    try {
        const $data = await axios.post('food-dish-categories/insert-food-dish-category', params)
        return $data
    } catch (error) {
        console.error('Error inserting food-dish-category:', error);
        throw error;
    }
}

export async function editFoodDishCategory(params) {
    try {
        const $data = await axios.post('food-dish-categories/edit-food-dish-category', params)
        return $data
    } catch (error) {
        console.error('Error editing food-dish-category:', error);
        throw error;
    }
}

export async function deleteFoodDishCategory(params) {
    try {
        const $data = await axios.post('food-dish-categories/delete-food-dish-category', params)
        return $data
    } catch (error) {
        console.error('Error deleting food-dish-category:', error);
        throw error;
    }
}

const services = {
    getFoodDishCategories,
    insertFoodDishCategory,
    deleteFoodDishCategory,
    editFoodDishCategory
}

export default services