<template>
    <b-modal hide-footer ref="company_modal">
        <template #title>
            Nueva Empresa
        </template>
        <b-row>
            <b-col cols='6'>
                <b-form-group label='Nombre'>
                    <b-form-input v-model="company.name">

                    </b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols='6'>
                <b-form-group label='RUC'>
                    <b-form-input v-model="company.ruc">

                    </b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <!-- BUTTONS -->
        <b-row class="mt-4">
            <div class="d-flex justify-content-end">
                <b-button class="w-auto" variant='secondary' @click="closeModal()">
                    Cancelar
                </b-button>
                <b-button class="w-auto ms-2" variant='primary' @click="saveCompany()">
                    Guardar
                </b-button>
            </div>
        </b-row>
    </b-modal>
</template>

<script>
import CompaniesServices from '@/views/Companies/services/CompaniesService.js'

export default {
    props:{
        showModal: false,
    },
    data(){
        return{
            company: {
                name: '',
                ruc: ''
            }
        }
    },
    methods:{
        closeModal(){
            this.$emit('hidden')
        },
        async saveCompany(){
            try {
                const data = await CompaniesServices.insertCompany(this.company)
                console.log(data)
                this.$emit('saved')
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>