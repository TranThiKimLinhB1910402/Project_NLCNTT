<script>
import driverService from '@/services/driver.service';
export default {
    data() {
        return {
            drivers: [
            ]
        }
    },
    methods: {
        async getAllDrivers() {
            try {
                this.drivers = await driverService.getAllDrivers();
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.getAllDrivers();
    }
}
</script>
<template>
    <div class="container">
        <div class="row p-3 mt-3">
            <div class="col">
            </div>
            <div class="col">
                <router-link :to="{ name: 'add-rent' }" class="btn btn-add">
                    <i class="fa-solid fa-plus me-1"></i>
                    Thêm tài xế
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
                            <th>Phone</th>
                            <th>Full name</th>
                            <th>Address</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody v-for="user in drivers">
                        <tr >
                                <td>{{ user.phone }}</td>
                                <td>{{ user.full_name }}</td>
                                <td>{{ user.address }}</td>
                                <td>{{ user.email }}</td>
                        </tr> 
                    </tbody>
                </table>
            </div>

        </div>

    </div>

</template>