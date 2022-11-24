<script>
 import FormAddDriver from '../components/FormAddDriver.vue';
 import DriverService from '@/services/driver.service';
 export default{
    components:{
        FormAddDriver,
        DriverService
    },
    data(){
        return{
            driver: {
                _id: "",
                full_name: "",
                address: "",
                email: "",
                phone: ""
                },
                message:""
            };
    },
    methods:{
        async AddDriver(data){
                try{
                    await DriverService.create(data);
                    alert("Thêm thành công");
                    window.location.replace("/admin/manager-driver");
                } catch(error){
                    console.log(error);
                }
            }
    }
 }

</script>
<template>
    <FormAddDriver :driver="driver" @submit:driver="AddDriver"/>
    {{message}}
</template>