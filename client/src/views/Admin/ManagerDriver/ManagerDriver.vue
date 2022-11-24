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