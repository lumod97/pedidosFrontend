import axios from "../../../axios/axios.js"

const services = {
    async getCompanies(params){
        try {
            const $data = await axios.post('companies/get-companies', params)
            return $data
        } catch (error) {
            console.error('Error inserting branch:', error);
            throw error;
        }
    },
    async insertCompany(params){
        try {
            const $data = await axios.post('companies/insert-company', params)
            return $data
        } catch (error) {
            console.error('Error inserting company:', error);
            throw error;
        }
    },
    async deleteCompany(params){
        try {
            const $data = await axios.post('companies/delete-company', params)
            return $data
        } catch (error) {
            console.error('Error deleting company:', error);
            throw error;
        }
    },

    async getBranches(params){
        try {
            const $data = await axios.post('branches/get-branches', params)
            return $data
        } catch (error) {
            console.error('Error inserting branch:', error);
            throw error;
        }
    },
    async insertBranch(params){
        try {
            const $data = await axios.post('branches/insert-branch', params)
            return $data
        } catch (error) {
            console.error('Error inserting branch:', error);
            throw error;
        }
    }
}

export default services