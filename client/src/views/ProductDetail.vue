<script>
import FormRegisterCar from '../components/FormRegisterCar.vue';
import Calendar from '../components/Calendar.vue';
import CarService from '../services/car.service';
export default {
    components: {
        FormRegisterCar,
        Calendar
    },

    data() {

        return {

            car: Object,
            daytemp: [
                {
                    days: {
                        ngaynhan: ""
                    }
                }
            ],
            listday: []
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
        getDate(date) {
            return date.substring(date.indexOf(" "))
        },
        async getDayBS() {
            try {
                this.daytemp = await CarService.getDayBS(this.$route.params.id);
                setTimeout(() => {
                    for (var i = 0; i <= this.daytemp.length; i++) {
                        const item = this.getDate(this.daytemp[i].days.ngaynhan);
                        this.listday.push(item);
                    }
                }, 1000
                )
                console.log(this.listday);
            } catch (error) {
                console.log(error);
            }
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },

    mounted() {
        this.get(this.$route.params.id);
        this.getDayBS()
    }

}
</script>
<template>
    <div class="container-fluid product-detail">
        <div class="row m-3 row-cols-md-2 row-cols-1">
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
        <div class="row row-cols-md-2 row-cols-1 mb-5">
            <div class="col col-md-5">
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
            </div>
            <div class="col col-md-7">
                <FormRegisterCar :car="car" />
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
        font-size: 1.2rem;
        padding: 5px 20px;
        font-style: italic;
        font-weight: 500;
    }

    .card-detail .card-body ul li span {
        font-size: 1.2rem;
        color: var(--danger-color);
        margin-left: 10px;
    }

    .card-calendar {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border: none;

    }
}

.card-p {
    border: 2px dashed #f77213 !important;

    .card-body {
        padding-left: 8%;
        background-color: #fcf1d3;
        h4{
            font-size: 1.4rem;
            font-style: italic;
            color: rgb(106, 106, 106);
        }
        ul li {
            list-style-type: decimal;
            font-size: 1.3rem !important;
            padding-top: 2%;
            font-style: italic;
            color: rgb(106, 106, 106);

        }
    }
}
</style>