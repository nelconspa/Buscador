<script>
    import MultiSelectInput from '../../components/MultiSelectInput';
    import TagInput from '../../components/TagInput'; 
    import TextInput from '../../components/TextInput'; 

    export default {
        name: 'createFicha',
        components: {
            MultiSelectInput,
            TagInput,
            TextInput
        },
        data() {
            return {
                template: this.$store.state.template.parameters
            }
        },
        mounted() {
            console.log(this.template);             
        }
    }
</script>

<template>
    <CCard>
        <CCardHeader>Nuevo Template</CCardHeader>
        <CCardBody>
            <CCardTitle>Ingreso de datos de template</CCardTitle>
            <!-- <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText> -->
            <CForm class="mt-4">
                <div v-for="parameter in template" :key="parameter.id" class="mb-3">
                    <div v-if="parameter.tipoparametro_id === 1">
                        <TextInput 
                            :parameter="parameter"
                        /> 
                    </div>
                    <div v-else-if="parameter.tipoparametro_id === 2 && parameter.tipodato_id === null">
                        <TagInput 
                            :parameter="parameter"
                        />
                    </div>
                    <div v-else-if="parameter.tipoparametro_id === 2 && parameter.tipodato_id !== null">
                        <MultiSelectInput 
                            :parameter="parameter"
                        />
                    </div>
                    
                </div>
            </CForm>

            
            <CButton color="dark">Guardar</CButton>
        </CCardBody>
    </CCard>
</template>

