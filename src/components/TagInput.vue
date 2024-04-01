<script>
    import TagInput from '@mayank1513/vue-tag-input'
    import '@mayank1513/vue-tag-input/style.css'
    export default {
        name: 'TagInputDataType', 
        components: {
            TagInput
        },
        props: {
            parameter: Object
        },
        data(){
            return {
                tagsInputs: []
            }
        },

        mounted() {
        },

        methods: {
            
        }
    }
    
</script>

<template>
    <div>
        <label> TagInput {{ parameter.nombre }}</label>
        <tag-input v-model="tagsInputs" />
    </div>
</template>