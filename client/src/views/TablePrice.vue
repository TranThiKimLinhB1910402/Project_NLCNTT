<script>
import RouteService from '../services/route.service';
import TypeCarService from '../services/typecar.service';
export default {
    data() {
        return {
            typecar: [],
            routes: []
        }
    },
    methods: {
        async getAllType() {
            try {
                this.typecar = await TypeCarService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        async getAllRoute() {
            try {
                this.routes = await RouteService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        formatPrice(value) {
            var a = value - (value % 100000);
            value = a;
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        }
    },
    mounted() {
        this.getAllRoute();
        this.getAllType();
    }

}
</script>
<template>
    <div class="container py-5">
        <div class="row">
            <h2>Bảng giá thuê xe du lịch 2022</h2>
            <p class="mb-3 mt-3">
                Dịch vụ cho thuê xe du lịch Thuê xe OTO Auto Car xin kính chào quý khách!
                Cám ơn quý khách đã tạo điều kiện cho chúng tôi có cơ hội phục vụ quý khách.
                Chúng tôi có đầy đủ các dịch vụ thuê xe từ 4 chỗ đến 16 chỗ từ Cần Thơ đi các tỉnh. Quý khách hàng hoàn
                toàn có thể yên tâm về dịch vụ mà chúng tôi cung cấp. Bên chúng tôi có đầy đủ các dòng xe như MERCEDES
                SPRINTER ,TOYOTA (INNOVA, ALTIS, FORTUNER…), FORD TRANSIT, HONDA (CITY,CIVIC), ISUZU SAMCO, HUYNDAI
                (COUNTY, UNIVERSE, AERO SPACE) với giá cả hợp lý.
            </p>
            <p class="mb-3">Nếu quý khách hàng mong muốn có một chuyến đi thoải mái về cả tinh thần và tài chính, Quý
                khách có thể
                tham khảo bảng giá thuê xe du lịch 2022 sau đây:</p>
            <p class="mb-4" style="font-style: italic;"><span class="text-danger fs-5">*Lưu ý 1:</span> Giá xe chỉ áp dụng
                cho các ngày thứ 2 - thứ 6, thứ 7 - chủ nhật và các ngày lễ cộng thêm 200.000 /
                ngày</p>
            <p class="mb-4" style="font-style: italic;"><span class="text-danger fs-5">*Lưu ý 2:</span> Giá xe không áp
                dụng cho các dòng xe Toyota Camry, Lexus, Mercedes... Nếu quan tâm đến các dòng xe cao cấp nói trên. Quý
                khách hành vui lòng truy cập đến chi tiết của từng xe để xem giá thuê theo số km.</p>
        </div>

        <table class="table table-bordered table-price">
            <thead>
                <th>
                    Tỉnh thành
                </th>
                <th>
                    Nơi đến
                </th>
                <th>
                    Số km từ Cần Thơ
                </th>
                <th>
                    Giá xe 4 chổ
                </th>
                <th>
                    Giá xe 7 chổ
                </th>
                <th>
                    Giá xe 16 chổ
                </th>
            </thead>
            <tbody v-for="route in routes">
                <tr>
                    <td>
                        {{ route.ten_tinh }}
                    </td>
                    <td>
                        {{ route.noi_den }}
                    </td>
                    <td>
                        {{ route.so_km }}
                    </td>
                    <td>
                        {{ formatPrice(8000 * route.so_km) }} đ
                    </td>
                    <td>
                        {{ formatPrice(12000 * route.so_km) }} đ
                    </td>
                    <td>
                        {{ formatPrice(20000 * route.so_km) }} đ
                    </td>

                </tr>
            </tbody>


        </table>
    </div>
</template>
<style lang="scss">
.table-price {
    th {
        padding: 15px;
        font-size: 1.5rem;
        color: blue;
    }
}
</style>