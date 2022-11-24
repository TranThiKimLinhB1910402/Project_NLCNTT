<script>
import CardService from '../components/CardService.vue';
import CardProductHome from '../components/CardProductHome.vue';
import ListCardProduct from '../components/ListCardProduct.vue';
export default {
    components: {
        CardService,
        CardProductHome,
        ListCardProduct
    }
}
</script>
<template>

    <section class="callout position-relative">
        <div class="img-bg">
            <img src="../assets/images/banner/banner-home.jpg" class="img-fluid" alt="">
        </div>
        <div class="img-overlay"></div>
        <div class="callout-inner">
            <h1>Auto Car</h1>
            <!-- <p>{{this.products.product.ten_xe}}</p> -->
            <h3 class="my-4">An toàn của bạn là ưu tiên hàng đầu của chúng tôi</h3>
            <a href="#"> <button class="btn btn-inner rounded-pill">Tìm hiểu thêm </button></a>
        </div>
    </section>
    <section class="service bg-light">
        <CardService />
    </section>
    <section class="bg-light">
        <div class="container">
            <div class="d-block justify-content-center py-5">
                <h2 class="mb-4 fs-3 text-center">XE THUÊ NHIỀU NHẤT</h2>
                <div class="d-flex justify-content-center">
                    <hr>
                    <i class="fs-4 fa-solid fa-car"></i>
                    <hr>
                </div>
            </div>
            <div class="row row-cols-md-3 row-cols-1 pb-lg-5">
                <CardProductHome/>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.service {
    padding: 2% 3%;
    align-items: center;
    text-align: center;
    color: var(--primary-medium);
}

.callout-inner {
    position: absolute;
    top: 45%;
    left: 45%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255, 0.6);
    font-family: Verdana, sans-serif;
    font-size: 2rem;
    font-style: italic;
    letter-spacing: 2px;

    .callout-inner h1 {
        font-size: 3rem;
        letter-spacing: 10px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.5);
    }

    .btn-inner {
        width: 100%;
        background-color: none;
        background-color: #fff;
        color: var(--success-color);
        transition: all 0.5s ease;
        padding: 10px 25px;
        font-size: 1.1rem;
    }

    .btn-inner:hover {
        color: var(--primary-color);
    }
}

.img-bg {
    max-width: 100%;
    filter: brightness(40%)
}
</style>
