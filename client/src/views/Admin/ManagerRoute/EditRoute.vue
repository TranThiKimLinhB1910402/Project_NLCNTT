<script>
import FormAddRoute from '../components/FormAddRoute.vue';
export default {
    components: {
        FormAddRoute
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
        <FormAddRoute :id="this._id" />

</template>