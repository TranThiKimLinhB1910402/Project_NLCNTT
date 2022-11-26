<script>
import serviceService from '../services/service.service';
import rentService from '../services/rent.service';
import routeService from '../services/route.service';
import startService from '../services/start.service';
import typecarService from '../services/typecar.service';
import { useUserStore } from '../store/useStore';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
export default {

    components: {
        VueBootstrapTypeahead
    },
    props: {
        car: {},
        type: { type: Int32Array }
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
                noi_khoi_hanh: "",
                noiden: "",
                loaixe: {
                    so_cho: 0,
                    gia_km: 0
                },
                car: {
                    ten_xe: "",
                    bien_so: "",
                    so_cho: "",
                    gia_thue_ngay: 0
                },
                ten_dichvu: "",
                ten_tai_xe: null,
                status: 0,
                sokm: [],
            },
            state: 0,
            routes: [
            ],
            start: [],
            types: []
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
        getDate(date) {
            return date.substring(date.indexOf(" "))
        },
     
        async getAll() {
            try {
                this.dichvus = await serviceService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        async getType() {
            try {
                this.types = await typecarService.getAll();
                console.log(this.types);
            } catch (error) {
                console.log(error);
            }
        },
        async getRoute() {
            try {
                this.routes = await routeService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        async getAllStart() {
            try {
                this.start = await startService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        async onSubmitRegisterCar(data) {
            data.car.ten_xe = this.car.ten_xe,
                data.car.bien_so = this.car.bien_so,
                data.car.so_cho = this.car.so_cho,
                data.car.gia_thue_ngay = this.car.gia_thue_ngay,
                data.id_user = this.userStore.user._id;
            var price;

            if (this.state == 1) {
                price =
                    this.countDay(this.rent.ngaynhan, this.rent.ngaytra) * data.car.gia_thue_ngay;
                    
            } else {
               price = this.car.gia_thue_theo_km * this.rent.noiden.so_km;
            }
            data.gia_thue = price - (price % 10000);
            data.noiden = data.noiden.noi_den;

            try {

                const rs = await rentService.create(data);
                // console.log(rs);

                alert('Đăng ký thành công');
                this.$router.push("form-confirm/" + rs)
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        },
        async onSubmitRegisterCarType(data) {
            data.id_user = this.userStore.user._id;

            data.gia_thue = this.rent.loaixe.gia_km * this.rent.noiden.so_km;
            data.noiden = data.noiden.noi_den;
            try {

                const rs = await rentService.create(data);

                alert('Đăng ký thành công');
                this.$router.push("products/form-confirm/" + rs)
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        },
        sortBy(value) {
            if (value == 'Tự lái') {
                this.state = 1;
            } else this.state = 0;
            return this.state;

        },
        sortByType(value) {
            if (value == 4) {
                this.rent.loaixe.so_cho = 4;
                this.rent.loaixe.gia_km = 10000
            } else if (value == 7) {
                this.rent.loaixe.so_cho = 7;
                this.rent.loaixe.gia_km = 15000
            } else {
                this.rent.loaixe.so_cho = 16;
                this.rent.loaixe.gia_km = 25000
            }
            console.log(this.rent.loaixe.so_cho);
            return this.rent.loaixe.so_cho;

        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
    created() {
        this.getAll();
        this.getRoute();
        this.getAllStart();
        this.getType()
    }

}
</script>
<template>
    <div class="card form-register-car p-5">
        <form method="post" @submit.prevent="onSubmitRegisterCar(this.rent)" v-if="type != 1">
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
                    <select v-model="this.rent.ten_dichvu" @change="sortBy(this.rent.ten_dichvu)" name="service" id=""
                        class="form-select ">
                        <option v-for="(dichVu) in this.dichvus" :value="dichVu.ten_dichvu">
                            {{ dichVu.ten_dichvu }}
                        </option>
                    </select>
                </div>


            </div>
            <div class="row py-4">
                <div class="col">
                    <label for="address-from" class="form-label">Nơi khởi hành</label>
                    <input type="text" v-if="this.state" disabled class="form-control" id="address-from">
                    <vue-bootstrap-typeahead v-else :data="start" :serializer="s => s.quan_huyen"
                        v-model="this.rent.noi_khoi_hanh" @hit="this.rent.noi_khoi_hanh = $event" />
                </div>
                <div class="col">

                    <label for="address-to" class="form-label">Nơi đến</label>
                    <input type="text" v-if="this.state" disabled class="form-control" id="address-to">
                    <vue-bootstrap-typeahead v-else :data="routes" :serializer="s => s.noi_den"
                        @hit="this.rent.noiden = $event" />
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
                    <input v-if="this.state" type="text" disabled
                        :value="formatPrice(this.car.gia_thue_ngay * countDay(this.rent.ngaynhan, this.rent.ngaytra))"
                        class="form-control" id="total" />
                    <input v-else-if="this.rent.noiden.so_km != null" type="text" disabled
                        :value="this.car.gia_thue_theo_km * this.rent.noiden.so_km * countDay(this.rent.ngaynhan, this.rent.ngaytra)"
                        class="form-control" id="total" />
                    <input v-else type="text" disabled :value="0" class="form-control" id="total" />
                </div>
            </div>

            <div class="col-12 mt-4">
                <button class="btn btn-order" type="submit">Đặt xe</button>
            </div>
        </form>
        <form method="post" @submit.prevent="onSubmitRegisterCarType(this.rent)" v-else>
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
                    <select v-model="this.rent.ten_dichvu" @change="sortBy(this.rent.ten_dichvu)" name="service" id=""
                        class="form-select ">
                        <option v-for="(dichVu) in this.dichvus" :value="dichVu.ten_dichvu">
                            {{ dichVu.ten_dichvu }}
                        </option>
                    </select>
                </div>
                <div class="col">
                    <label for="so_cho" class="form-label">Số chổ</label>
                    <select v-model="this.rent.loaixe.so_cho" @change="sortByType(this.rent.loaixe.so_cho)" name="so_cho" id=""
                        class="form-select ">
                        <option v-for="(type) in this.types" :value="type._id">
                            {{ type.so_cho }}
                        </option>
                    </select>
                </div>

            </div>
            <div class="row py-4">
                <div class="col">
                    <label for="address-from" class="form-label">Nơi khởi hành</label>
                    <input type="text" v-if="this.state" disabled class="form-control" id="address-from">
                    <vue-bootstrap-typeahead v-else :data="start" :serializer="s => s.quan_huyen"
                        v-model="this.rent.noi_khoi_hanh" @hit="this.rent.noi_khoi_hanh = $event" />
                </div>
                <div class="col">

                    <label for="address-to" class="form-label">Nơi đến</label>
                    <input type="text" v-if="this.state" disabled class="form-control" id="address-to">
                    <vue-bootstrap-typeahead v-else :data="routes" :serializer="s => s.noi_den"
                        @hit="this.rent.noiden = $event" />
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

                    <input v-if="this.rent.noiden.so_km != null" type="text" disabled
                        :value="this.rent.loaixe.gia_km * this.rent.noiden.so_km * countDay(this.rent.ngaynhan, this.rent.ngaytra)"
                        class="form-control" id="total" />
                    <input v-else type="text" disabled :value="0" class="form-control" id="total" />
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