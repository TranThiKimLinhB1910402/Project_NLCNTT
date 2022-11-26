<script>
import CarService from '../services/car.service';
export default {
    props: {
        so_cho: { type: String },
        muc_gia: { type: String }
    },
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
                console.log(error);
            }
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
    <template v-if="this.so_cho || this.muc_gia" v-for="(car, index) in this.cars">
        <div class="col list-product" v-if="this.so_cho==car.so_cho || this.muc_gia >= car.gia_thue_ngay">
        <div class="card">
            <img :src="'../src/assets/images/products/' + car.hinh_anh" class="card-img img-fluid">

            <div class="middle">
                <router-link :to="{ name: 'productDetail', params: { id: car._id } }" class="btn btn-info">
                    Xem chi tiết
                </router-link>
            </div>
            <div class="card-body">
                <div class="card-title">
                    {{ car.ten_xe }}
                </div>
                <div class="card-text">
                    <h4>{{ car.gia_thue_ngay }} đ</h4>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <div v-else class="col list-product" v-for="(car, index) in this.cars">
        <div class="card">
            <img :src="'../src/assets/images/products/' + car.hinh_anh" class="card-img img-fluid">

            <div class="middle">
                <router-link :to="{ name: 'productDetail', params: { id: car._id } }" class="btn btn-info">
                    Xem chi tiết
                </router-link>
            </div>
            <div class="card-body">
                <div class="card-title">
                    {{ car.ten_xe }}
                </div>
                <div class="card-text">
                    <h4>{{ formatPrice(car.gia_thue_ngay) }} đ</h4>
                </div>
            </div>
        </div>
    </div>

</template>
<style lang="scss">
.list-product {
    .card {
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 95%;
        margin-bottom: 8%;
        padding: 10px;
        border-radius: 5px;

        &:hover {
            transform: scale(1.01);
            transition: ease-in-out 0.3s;
        }

        &:hover .card-img {
            opacity: 0.3;
        }

        &:hover .middle {
            opacity: 1;
        }

        img {
            opacity: 1;
            transition: 0.5s ease;
            backface-visibility: hidden;
            display: block;
            max-height: 80%;
        }

        .card-title {
            color: #0f3460;
        }

        .middle {
            transition: 0.5s ease;
            opacity: 0;
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
        }

        .btn-info {
            padding: 10px 15px;
            background-color: var(--primary-color);
            border: none;
            color: white;
        }

        h4 {
            color: #b20600;
            font-size: 1.2rem;
        }
    }
}
</style>