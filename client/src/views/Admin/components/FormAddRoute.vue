<script>
import routeService from '../../../services/route.service';
export default {
    props: {
        id: { type: String }
    },
    data() {
        return {
            route: {}
        };
    },
    methods: {
        async get(){
            try{
                if(this.id){
                    this.route = await routeService.getRoute(this.id);
                }
                else this.route = {}
                
            } catch(error){
                console.log(error);
            }

        },
        async AddRoute() {
            try {
                await routeService.createRoute(this.route);
                alert("Thêm thành công");
                this.$router.push({ name: "manager-route" })
            } catch (error) {
                console.log(error);
            }
        },
        async UpdateRoute(){
            try{
                this.route = await routeService.update(this.route._id,this.route);
                alert("Cập nhật thành công");
                this.$router.push({ name: "manager-route" })
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
                Thêm lộ trình
            </div>
            <div class="card-body p-5">
                <div class="mb-3">
                    <label for="noi_den" class="form-label">Nơi đến</label>
                    <input type="text" v-model="this.route.noi_den" class="form-control" id="noi_den" required>
                </div>
                <div class="mb-3">
                    <label for="so_km" class="form-label">Số km</label>
                    <input type="text" v-model="this.route.so_km" class="form-control" id="so_km" required>
                </div>
                <div class=" mt-4">
                    <button v-if="this.route._id != null" @click="this.UpdateRoute()" class="btn btn-order">Cập nhật</button>
                    <button v-else @click="this.AddRoute()" class="btn btn-order">Thêm</button>
                </div>
            </div>

        </div>
    </div>

</template>