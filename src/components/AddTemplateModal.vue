<template>
    <CModal :visible="showModal" @close="closeModal">
        <CModalHeader>
            <CModalTitle>Nuevo Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CAlert color="success"
                :visible="success">
                {{ successMsg }}
            </CAlert>

            <CForm>
                <label for="">Nombre</label>
                <CFormInput
                    type="text"
                    placeholder="Nombre Template"
                    aria-describedby=""
                    @input="setTouched('nombre')"
                    v-model="form.nombre"
                    feedback="Rellene este campo por favor."
                    :invalid="v$.form.nombre.$error"
                    class="mt-1"
                />
                <label for="" class="mt-3">Código</label>
                <CFormInput
                    type="text"
                    placeholder="Código template"
                    aria-describedby=""
                    @input="setTouched('codigo')"
                    v-model="form.codigo"
                    feedback="Rellene este campo por favor."
                    :invalid="v$.form.codigo.$error"
                    class="mt-1"
                />
            </CForm>

            <CTable class="mt-3">
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Código</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Tipo de Parámetro</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow v-for="parameter in selectedParameters" :key="parameter.id">
                        <CTableDataCell>{{ parameter.nombre }}</CTableDataCell>
                        <CTableDataCell class="text-center">{{ parameter.codigo }}</CTableDataCell>
                        <CTableDataCell class="text-center">  {{ setParameterType(parameter.tipoparametro_id) }}</CTableDataCell>
                    </CTableRow>
                    
                </CTableBody>
            </CTable>
        </CModalBody>
        <CModalFooter>
            <CButton color="primary" @click="saveTemplate">Guardar</CButton>
            <CButton color="secondary" @click="closeModal">
                Cerrar
            </CButton>
            
        </CModalFooter>
    </CModal>
</template>

<script>
    import axios from 'axios';
    import useVuelidate from '@vuelidate/core'
    import { required } from '@vuelidate/validators'
    export default {
        name: 'AddClient',
        props: {
            showModal: Boolean,
            selectedParameters: Array,
        },
        setup() {
            return { v$: useVuelidate() }
        },
        emits: ['closeAddTemplateModal'],
        data() {
            return {
                form: {
                    nombre: '',
                    codigo: '',
                    tipo: '1',
                    fecha_ingreso: '2024-03-20 11:16:20',
                    estado: 1,
                    parametros: []
                },
                success: false,
                fail: false,
                successMsg: '',
                failMsg: '',
                
            }
        },
        validations() {
            return {
                form: {
                    nombre:{
                        required
                    },
                    codigo:{
                        required
                    },
                }
            }
        },
        watch: {
            selectedParameters: {
                handler(newConfig) {
                    this.setDataParameters(newConfig);
                },
                deep: true,
                immediate: true // Esto llama a setDataConfig() inmediatamente después de montar el componente
            },
           
            showModal(newValue) {
                // Si la modal se cierra, restablecer el valor de showModal
                if (!newValue) {
                    this.$emit('update:showModal', false);
                }
            }
        },

        
        methods: {
            setParameterType(type) { 
                return type == 1 ? 'Single' : 'Multiple'; 
            },
            restoreInitialData() {
                this.fail = false;
                this.success = false; 
                this.failMsg = ''; 
                this.successMsg = '';
            },
            closeModal() {
                this.restoreInitialData(); 
                this.$emit('closeAddTemplateModal'); 
                this.form.nombre = '';
                this.form.codigo = '';
                this.v$.$reset();
            },

            closeModalOutside(event) {
                if (event.target === event.currentTarget) {
                    this.closeModal();
                }
            },

            setTouched(theModel) { 
                if(theModel == 'nombre' || theModel == 'all' ){
                    this.v$.form.nombre.$touch()
                }
                if(theModel == 'codigo' || theModel == 'all' ){
                    this.v$.form.codigo.$touch()
                }
                
            },

            setDataParameters(newConfig) {
                if(newConfig) {
                    console.log("Config desde setDataParameters: ", newConfig); 
                }
            },
            
            async saveTemplate() {
                // se da formato a parametros para enviarse solo id y prioridad según API
                this.form.parametros = this.selectedParameters.map(
                    ({ id, prioridad }) => ({ id, prioridad })
                ); 

                this.setTouched('all');
                if(!this.v$.$invalid) {
                    try {
                        const response = await axios.post(
                            this.$store.state.backendUrl + '/template',
                            this.form,
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: 'Bearer ' + this.$store.state.token,
                                }
                            }
                        )
                        console.log(response); 
                        this.successMsg = 'Parametro creado exitósamente.'; 
                        this.success = true; 
                        setTimeout(() => {
                            this.closeModal(); 
                        }, 2000);

                    } catch (error) {
                        if (error.response) {
                            const errors = error.response.data.errors; 
                            for (const key in errors) {
                                if (errors.hasOwnProperty(key)) {
                                    const errMsg = errors[key];
                                    this.failMsg = this.failMsg.concat(errMsg, "\n");  
                                    this.fail = true; 

                                    setTimeout(() => {
                                        this.restoreInitialData();
                                    //    this.closeModal(); 
                                    }, 2000);
                                    
                                }
                            }
                        }
                    } 
                    

                }
                    
            }
        }

    }
    
</script>