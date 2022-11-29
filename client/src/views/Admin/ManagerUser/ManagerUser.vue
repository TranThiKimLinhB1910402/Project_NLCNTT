<script>
import userService from '@/services/user.service';
export default {
    data() {
        return {
            users: [
            ]
        }
    },
    methods: {
        async getAllUser() {
            try {
                this.users = await userService.getAllUser();
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.getAllUser();
    }
}
</script>
<template>
    <div class="container">
        <div class="row p-3 mt-3">
            <div class="col">
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
                    <tbody v-for="user in users">
                        <tr v-if="user.account.role === 0" >
                                <td>{{ user._id }}</td>
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