<script>
    import axios from 'axios';
    export default {
        name: 'ListTemplates',
        data() {
            return {
                templates: []
            }
        },

        mounted() {
            this.getTemplates(); 
        },
        

        methods: {
            getStateStr(state) {
                let stateStr = state == 1 ? 'Activo' : 'Inactivo'; 
                return stateStr; 
            },

            shortDateFormat(date) {
                let originalDate = new Date(date); 
                let formatedDate = originalDate.toLocaleDateString();
                return formatedDate; 
                
            },
            useTemplate(template) {
                let selectedParameters = template.parametro;
                console.log(selectedParameters); 
                this.$store.commit("createTemplate", selectedParameters); 
                this.$router.push({ path: '/crear-ficha' });
            },

            editTemplate() {

            },
            async getTemplates() {
                try {
                    const response = await axios.get(
                        this.$store.state.backendUrl + '/template',
                        { 
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + this.$store.state.token,
                            }
                        }
                    );
                    
                    this.templates = response.data;
                    
                } catch (error) {
                    console.error('Error en la solicitud a la API:', error);
                    this.failMsg = 'Error al obtener templates.'; 
                    this.fail = true;
                }
            }
        }
    }
    
</script>

<template>
    <CRow>
        <CCol sm="4"  v-for="template in templates" :key="template.id">
        <CContainer>
            <CCard class="text-center">
                <CCardHeader> <b>{{ template.nombre }}</b></CCardHeader>
                <CCardBody>
                    <CListGroup flush class="mb-3">
                        <CListGroupItem>Código: {{ template.codigo }}</CListGroupItem>
                        <CListGroupItem>Estado: {{  getStateStr(template.estado) }}</CListGroupItem>
                    </CListGroup>
                    <CButton color="dark" class="mx-1" @click="useTemplate(template)">Usar</CButton>
                    <CButton color="primary" class="mx-1" @click="editTemplate(template)">Editar</CButton>
                </CCardBody>
                <CCardFooter class="text-body-secondary">Fecha de ingreso: <span class="badge bg-secondary">{{ shortDateFormat(template.fecha_ingreso) }}</span></CCardFooter>
            </CCard>
        </CContainer>
        </CCol>
    </CRow>
    
    
</template>