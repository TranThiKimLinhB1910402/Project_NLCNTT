<script>
import rentService from '../services/rent.service';
export default {
    data() {
        return {
            rent: {
                car: {},
                loaixe: {
                    so_cho: 0,
                    gia_km: 0
                },
                noi_khoi_hanh: {
                    quan_huyen: ""
                }
            }
        }
    },
    methods: {
        async getRent(id) {
            try {
                this.rent = await rentService.get(id);
            } catch (error) {
                console.log(error);
            }
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
    },
    mounted() {
        this.getRent(this.$route.params.id)
    }
}
</script>
<template>

    <div class="container p-5">
        <div class="m-5">
            <h3>Xin chào  <span class="text-danger fs-3 m-2">{{ rent.hoten }}</span>!</h3>
        <p class="my-3"> Chân thành cảm ơn quý khách hàng  đã sử dụng dịch vụ của chúng tôi. Xin gửi đến bạn thông
            tin
            vừa đăng ký như sau:</p>
        <p>Dịch vụ của chúng tôi sẽ sớm gửi tin nhắn xác nhận đến số điện thoại mà quý khách đã đăng ký: <span class="text-danger fs-4 m-2">{{ rent.sdt }}</span>
        </p>
        </div>
       

        <div class="card m-3 card-detail-rent mt-5">
            <div class="card-header py-4">
                <div class="row">
                    <div class="col col-8">
                        <span class="me-3 fw-bold">Khách hàng: </span>
                        <span class="text-result">{{ rent.hoten }}</span>
                    </div>
                    <div class="col col-4">
                        <span class="me-3 fw-bold">Thời gian đi: </span>
                        <span class="text-result">{{ rent.ngaynhan }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-8">
                        <span class="me-3 fw-bold">Số điện thoại: </span>
                        <span class="text-result">{{ rent.sdt }}</span>
                    </div>
                    <div class="col col-4">
                        <span class="me-3 fw-bold">Thời gian trả: </span>
                        <span class="text-result">{{ rent.ngaytra }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-8">
                        <span class="me-3 fw-bold">Lộ trình: </span>
                        <span class="text-result">{{ rent.noi_khoi_hanh.quan_huyen }} - {{ rent.noiden }}</span>
                    </div>
                    <div class="col col-4">
                        <span class="me-3 fw-bold">Ghi chú: </span>
                        <span class="text-result" v-if="rent.ghichu == null">Không có</span>
                        <span class="text-result" v-else>{{ rent.ghichu }}</span>
                    </div>
                </div>
            </div>
            <div class="card-body d-flex justify-content-center">
                <table class="table table-bordered">
                    <thead>
                        <th colspan="2">Thông tin chi tiết</th>
                    </thead>
                    <tbody>
                        <tr v-if="this.rent.car.ten_xe">
                            <td>Tên xe</td>
                            <td>{{ rent.car.ten_xe }}</td>
                        </tr>
                        <tr v-if="this.rent.car.ten_xe">
                            <td>Biển số xe</td>
                            <td>{{ rent.car.bien_so }}</td>
                        </tr>
                        <tr v-if="this.rent.car.ten_xe">
                            <td>Số chổ</td>
                            <td>{{ rent.car.so_cho }}</td>
                        </tr>
                        <tr v-else>
                            <td>Loại xe</td>
                            <td>{{ rent.loaixe.so_cho }}</td>
                        </tr>
                        <tr>
                            <td>Dịch vụ</td>
                            <td>
                                {{ rent.ten_dichvu }}
                            </td>
                        </tr>
                        <tr>
                            <td>Giá thuê</td>
                            <td>{{ formatPrice(rent.gia_thue) }} đ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>