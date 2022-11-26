<script>
import RentService from '../../../services/rent.service';
import driverService from '../../../services/driver.service';
export default {
    data() {
        return {
            rents: [

            ],
            drivers: [],
            temp: ''
        }
    },
    methods: {

        async getAll() {
            try {
                this.rents = await RentService.getAll();
            }
            catch (error) {
                console.log(error)
            }
        },
        async getAllDriver() {
            try {
                this.drivers = await driverService.getAllDrivers();
            }
            catch (error) {
                console.log(error)
            }
        },
        handleFilter(name){
            console.log(name);
            this.temp = name;
            console.log(this.temp);
        }

    },
    created() {
        this.getAll();
        this.getAllDriver()
    }
}


</script>

<template>
    <div class="container">
        <div class="row p-3 mt-3">
            <div class="col">
                <select class="form-select w-50" v-model="this.temp" @change="handleFilter(this.temp)">
                    <option :value="0" selected>Tất cả</option>
                    <option v-for="(driver) in this.drivers" :value="driver.full_name" >
                        {{ driver.full_name }}
                    </option>
                </select>
            </div>
            <div class="col">
                <router-link :to="{ name: 'add-rent' }" class="btn btn-add">
                    <i class="fa-solid fa-plus me-1"></i>
                    Thêm phiếu đăng ký
                </router-link>
                <div class="btn m-2 btn-excel">
                    <i class="fa-solid fa-file-csv me-2"></i>
                    Xuất file Excel
                </div>
                <div class="btn btn-pdf">
                    <i class="fa-solid fa-file-pdf me-2"></i>
                    Xuất file PDF
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container p-4">
                <table class="table table-hover" style="border-radius: 5px;">
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
                    <tbody v-for="rent in rents" v-if="this.temp != 0">
                            <tr v-if="rent.ten_tai_xe == this.temp">
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
                            <td>
                                <router-link :to="{ name: 'detail-rent', params: { id: rent._id } }">
                                    <i class="fa-solid fa-circle-info fs-4 text-primary"></i>
                                </router-link>

                            </td>
                        </tr>
                        
                        
                    </tbody>
                    <tbody v-for="rent in rents" v-else>
                            <tr>
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
                            <td>
                                <router-link :to="{ name: 'detail-rent', params: { id: rent._id } }">
                                    <i class="fa-solid fa-circle-info fs-4 text-primary"></i>
                                </router-link>

                            </td>
                        </tr>
                     
                    </tbody>
                </table>
            </div>

        </div>

    </div>

</template>