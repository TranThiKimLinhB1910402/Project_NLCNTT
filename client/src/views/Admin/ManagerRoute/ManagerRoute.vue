<script>
import RouteService from '@/services/route.service';
export default {
    
    data() {
        return {
            routes: []
        }
    },
    methods: {
        async getAll() {
            try {
                this.routes = await RouteService.getAll();
            } catch (error) {
                console.log(error)
            }
        },
        
        async deleteRoute(id, name){
            if(confirm(`Bạn muốn xóa lộ trình đến ${name}`)){
                try{
                    await RouteService.delete(id);
                    window.location.replace("/admin/manager-route");
                } catch(error){
                    console.log(error)
                }
            }
        }
    },
    mounted() {
        this.getAll();
    }
}
</script>
<template>
    <div class="container">
        <div class="row p-3 mt-3">
            <div class="col">
            </div>
            <div class="col">
                <router-link :to="{ name: 'add-route' }" class="btn btn-add">
                    <i class="fa-solid fa-plus me-1"></i>
                    Thêm lộ trình
                </router-link>
                <div class="btn m-2 btn-excel">
                    <i class="fa-solid fa-file-csv me-2"></i>
                    Xuất file Excel
                </div>
                <div class="btn btn-pdf">
                    <i class="fa-solid fa-file-pdf me-2"></i>
                    Xuất file PDF
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container p-4">
                <table class="table table-hover" style="border-radius: 5px;">
                    <thead>
                        <tr>
                            <th>Nơi đến</th>
                            <th>Khoảng cách (kilometer)</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr v-for="route in routes">
                            <td>{{ route.noi_den }}</td>
                            <td>{{ route.so_km }}</td>
                            <td>
                                <router-link :to="{ name: 'edit-route', params:{id: route._id} }">
                                    <i class="fa-regular fa-pen-to-square fs-4 text-primary me-2"></i>
                                </router-link>
                                <i @click="deleteRoute(route._id, route.noi_den)" class="fa-solid fa-trash-can fs-4 text-danger"></i>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>

    </div>

</template>