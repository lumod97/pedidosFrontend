import axios from "../../../axios/axios.js"


export async function getAttentionTables(params) {
    try {
        const $data = await axios.post('attention-tables/get-attention-tables', params)
        return $data
    } catch (error) {
        console.error('Error inserting attention-tables:', error);
        throw error;
    }
}

export async function insertAttentionTable(params) {
    try {
        const $data = await axios.post('attention-tables/insert-attention-table', params)
        return $data
    } catch (error) {
        console.error('Error inserting attention-tables:', error);
        throw error
    }
}

export async function editAttentionTable(params) {
    try {
        const $data = await axios.post('attention-tables/edit-attention-table', params)
        return $data
    } catch (error) {
        console.error('Error editing attention-tables:', error);
        throw error
    }
}

export async function deleteAttentionTable(params) {
    try {
        const $data = await axios.post('attention-tables/delete-attention-table', params)
        return $data
    } catch (error) {
        console.error('Error deleting attention-tables:', error);
        throw error
    }
}

const services = {
    getAttentionTables,
    insertAttentionTable,
    deleteAttentionTable,
    editAttentionTable
}

export default services