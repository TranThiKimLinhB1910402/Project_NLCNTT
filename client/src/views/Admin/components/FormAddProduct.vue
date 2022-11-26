<script>
import * as yup from "yup";
import CarService from '@/services/car.service';
export default {
    props:{
        id: {type: String}
    },
    data() {
        // const formCar = yup.object().shape({
        //         ten_xe: yup.string(),
        //         bien_so: yup.string(),
        //         nam_sx: yup.string(),
        //         so_cho: yup.string(),
        //         loai_may: yup.string(),
        //         gia_thue_ngay: yup.string(),
        //         mau_xe: yup.string(),
        //         tg_dang_kiem: yup.string(),
        //         favorite: false,
        //         ten_hang: yup.string(),
        //         hinh_anh: yup.string()
        // });
        return {
            car: {}
        };

    },
    methods: {
        changeFile(e) {
            const file = e.target.files[0];
            this.selectedFile = file;
        },
        buildFormData(formData, data, parentKey) {
            if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
                Object.keys(data).forEach(key => {
                    this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
                });
            } else {
                const value = data == null ? '' : data;
                formData.append(parentKey, value);
            }
        },
        async getCar() {
            try {
                if(this.id){
                 this.car = await CarService.get(this.id);
                }
                else this.car = {};
               
            }
            catch (error) {
                console.log(error);
            }
        },
        async handleUpdate() {
            console.log(1234567);
            try{
            var formData = new FormData();
            formData.append('file', this.selectedFile);
            this.buildFormData(formData, this.car)
            await CarService.update(this.car._id, formData);
            alert("Cập nhật thành công");
            } catch(error){
                console.log(error)
            }
            
        },
        async handleAdd() {
            try {
                var formData = new FormData();
                formData.append('file', this.selectedFile);
                this.buildFormData(formData, this.car)
                await CarService.create(formData);
                alert("Thêm thành công");
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.getCar();
    }
}

</script>
<template>
    <div class="container py-5 g-5">
        <div class="card form-register-car">
            <div class="card-header">
                Thêm sản phẩm
            </div>
            <div class="card-body p-5">
                <div class="row py-2">
                    <div class="col">
                        <label for="bien_so" class="form-label">Biển số xe</label>
                        <input type="text" v-model="this.car.bien_so" class="form-control" id="bien_so" required>
                    </div>
                    <div class="col">
                        <label for="ten_xe" class="form-label">Tên xe</label>
                        <input type="text" v-model="this.car.ten_xe" class="form-control" id="ten_xe" required>
                    </div>
                    <div class="col">
                        <label for="nam_sx" class="form-label">Năm sản xuất</label>
                        <input type="text" v-model="this.car.nam_sx" class="form-control" id="nam_sx" required>
                    </div>
                </div>
                <div class="row py-4">
                    <div class="col">
                        <label for="ten_hang" class="form-label">Hãng xe</label>
                        <input type="text" v-model="this.car.ten_hang" class="form-control" id="ten_hang" required>
                    </div>
                    <div class="col">
                        <label for="mau_xe" class="form-label">Màu xe</label>
                        <input type="text" v-model="this.car.mau_xe" class="form-control" id="mau_xe" required>
                    </div>
                    <div class="col">
                        <label for="loai_may" class="form-label">Loại máy</label>
                        <input type="text" v-model="this.car.loai_may" class="form-control" id="loai_may" required>
                    </div>
                    <div class="col">
                        <label for="so_cho" class="form-label">Số chổ</label>
                        <input type="text" v-model="this.car.so_cho" class="form-control" id="so_cho" required>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col">

                        <label for="tg_dang_kiem" class="form-label">Thời gian đăng kiểm</label>
                        <input type="date" v-model="this.car.tg_dang_kiem" class="form-control" id="tg_dang_kiem"
                            required>
                    </div>
                    <div class="col">
                        <label for="gia_thue_ngay" class="form-label">Giá thuê theo ngày</label>
                        <input type="number" v-model="this.car.gia_thue_ngay" class="form-control" id="gia_thue_ngay"
                            required>
                    </div>
                    <div class="col">
                        <label for="gia_thue_km" class="form-label">Giá thuê theo km</label>
                        <input type="number" v-model="this.car.gia_thue_theo_km" class="form-control" id="gia_thue_km"
                            required>
                    </div>
                    <div class="col">
                        <label for="hinh_anh" class="form-label">Hình ảnh</label>
                        <input type="file"  @change="this.changeFile" class="form-control" id="hinh_anh" />
                    </div>
                </div>
                <div class="col-12 mt-4">
                    <button v-if="this.car._id != null" @click="this.handleUpdate()" class="btn btn-order">Cập nhật</button>
                    <button v-else class="btn btn-order" @click="this.handleAdd()">Thêm</button>
                </div>
            </div>
                
        </div>
    </div>

</template>