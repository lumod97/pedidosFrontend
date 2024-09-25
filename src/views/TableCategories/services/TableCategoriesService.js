import axios from "../../../axios/axios.js"


export async function getTableCategories(params) {
    try {
        const $data = await axios.post('table-categories/get-table-categories', params)
        return $data
    } catch (error) {
        console.error('Error inserting table-categories:', error);
        throw error;
    }
}

export async function getTableCategoriesForSelect(params) {
    try {
        const $data = await axios.post('table-categories/get-table-categories-for-select', params)
        return $data
    } catch (error) {
        console.error('Error getting table-categories for select:', error);
        throw error;
    }
}

export async function insertTableCategory(params) {
    try {
        const $data = await axios.post('table-categories/insert-table-category', params)
        return $data
    } catch (error) {
        console.error('Error inserting table-categories:', error);
        throw error
    }
}

export async function editTableCategory(params) {
    try {
        const $data = await axios.post('table-categories/edit-table-category', params)
        return $data
    } catch (error) {
        console.error('Error editing table-categories:', error);
        throw error
    }
}

export async function deleteTableCategory(params) {
    try {
        const $data = await axios.post('table-categories/delete-table-category', params)
        return $data
    } catch (error) {
        console.error('Error deleting table-categories:', error);
        throw error
    }
}

const services = {
    getTableCategories,
    getTableCategoriesForSelect,
    insertTableCategory,
    deleteTableCategory,
    editTableCategory
}

export default services