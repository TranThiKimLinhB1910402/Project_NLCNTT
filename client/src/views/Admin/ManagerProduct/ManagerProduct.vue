<script>
import CarService from '@/services/car.service';
export default {
    
    data() {
        return {
            cars: []
        }
    },
    methods: {
        async getAll() {
            try {
                this.cars = await CarService.getAll();
            } catch (error) {
                console.log(error)
            }
        },
        
        async deleteCar(id, name){
            if(confirm(`Bạn muốn xóa sản phẩm ${name}`)){
                try{
                    await CarService.delete(id);
                    window.location.replace("/admin/manager-product");
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
                <!-- <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="p-2 bd-highlight">Flex item 1</div>
                    <div class="p-2 bd-highlight">Flex item 2</div>
                    <div class="p-2 bd-highlight">Flex item 3</div>
                </div> -->
            </div>
            <div class="col">
                <router-link :to="{ name: 'add-product' }" class="btn btn-add">
                    <i class="fa-solid fa-plus me-1"></i>
                    Thêm sản phẩm
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
                            <th>Biển số</th>
                            <th>Tên xe</th>
                            <th>Hãng xe</th>
                            <th>Số chổ</th>
                            <th>Loại máy</th>
                            <th>Màu xe</th>
                            <th>Thời gian đăng kiểm</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr v-for="car in cars">
                            <td>{{ car.bien_so }}</td>
                            <td>{{ car.ten_xe }}</td>
                            <td>{{ car.ten_hang }}</td>
                            <td>{{ car.so_cho }}</td>
                            <td>{{ car.loai_may }}</td>
                            <td>{{ car.mau_xe }}</td>
                            <td>{{ car.tg_dang_kiem }}</td>
                            <td>
                                <router-link :to="{ name: 'edit-product', params:{id: car._id} }">
                                    <i class="fa-regular fa-pen-to-square fs-4 text-primary me-2"></i>
                                </router-link>
                                <i @click="deleteCar(car._id, car.ten_xe)" class="fa-solid fa-trash-can fs-4 text-danger"></i>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>

    </div>

</template>