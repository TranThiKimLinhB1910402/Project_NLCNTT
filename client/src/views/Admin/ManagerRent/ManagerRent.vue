<script>
import RentService from '../../../services/rent.service';

export default {
    data() {
        return {
            rents: []
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
        }

    },
    mounted() {
        this.getAll();
    }
}


</script>

<template>
    <div class="container">
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
                    <tbody v-for="rent in rents">
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