<script>
import rentService from '../services/rent.service';
export default {
    data() {
        return {
            value: null,
            rents: [
                {
                    sdt: ""
                }
            ],
            state: 0
        }
    },
    methods: {
        async findByPhone(phone) {
            try {
                this.rents = await rentService.findByPhone(phone);
                this.state = 1;
                console.log(this.value);
                 console.log(this.rents);
                // for(var i =0; i<= this.rents.length; i++){
                    // if(this.rents[i].sdt == this.value){
                    //     console.log(this.rents[i].sdt);
                    // }
                   
               // }
                
            } catch (error) {
                console.log(error);
            }
        }
    },
    // mounted() {
    //     this.findByPhone();
    // }
}
</script>
<template>
    <div class="container py-5">
        <div class="row banner-info">
            <div class="d-flex justify-content-between">
                <h4>VUI LÒNG ĐIỀN SỐ ĐIỆN THOẠI VÀO THANH TÌM KIẾM</h4>
            <div class="input-group mb-3 w-50">
                <input type="text" v-model="this.value" class="form-control" placeholder="Recipient's username"
                    aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-primary" @click="findByPhone(this.value)" type="button"
                    id="button-addon2">Tìm kiếm</button>
            </div>
            </div>
        </div>
        <div class="row py-5" v-if="this.state == 1">
                <table class="table table-hover" style="border-radius: 5px;" >
                    <thead>
                        <tr>
                            <th>Khách hàng</th>
                            <th>Số điện thoại</th>
                            <th>Trạng thái</th>
                            <th>Thời gian nhận</th>
                            <th>Thời gian trả</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="rent in rents">
                            <td>{{ rent.hoten }}</td>
                            <td>{{ rent.sdt }}</td>
                            <td v-if="rent.status == 0">
                                <span class="badge rounded-pill bg-warning text-dark">Đang xử
                                    lý</span>
                            </td>
                            <td v-else-if="rent.status == 1">
                                <span class="badge rounded-pill bg-success text-white">Đã xác nhận</span>
                            </td>
                            <td v-else>
                                <span class="badge rounded-pill bg-danger text-white">Đã hủy</span>
                            </td>
                            <td>{{ rent.ngaynhan }}</td>
                            <td>{{ rent.ngaytra }}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        <!-- <div class="col col-md-5">
            <div class="card card-p">
                <div class="card-body">
                    <h4>CAM KẾT DỊCH VỤ</h4>
                    <ul>
                        <li>
                            Giá thuê xe luôn cạnh tranh, tốt nhất thị trường Cần Thơ
                        </li>
                        <li>
                            Toàn bộ xe tại AutoCar đều là xe đời mới.
                        </li>
                        <li>
                            Xe luôn được kiểm tra kĩ thuật kỹ càng trước khi lên đường.
                        </li>
                        <li>
                            Xe luôn có mặt đúng giờ hẹn của khách hàng
                        </li>
                        <li>
                            Lái xe vui vẻ thân thiện luôn phục vụ hài lòng quý khách
                        </li>
                        <li>
                            Chúng tôi cam kết đem lại chất lượng dịch vụ cho thuê xe tốt nhất tới khách hàng.
                        </li>
                    </ul>
                </div>
            </div>
        </div> -->

    </div>
</template>
<style lang="scss">
.banner-info {
    h4 {
        border: 2px dashed var(--danger-color) !important;
        width: 45%;
        padding-left: 2%;
        padding: 1%;
    }
}
</style>