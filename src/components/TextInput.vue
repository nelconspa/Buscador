<script>
    export default {
        name: 'TextInput', 
        props: {
            parameter: Object
        }
    }
    
</script>

<template>
    <div>
        <label>TextInput {{ parameter.nombre }}</label>
        <CFormInput
            placeholder="Complete este campo..."
        ></CFormInput>    
    </div>
</template>