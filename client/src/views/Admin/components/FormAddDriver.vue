<script>
import driverService from '../../../services/driver.service';
export default {
    props: {
        id: { type: String }
    },
    data() {
        return {
            driver: {}
        };
    },
    methods: {
        async get(){
            try{
                if(this.id){
                    this.driver = await driverService.getDriver(this.id);
                }
                else this.driver = {}
                
            } catch(error){
                console.log(error);
            }

        },
        async AddDriver() {
            try {
                await driverService.createDriver(this.driver);
                alert("Thêm thành công");
                this.$router.push({ name: "manager-driver" })
            } catch (error) {
                console.log(error);
            }
        },
        async UpdateDriver(){
            try{
                this.driver = await driverService.update(this.driver._id,this.driver);
                alert("Cập nhật thành công");
                this.$router.push({ name: "manager-driver" })
            }
            catch(error){
                console.log(error);
            }
        }
    },
    created(){
        this.get()
    }
}

</script>
<template>
    <div class="container py-5 g-5">
        <div class="card form-register-car w-75">
            <div class="card-header">
                Thêm tài xế
            </div>
            <div class="card-body p-5">
                <div class="mb-3">
                    <label for="bien_so" class="form-label">Họ tên</label>
                    <input type="text" v-model="this.driver.full_name" class="form-control" id="full_name" required>
                </div>
                <div class="mb-3">
                    <label for="ten_xe" class="form-label">Địa chỉ</label>
                    <input type="text" v-model="this.driver.address" class="form-control" id="address" required>
                </div>
                <div class="mb-3">
                    <label for="nam_sx" class="form-label">Email</label>
                    <input type="text" v-model="this.driver.email" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                    <label for="nam_sx" class="form-label">Số điện thoại</label>
                    <input type="text" v-model="this.driver.phone" class="form-control" id="phone" required>
                </div>
                <div class=" mt-4">
                    <button v-if="this.driver._id != null" @click="this.UpdateDriver()" class="btn btn-order">Cập nhật</button>
                    <button v-else @click="this.AddDriver()" class="btn btn-order">Thêm</button>
                </div>
            </div>

        </div>
    </div>

</template>