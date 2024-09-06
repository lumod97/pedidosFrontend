<template>
    <b-modal size='lg' hide-footer>
        <template #title>
            Nueva Sucursal
        </template>
        <b-row class="px-4">
            {{branch}}
            <b-col cols='6' class="mt-2">
                <b-form-group label='Empresa'>
                    <b-form-select v-model="branch.id_companies" :options="[
                        {value: '1', text: 'Empresa 1'},
                        {value: '2', text: 'Empresa 2'},
                        {value: '3', text: 'Empresa 3'},
                    ]">

                    </b-form-select>
                </b-form-group>
            </b-col>
            <b-col cols='6' class="mt-2">
                <b-form-group label='Nombre'>
                    <b-form-input v-model="branch.name">

                    </b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols='12' class="mt-2">
                <b-form-group label='Direccion'>
                    <b-form-input v-model="branch.address">

                    </b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols='4' class="mt-2">
                <b-form-group label='Distrito'>
                    <b-form-input v-model="branch.district">

                    </b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols='4' class="mt-2">
                <b-form-group label='Provincia'>
                    <b-form-input v-model="branch.province">

                    </b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols='4' class="mt-2">
                <b-form-group label='Departamento'>
                    <b-form-input v-model="branch.departament">

                    </b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols='4' class="mt-2">
                <b-form-group label='Teléfono'>
                    <b-form-input v-model="branch.phone">

                    </b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols='4' class="mt-2">
                <b-form-group label='E-Mail'>
                    <b-form-input v-model="branch.email">

                    </b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols='4' class="mt-2">
                <b-form-group label='Web'>
                    <b-form-input v-model="branch.website">

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
                <b-button class="w-auto ms-2" variant='primary' @click="saveBranch()">
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
            companySelected: '',
            branch: {
                id_companies: '',
                name: '',
                address: '',
                district: '',
                province: '',
                departament: '',
                phone: '',
                email: '',
                website: '',
            }
        }
    },
    methods:{
        closeModal(){
            this.$emit('hidden')
        },
        async saveBranch(){
            try {
                const data = await CompaniesServices.insertBranch(this.branch)
                console.log(data)
                this.$emit('saved')
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>