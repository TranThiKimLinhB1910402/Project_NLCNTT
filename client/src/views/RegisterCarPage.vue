<script>
import FormRegisterCar from '../components/FormRegisterCar.vue';
export default {
    components: {
        FormRegisterCar
    },
    data() {
        return {
            type: 1
        }
    }
}
</script>
<template>
    <div class="container py-5">
        <div class="row banner-info">
            <h4>VUI LÒNG ĐIỀN ĐẦY ĐỦ THÔNG TIN BÊN DƯỚI</h4>

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
                tham khảo bảng giá trước khi đăng ký:</p>
            <p class="mb-4" style="font-style: italic;"><span class="text-danger fs-5">*Lưu ý 1:</span> Giá xe chỉ áp
                dụng
                cho các ngày thứ 2 - thứ 6, thứ 7 - chủ nhật và các ngày lễ cộng thêm 200.000 /
                ngày</p>
            <p class="mb-4" style="font-style: italic;"><span class="text-danger fs-5">*Lưu ý 2:</span> Giá xe không áp
                dụng cho các dòng xe Toyota Camry, Lexus, Mercedes... Nếu quan tâm đến các dòng xe cao cấp nói trên. Quý
                khách hành vui lòng truy cập đến chi tiết của từng xe để xem giá thuê theo số km.</p>
            <p class="mb-4" style="font-style: italic;"><span class="text-danger fs-5">*Lưu ý 3:</span> Nếu lộ trình quý
                khách muốn thuê không có báo giá sẵn ở bảng giá. Quý
                khách hành vui lòng đợi từ 1 đến 2 ngày để chúng tôi có thể liên hệ báo giá sớm nhất đến quý khách.</p>
        </div>
        <div class="row">
            <div class="col col-md-7">
                <FormRegisterCar :type="type" />
            </div>
            <div class="col col-md-5">
                <div class="card card-p">
                    <div class="card-body">
                        <h4>CAM KẾT DỊCH VỤ</h4>
                        <ul>
                            <li>
                                Giá thuê xe luôn cạnh tranh, tốt nhất thị trường Cần Thơ
                            </li>
                            <li>
                                Toàn bộ xe tại AutoCar đều là xe đời mới.
                            </li>
                            <li>
                                Xe luôn được kiểm tra kĩ thuật kỹ càng trước khi lên đường.
                            </li>
                            <li>
                                Xe luôn có mặt đúng giờ hẹn của khách hàng
                            </li>
                            <li>
                                Lái xe vui vẻ thân thiện luôn phục vụ hài lòng quý khách
                            </li>
                            <li>
                                Chúng tôi cam kết đem lại chất lượng dịch vụ cho thuê xe tốt nhất tới khách hàng.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<style lang="scss">
.banner-info {
    h4 {
        border: 2px dashed var(--danger-color) !important;
        width: 40%;
        padding-left: 2%;
        padding: 1%;
    }
}
</style>