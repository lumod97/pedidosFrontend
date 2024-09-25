import axios from "../../../axios/axios.js"


export async function getBranches(params) {
    try {
        const $data = await axios.post('branches/get-branches', params)
        return $data
    } catch (error) {
        console.error('Error inserting branch:', error);
        throw error;
    }
}

export async function getBranchesForSelect(params) {
    try {
        const $data = await axios.post('branches/get-branches-for-select', params)
        return $data
    } catch (error) {
        console.error('Error getting branches for select:', error);
        throw error;
    }
}

export async function insertBranch(params) {
    try {
        const $data = await axios.post('branches/insert-branch', params)
        return $data
    } catch (error) {
        console.error('Error inserting branch:', error);
        throw error;
    }
}

export async function editBranch(params) {
    try {
        const $data = await axios.post('branches/edit-branch', params)
        return $data
    } catch (error) {
        console.error('Error editing branch:', error);
        throw error;
    }
}

export async function deleteBranch(params) {
    try {
        const $data = await axios.post('branches/delete-branch', params)
        return $data
    } catch (error) {
        console.error('Error deleting branch:', error);
        throw error;
    }
}

const services = {
    getBranches,
    getBranchesForSelect,
    insertBranch,
    deleteBranch,
    editBranch
}

export default services