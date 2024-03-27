<script>
    export default {
        name: 'createFicha',
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
            <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
            <CForm>
                <div v-for="parameter in template" :key="parameter.id" class="mb-3">
                    <CFormLabel for="inputPassword5">{{ parameter.nombre }}</CFormLabel>
                    <CFormInput type="text" id="inputPassword5" />
                    <!-- <CFormText id="passwordHelpBlock">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not
                    contain spaces, special characters, or emoji.
                    </CFormText> -->
                </div>
            </CForm>

            
            <CButton href="#">Go somewhere</CButton>
        </CCardBody>
    </CCard>
</template>