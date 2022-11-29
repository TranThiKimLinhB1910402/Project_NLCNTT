<script>
import driverService from '../../../services/driver.service';
import rentService from '../../../services/rent.service';
export default {
    data() {
        return {
            driver: {},
            driverPDK: [
                {
                    phieudangky: [
                        {
                            sdt: ""
                        }
                    ]
                }
            ],
            chuyen: 0,
            songay: 0

        }
    },
    methods: {
        async getDriver(id) {
            try {
                this.driver = await driverService.getDriver(id);
            } catch (error) {
                console.log(error);
            }
        },
        getDate(date) {
            return date.substring(date.indexOf(" "))
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        async getDay() {
            try {
                this.driverPDK = await driverService.getDriverDay();
                for (var i = 0; i < this.driverPDK.length; i++) {
                    if (this.driverPDK[i].full_name == this.driver.full_name && this.driverPDK[i].phieudangky.length > 0) {
                        this.chuyen = this.driverPDK[i].phieudangky.length;
                        for (var k = 0; k < this.chuyen; k++) {
                            const d = this.getDate(this.driverPDK[i].phieudangky[k].ngaynhan);
                            const d1 = this.getDate(this.driverPDK[i].phieudangky[k].ngaytra)
                            var a = d.split('/')[0];
                            var b = d1.split('/')[0];
                            if (a < b) {
                                this.songay = this.songay + (b - a);
                            } else if (
                                a == b
                            ) {
                                this.songay = this.songay + 1
                            }

                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getDriver(this.$route.params.id);
        this.getDay()
    }
}
</script>
<template>
    <div class="container py-5 g-5">
        <div class="card form-register-car w-75">
            <div class="card-header py-4">
                <div class="row">
                    <div class="col col-8">
                        <span class="me-3 fw-bold">Họ tên: </span>
                        <span class="text-result">{{ driver.full_name }}</span>
                    </div>
                    <div class="col col-4">
                        <span class="me-3 fw-bold">Địa chỉ: </span>
                        <span class="text-result">{{ driver.address }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-8">
                        <span class="me-3 fw-bold">Số điện thoại: </span>
                        <span class="text-result">{{ driver.phone }}</span>
                    </div>
                    <div class="col col-4">
                        <span class="me-3 fw-bold">Email: </span>
                        <span class="text-result">{{ driver.email }}</span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <th colspan="2" class="py-2">Thông tin chi tiết</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Tổng chuyến
                            </td>
                            <td>
                                {{ this.chuyen }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Số ngày
                            </td>
                            <td>
                                {{ this.songay }}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Chiết khấu / ngày
                            </td>
                            <td>
                                + {{ formatPrice(300000) }} đ
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Tổng chiết khấu
                            </td>
                            <td>
                                {{ formatPrice(this.songay * 300000) }} đ
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.card-header {
    padding-left: 5%;
    background-color: #066163;

    span {
        font-size: 1.2rem;
        color: #efefef;
    }

    .text-result {
        color: #fea116;
        font-style: italic;
        font-weight: 500;
    }
}
</style>