<script>
import FormAddDriver from '../components/FormAddDriver.vue';
export default {
    components: {
        FormAddDriver
    },
    data(){
        const _id =  this.$route.params.id;
        return{
            _id
        }
    }
}
</script>
<template>
        <FormAddDriver :id="this._id" />

</template>