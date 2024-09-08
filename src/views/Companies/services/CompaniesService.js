import axios from "../../../axios/axios.js";

// Exportaciones nombradas (individuales)
export async function getCompanies(params) {
    try {
        const $data = await axios.post('companies/get-companies', params)
        return $data
    } catch (error) {
        console.error('Error getting companies:', error);
        throw error;
    }
}

export async function getCompaniesForSelect(params) {
    try {
        const $data = await axios.post('companies/get-companies-for-select', params)
        return $data
    } catch (error) {
        console.error('Error getting companies for select:', error);
        throw error;
    }
}

export async function insertCompany(params) {
    try {
        const $data = await axios.post('companies/insert-company', params)
        return $data
    } catch (error) {
        console.error('Error inserting company:', error);
        throw error;
    }
}

export async function editCompany(params) {
    try {
        const $data = await axios.post('companies/edit-company', params)
        return $data
    } catch (error) {
        console.error('Error editing company:', error);
        throw error;
    }
}

export async function deleteCompany(params) {
    try {
        const $data = await axios.post('companies/delete-company', params)
        return $data
    } catch (error) {
        console.error('Error deleting company:', error);
        throw error;
    }
}

// Exportar por defecto un objeto que agrupe todas las funciones
const services = {
    getCompanies,
    getCompaniesForSelect,
    insertCompany,
    editCompany,
    deleteCompany
};

export default services;
