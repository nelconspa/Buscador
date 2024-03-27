<template>
    <CCard>
        <CCardBody>
            <SearchBarFilter @search="handleSearch" />
        </CCardBody>
    </CCard>
    <CRow>
        <CCol>
            
             
            <CCard class="mt-3">
                <CAlert color="danger" :visible="fail" dismissible @close="() => { fail = false }">
                    {{ failMsg }}
                </CAlert>
                <CCardHeader>
                    <CCardTitle class="d-flex justify-content-between align-items-center">
                        Lista de parámetros
                        <CButton 
                            color="dark"
                            class="custom-button"
                            @click="createParameter"
                        >
                            Crear parámetro
                        </CButton>
                    </CCardTitle>
                </CCardHeader>
                <CCardBody>
                    
                    <CListGroup flush class="">
                        <CListGroupItem 
                            v-for="parameter, index in filteredParameters" 
                            :key="parameter.id" 
                            class="d-flex justify-content-between align-items-center"
                        >
                            {{ parameter.nombre }}
                            <CButton 
                                @click="addParameter(parameter, index)"
                                color="primary" 
                                v-model="addButtons[index]"
                                v-bind:class="{ 'disabled': addButtons[parameter.id] }"
                            >
                                <CIcon :icon="icon.cilPlus" size="sm"/>
                            </CButton>
                        </CListGroupItem>
                    </CListGroup>
                    
                </CCardBody>
                
            </CCard>
        </CCol>
        <CCol >
            
            <CCard class="mt-3">
                <CAlert color="danger" :visible="fail" dismissible @close="() => { fail = false }">
                    {{ failMsg }}
                </CAlert>
                <CCardHeader >
                    <CCardTitle class="d-flex justify-content-between align-items-center">
                        Parámetros seleccionados
                        <CButton 
                            color="dark"
                            class="custom-button"
                            @click="createFicha"
                        >
                            Crear Ficha
                        </CButton>
                    </CCardTitle>
                    <!-- <div class="d-flex justify-content-end">
                        <CButton 
                            color="dark"
                            class="custom-button"
                        >
                            Crear Ficha
                        </CButton>
                    </div> -->
                </CCardHeader>
                <CCardBody>
                    <CListGroup flush>
                    <VueDraggable 
                        v-model="selectedParameters"
                        animation="150"
                        ghostClass="ghost"
                        
                    >
                        
                            <CListGroupItem 
                                v-for="parameter in selectedParameters" 
                                :key="parameter.id"
                                class="d-flex justify-content-between align-items-center"
                            >
                                {{ parameter.nombre }}
                                <CButton 
                                    @click="removeParameter(parameter)"
                                    color="danger" 
                                    variant="outline"

                                
                                ><CIcon :icon="icon.cilTrash" size="lg"/>
                                </CButton>
                            </CListGroupItem>
                        </VueDraggable>
                        </CListGroup>
                    
                    
                    
                    
                </CCardBody>
               
                
            </CCard>
        </CCol>
        
    </CRow>
    
    <AddParameterModal 
        :showModal="showModal"
        @closeAddParameterModal="onCloseAdd"
    />
    
    

  
    
</template>

<script>
    import axios from 'axios';
    import { CIcon } from '@coreui/icons-vue';
    import * as icon from '@coreui/icons';
    import SearchBarFilter from '../../components/SearchBarFilter.vue';
    import AddParameterModal from '../../components/AddParameterModal.vue'
    import { reactive } from 'vue';
    import { VueDraggable } from 'vue-draggable-plus';

    export default {
        name: 'ListParameters',
        components: {
            CIcon,
            SearchBarFilter,
            AddParameterModal,
            VueDraggable
        },
        data() {
            return {
                param: null,
                parameters: [],
                selectedParameters: [],
                addButtons: reactive({}),
                fail: false,
                failMsg: '',
                searchFilter: '',
                showModal: false,
            }
        },
        setup() {
            return {
                icon,
            }
        },
        mounted() {
            this.getParameters();
            
        },
        computed: {
            filteredParameters() {
                let filterParameters = this.parameters; 

                if (this.searchFilter !== '') {
                    filterParameters = filterParameters.filter(parameter => 
                        parameter.nombre.toLowerCase().includes(this.searchFilter.toLowerCase())
                    );
                }

                return filterParameters; 
            }

            
        },
        methods: {
            createFicha() {
                /* se guardan los parámetros de forma global con vuex 
                    es posible acceder a ellos desde distintas vistas.
                */ 
                this.$store.commit("createTemplate", this.selectedParameters); 
                this.$router.push({ path: '/crear-ficha' }); 
            },
            createParameter() {
                this.showModal = true; 
            },
            handleSearch(search) {
                this.searchFilter = search; 
            },
            addParameter(parameter, index) {
                this.selectedParameters.push(parameter);
                this.addButtons[parameter.id] = true; 
            },
            removeParameter(parameter) {
                this.selectedParameters =  this.selectedParameters.filter(param => param.id !== parameter.id);
                this.addButtons[parameter.id] = false; 
            },
            async getParameters() {
                try {
                    const response = await axios.get(
                        this.$store.state.backendUrl + '/parametro',
                        { 
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + this.$store.state.token,
                            }
                        }
                    );
                    
                    this.parameters = response.data;

                    // se realiza un relleno de false para validar que los botones se utilizaron
                    // un botón (true = > inhabilitado) por cada parámetro 
                    this.parameters.forEach(parameter => {
                        this.addButtons[parameter.id] = false;
                    });
                    
                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.failMsg = 'Error al obtener parámetros.'; 
                    this.fail = true;
                        
                        // this.errorMsg = "Ha ocurrido un error: " + error;
                }
            },
            onCloseAdd() {
                this.showModal = false; 
                this.getParameters();
            }
        }

        
    }
</script>