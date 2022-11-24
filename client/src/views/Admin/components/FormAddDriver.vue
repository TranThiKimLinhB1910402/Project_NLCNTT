<script>
import * as yup from "yup";
export default {
    emits: ["submit:driver"],
    props: {
        driver: { type: Object },
        edit: null
    },
    data() {
        return {
            driverLocal: this.driver,
        };

    },
    methods: {
        onSubmit() { this.$emit("submit:driver", this.driverLocal); },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },

    }
}

</script>
<template>
    <div class="container py-5 g-5">
        <div class="card form-register-car p-5">
            <form @submit="onSubmit">
                <div class="row py-2">
                    <div class="col">
                        <label for="bien_so" class="form-label">Họ tên</label>
                        <input type="text" v-model="this.driverLocal.full_name" class="form-control" id="full_name" required>
                    </div>
                    <div class="col">
                        <label for="ten_xe" class="form-label">Địa chỉ</label>
                        <input type="text" v-model="this.driverLocal.address" class="form-control" id="address" required>
                    </div>
                    <div class="col">
                        <label for="nam_sx" class="form-label">Email</label>
                        <input type="text" v-model="this.driverLocal.email" class="form-control" id="email" required>
                    </div>
                    <div class="col">
                        <label for="nam_sx" class="form-label">Số điện thoại</label>
                        <input type="text" v-model="this.driverLocal.phone" class="form-control" id="phone" required>
                    </div>
                </div>
                <div class="col-12 mt-4">
                    <button v-if="edit" class="btn btn-order" type="submit">Cập nhật</button>
                    <button v-else class="btn btn-order" type="submit">Thêm</button>
                </div>
            </form>
        </div>
    </div>

</template>