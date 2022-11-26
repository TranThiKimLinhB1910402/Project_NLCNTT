<script>
export default {
    data() {
        return {
            so_cho: 0,
            muc_gia: 0
        }
    },
    methods: {
        handleFilter(){
            this.$router.push()
        }
    }
}
</script>
<template>
    <form action="" method="post">
        <!-- <div class="card">
            <div class="card-header">
                DỊCH VỤ
            </div>
            <div class="card-body">
                <ul>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Thuê xe có tài xế
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Thuê xe tự lái
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Thuê xe du lịch
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Thuê xe tiệc cưới
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div> -->
        <div class="card">
            <div class="card-header">
                SỐ CHỔ
            </div>
            <div class="card-body">
                <ul>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" @click="handleS(4)" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Xe 4 chổ
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" @click="handleS(7)" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Xe 7 chổ
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" @click="handleS(16)" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Xe 16 chổ
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                MỨC GIÁ
            </div>
            <div class="card-body">
                <ul>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" checked type="radio" @click="handleM(1)"
                                name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                500.000 - 1.000.000 đ
                            </label>
                        </div>

                    </li>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" @click="handleM(2)"
                                id="flexRadioDefault2">
                            <label class="form-check-label" for="flexRadioDefault2">
                                1.000.000 - 2.000.000 đ
                            </label>
                        </div>

                    </li>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" @click="handleM(3)"
                                id="flexRadioDefault3">
                            <label class="form-check-label" for="flexRadioDefault3">
                                2.000.000 - 3.000.000 đ
                            </label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" @click="handleM(4)"
                                id="flexRadioDefault4">
                            <label class="form-check-label" for="flexRadioDefault4">
                                Trên 3.000.000 đ
                            </label>
                        </div>
                    </li>
                </ul>


            </div>
        </div>
        <!-- <div class="card">
            <div class="card-header">
                LOẠI MÁY
            </div>
            <div class="card-body">
                <ul>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input"  checked type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                Xăng
                            </label>
                        </div>

                    </li>
                    <li>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                            <label class="form-check-label" for="flexRadioDefault2">
                                Dầu
                            </label>
                        </div>

                    </li>
                </ul>
            </div>
        </div> -->
        <div @click="handleFilter" class="btn filter-btn rounded-pill mb-5">
            Tìm kiếm
        </div>
    </form>
</template>
<style lang="scss">
.sidebar .card {
    padding: 0 !important;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2) !important;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 5px !important;

    .card-header {
        background-color: var(--info-dark);
        border-bottom: none;
        padding: 10px 20px;
        font-size: 1.1rem;
        font-weight: 800;
        color: var(--primary-color);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .card-body {
        font-size: 1.1rem;
        padding: 0;
    }

    ul {
        width: 100%;
        list-style-type: none;
        margin: 0;
        padding-left: 0;

        li {
            padding: 10px 20px;

            &:hover {
                background-color: #e3e3e3;
            }
        }
    }

}

.form-check-input {
    &:checked {
        background-color: #921616;
        border-color: transparent;
        box-shadow: none;
    }

    &:focus {
        box-shadow: none;
    }
}


.filter-btn {
    background-color: #06283d;
    color: var(--light-color);
    border: none;
    width: 100%;
    padding: 4% 0;
    font-size: 1.1rem;
    font-weight: 500;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5) !important;

    &:hover {
        background-color: var(--primary-medium);
        color: var(--light-color);
    }
}
</style>