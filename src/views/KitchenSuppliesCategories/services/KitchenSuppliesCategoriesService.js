import axios from "../../../axios/axios.js"


export async function getKitchenSuppliesCategories(params) {
    try {
        const $data = await axios.post('kitchen-supplies-categories/get-kitchen-supplies-categories', params)
        return $data
    } catch (error) {
        console.error('Error inserting kitchen-supplies-category:', error);
        throw error;
    }
}

export async function insertKitchenSuppliesCategory(params) {
    try {
        const $data = await axios.post('kitchen-supplies-categories/insert-kitchen-supplies-category', params)
        return $data
    } catch (error) {
        console.error('Error inserting kitchen-supplies-category:', error);
        throw error;
    }
}

export async function editKitchenSuppliesCategory(params) {
    try {
        const $data = await axios.post('kitchen-supplies-categories/edit-kitchen-supplies-category', params)
        return $data
    } catch (error) {
        console.error('Error editing kitchen-supplies-category:', error);
        throw error;
    }
}

export async function deleteKitchenSuppliesCategory(params) {
    try {
        const $data = await axios.post('kitchen-supplies-categories/delete-kitchen-supplies-category', params)
        return $data
    } catch (error) {
        console.error('Error deleting kitchen-supplies-category:', error);
        throw error;
    }
}

const services = {
    getKitchenSuppliesCategories,
    insertKitchenSuppliesCategory,
    deleteKitchenSuppliesCategory,
    editKitchenSuppliesCategory
}

export default services