<script>
import CarService from '@/services/car.service';
import FormAddCar from '../components/FormAddProduct.vue';
export default {
    components: {
        FormAddCar
    },
    data(){
        const _id =  this.$route.params.id;
        return{
            _id
        }
    }
    // props: {
    //     id: { type: String }
    // },
    // data() {
    //     return {
    //         car: null,
    //         edit: 1
    //     }
    // },
    // methods: {
    //     async getCar(id) {
    //         try {
    //             this.car = await CarService.get(id)
    //         }
    //         catch (error) {
    //             console.log(error);
    //         }
    //     },
    //     async updateCar(data) {
    //         try {
    //             await CarService.update(this.car._id, data);
    //             window.location.replace("/admin/manager-product");
                
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // },
    // created() {
    //     this.getCar(this.id)
    // }
}
</script>
<template>
        <FormAddCar :id="this._id" />

</template>