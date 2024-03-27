<template>
    <CModal :visible="showModal" @close="closeModal">
        <CModalHeader>
            <CModalTitle>Nuevo Parámetro</CModalTitle>
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
                    placeholder="Nombre parámetro"
                    aria-describedby="Inserte un nuevo parámetro"
                    @input="setTouched('nombre')"
                    v-model="form.nombre"
                    feedback="Rellene este campo por favor."
                    :invalid="v$.form.nombre.$error"
                    class="mt-1"
                    
                    
                />
                <label for="" class="mt-3">Código</label>
                <CFormInput
                    type="text"
                    placeholder="Código"
                    aria-describedby="Inserte código"
                    @input="setTouched('codigo')"
                    v-model="form.codigo"
                    feedback="Rellene este campo por favor."
                    :invalid="v$.form.codigo.$error"
                    class="mt-1"
                    
                />

                <label class="mt-3">Tipo de parámetro</label>
                <v-select
                            v-model="form.tipo_id"
                            :options="types"
                            :reduce="type => type.id"
                            placeholder="Seleccione..."
                            label="name"
                            @input="setTouched('tipo_id')"
                            feedback="Rellene este campo por favor."
                            :invalid="v$.form.tipo_id.$error"
                            class="mt-1"


                        >
                </v-select>
                
                
            </CForm>
        </CModalBody>
        <CModalFooter>
            <CButton color="secondary" @click="closeModal">
                Cerrar
            </CButton>
            <CButton color="primary" @click="saveClient">Guardar</CButton>
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
        },
        setup() {
            return { v$: useVuelidate() }
        },
        emits: ['closeAddParameterModal'],
        data() {
            return {
                form: {
                    nombre: '',
                    codigo: '',
                    tipo_id: null,
                    estado: 1

                },
                types: [
                    {
                        'id': 1,
                        'name': 'Campo Single'
                    },
                    {
                        'id': 2,
                        'name': 'Campo Multiple'
                    }
                ],
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
                    codigo: {
                        required
                    },
                    tipo_id: {
                        required
                    }
                }
            }
        },

        
        methods: {
            restoreInitialData() {
                this.fail = false;
                this.success = false; 
                this.failMsg = ''; 
                this.successMsg = '';
            },
            closeModal() {
                this.restoreInitialData(); 
                this.$emit('closeAddParameterModal'); 
                this.form.nombre = '';
                this.form.codigo = '',
                this.form.tipo_id = '';
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
                if(theModel == 'tipo_id' || theModel == 'all' ){
                    this.v$.form.tipo_id.$touch()
                }
                
            },
            
            async saveClient() {
                this.setTouched('all');
                if(!this.v$.$invalid) {
                    try {
                        const response = await axios.post(
                            this.$store.state.backendUrl + '/parametro',
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