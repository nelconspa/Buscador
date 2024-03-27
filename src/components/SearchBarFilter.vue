<template>
    <div>
        <CFormInput @input="search" 
            placeholder="Filtrar por nombre de paramétro..." 
            aria-label="busquedaInput"
            label="Buscar"
        />
    </div>
</template>

<script setup>
    const emit = defineEmits(['search']); 
     
    const search = (e) => {
        emit('search', e.target.value);
    }  
</script>