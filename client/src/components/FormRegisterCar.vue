<script>
import serviceService from '../services/service.service';
import rentService from '../services/rent.service';
import { useUserStore } from '../store/useStore';
export default {
    props: {
        car: {}
    },
    data() {
        const userStore = useUserStore();
        return {
            userStore,
            dichvus: [],
            rent: {
                hoten: "",
                id_user: "",
                sdt: "",
                ngaynhan: "",
                ngaytra: "",
                ghichu: "",
                gia_thue: 0,
                route:{
                    noi_khoi_hanh: "",
                    noiden: ""
                },
                car: {
                    ten_xe: "",
                    bien_so: "",
                    so_cho: "",
                    gia_thue_ngay: 0
                },
                ten_dichvu: "",
                ten_tai_xe: null,
                status: 0
            },
            state: 0
        }
    },
    methods: {
        countDay(startDate, endDate) {
            const start = new Date(startDate)
            const end = new Date(endDate)
            let dayCount = 0
            while (end > start) {
                dayCount++
                start.setDate(start.getDate() + 1)
            }

            return dayCount;
        },
        async getAll() {
            try {
                this.dichvus = await serviceService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

        async onSubmitRegisterCar(data) {
            data.car.ten_xe = this.car.ten_xe,
                data.car.bien_so = this.car.bien_so,
                data.car.so_cho = this.car.so_cho,
                data.car.gia_thue_ngay = this.car.gia_thue_ngay,
                data.id_user = this.userStore.user._id
                data.gia_thue = 
                this.countDay(this.rent.ngaynhan, this.rent.ngaytra)* data.car.gia_thue_ngay;
            try { 
               const rs = await rentService.create(data);
               console.log(rs);
                alert('Đăng ký thành công');
                this.$router.push("form-confirm/"+rs)
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        },
        sortBy(value) {
            if (value == 'Tự lái') {
                this.state = 1;
            } else this.state = 0;
            // console.log(this.state);
            return this.state;

        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
    mounted() {
        this.getAll();
       
    }

}
</script>
<template>
    <div class="card form-register-car p-5">
        <form method="post" @submit.prevent="onSubmitRegisterCar(this.rent)">
            <div class="row py-2">
                <div class="col">
                    <label for="name" class="form-label">Họ tên</label>
                    <input type="text" v-model="this.rent.hoten" class="form-control" id="name" required>
                </div>
                <div class="col">
                    <label for="sdt" class="form-label">Số điện thoại</label>
                    <input type="text" v-model="this.rent.sdt" class="form-control" id="sdt" required>
                </div>
            </div>
            <div class="row py-4">
                <div class="col">
                    <label for="email" class="form-label">Dịch vụ</label>
                    <select v-model="this.rent.ten_dichvu" @change="sortBy(this.rent.ten_dichvu)"
                        name="service" id="" class="form-select ">
                        <option v-for="(dichVu) in this.dichvus" :value="dichVu.ten_dichvu">
                            {{ dichVu.ten_dichvu }}
                        </option>
                    </select>
                </div>

            </div>
            <div class="row py-4">
                <div class="col">
                    <label for="address-from" class="form-label">Nơi khởi hành</label>
                    <input type="text" v-if="this.state" disabled class="form-control"
                        id="address-from">
                    <input type="text" v-else v-model="this.rent.route.noi_khoi_hanh" class="form-control" id="address-from"
                        required>
                </div>
                <div class="col">
                    <label for="address-to" class="form-label">Nơi đến</label>
                    <input type="text" v-if="this.state" disabled class="form-control"
                        id="address-to">
                    <input type="text" v-else v-model="this.rent.route.noiden" class="form-control" id="address-to"
                        required>
                </div>
            </div>
            <div class="row py-2">
                <div class="col">
                    <label for="date-from" class="form-label">Ngày nhận xe</label>
                    <input type="datetime-local" v-model="this.rent.ngaynhan" class="form-control" id="name" required>
                </div>
                <div class="col">
                    <label for="date-to" class="form-label">Ngày trả xe</label>
                    <input type="datetime-local" v-model="this.rent.ngaytra" class="form-control" id="address-from"
                        required>
                </div>
            </div>
            <div class="row py-2">
                <div class="col">
                    <label for="note" class="form-label">Ghi chú: </label>
                    <input type="text" v-model="this.rent.ghichu" class="form-control" id="note" />
                </div>
                <div class="col">
                    <label for="total" class="form-label">Thành tiền: </label>
                    <input type="text" disabled :value="formatPrice(this.car.gia_thue_ngay*countDay(this.rent.ngaynhan, this.rent.ngaytra))" class="form-control" id="total" />
                </div>
            </div>

            <div class="col-12 mt-4">
                <button class="btn btn-order" type="submit">Đặt xe</button>
            </div>
        </form>
    </div>
</template>
<style>
.form-register-car {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5) !important;
    border: none;

}

.form-register-car .form-control,
.form-register-car .form-select {
    border: 1px solid var(--secondary-hover);
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    font-size: 1.2rem;
}

.form-register-car .form-control:focus,
.form-register-car .form-select:focus {
    border-radius: 5px;
    box-shadow: none;
}

.form-register-car .form-label {
    float: left;
    font-size: 1.2rem;
}

.btn-order {
    background-color: #06283d;
    color: var(--light-color);
    border: none;
    border-radius: 30px;
    width: 30%;
    padding: 1% 0;
    font-size: 1.3rem;
    font-weight: 500;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5) !important;
    float: right;
}

.btn-order:hover {
    background-color: var(--primary-medium);
    color: var(--light-color);
}
</style>