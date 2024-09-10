import axios from "../../../axios/axios.js"


export async function getDailyMenuCategories(params) {
    try {
        const $data = await axios.post('daily-menu-categories/get-daily-menu-categories', params)
        return $data
    } catch (error) {
        console.error('Error inserting daily-menu-category:', error);
        throw error;
    }
}

export async function insertDailyMenuCategory(params) {
    try {
        const $data = await axios.post('daily-menu-categories/insert-daily-menu-category', params)
        return $data
    } catch (error) {
        console.error('Error inserting daily-menu-category:', error);
        throw error;
    }
}

export async function editDailyMenuCategory(params) {
    try {
        const $data = await axios.post('daily-menu-categories/edit-daily-menu-category', params)
        return $data
    } catch (error) {
        console.error('Error editing daily-menu-category:', error);
        throw error;
    }
}

export async function deleteDailyMenuCategory(params) {
    try {
        const $data = await axios.post('daily-menu-categories/delete-daily-menu-category', params)
        return $data
    } catch (error) {
        console.error('Error deleting daily-menu-category:', error);
        throw error;
    }
}

const services = {
    getDailyMenuCategories,
    insertDailyMenuCategory,
    deleteDailyMenuCategory,
    editDailyMenuCategory
}

export default services