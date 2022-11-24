<script>
import FormRegisterCar from '../components/FormRegisterCar.vue';
import rentService from '../services/rent.service';
import Calendar from '../components/Calendar.vue';
import CarService from '../services/car.service';
export default {
    components: {
        FormRegisterCar,
        Calendar
    },

    data() {
        return {
            date: new Date(),
            car: Object,
        }
    },
    methods: {
        async get(id) {
            try {
                this.car = await CarService.get(id);
            } catch (error) {
                console.log(id);
            }
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
    
    mounted() {
        this.get(this.$route.params.id);
    }

}
</script>
<template>
    <div class="container product-detail">
        <div class="row row-cols-md-2 row-cols-1">
            <div class="col col-md-8 img-detail">
                <img :src="'../src/assets/images/products/' + car.hinh_anh" alt="">
            </div>
            <div class="col col-md-4 mt-5">
                <div class="card card-detail">
                    <div class="card-header">
                        {{ car.ten_xe }}
                    </div>
                    <div class="card-body">
                        <ul>
                            <li v-if="car.so_cho < 16">
                                Giá thuê theo ngày: <span>{{ formatPrice(car.gia_thue_ngay) }} đ</span>
                            </li>
                            <li>
                                Giá thuê theo số km: <span>{{ formatPrice(car.gia_thue_theo_km) }} đ</span>
                            </li>
                            <li>
                                Số chổ: <span>{{ car.so_cho }}</span>
                            </li>

                            <li>
                                Hãng: <span>{{ car.ten_hang }}</span>
                            </li>
                            <li>
                                Năm sản xuất: <span>{{ car.nam_sx }}</span>
                            </li>
                            <li>
                                Loại máy: <span>{{ car.loai_may }}</span>
                            </li>
                            <li>
                                Màu: <span>{{ car.mau_xe }}</span>
                            </li>
                            <li>
                                Thời gian đăng kiểm: <span>{{ car.tg_dang_kiem }}</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-cols-md-2 row-cols-1 text-center mb-5">

            <div class="col col-md-8">
                <FormRegisterCar :car="car"/>
            </div>
            <div class="col col-md-4 mb-2">
                <v-date-picker v-model="date" class="card-calendar mb-4" />
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.product-detail {
    .img-detail img {
        width: 75%;
        margin-left: 8%;
    }

    .card-detail {
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 100%;
        margin-bottom: 8%;
        border-radius: 5px;
    }

    .card-detail .card-header {
        background-color: var(--info-dark);
        border-bottom: none;
        padding: 10px 35px;
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--primary-color);
    }

    .card-detail .card-body ul li {
        list-style-type: none;
        font-size: 1.4rem;
        font-weight: 600;
        padding: 5px 20px;
    }

    .card-detail .card-body ul li span {
        font-size: 1.4rem;
        color: var(--danger-color);
        margin-left: 10px;
    }

    .card-calendar {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border: none;

    }
}
</style>