<script>
    import axios from 'axios';

    export default {
        name: 'MultiSelectInput',
        props: {
            parameter: Object
        },
        
        data() {
            return {
                fail: false,
                failMsg: '',
                selectedOptions: [],
                option_id: null
            }
        },
        mounted() {
            this.selectedOptions = this.parameter.tipo_dato.tipo_dato_contenido; 
             
        },
        methods: {
            
        }
    }
</script>

<template>
    <div>
        <label class="mt-3">Multiselect {{ parameter.nombre }}</label>
        <v-select
            v-model="option_id"
            placeholder="Seleccione..."
            :options="selectedOptions"
            :reduce="dataType => dataType.id"
            label="nombre"
            multiple

        >
        </v-select>
        <CAlert color="danger" :visible="fail" dismissible @close="() => { fail = false }">
                    {{ failMsg }}
        </CAlert>
    </div>
</template>