<template>
    <div class="d-block justify-content-center py-5">
            <h2 class="mb-4 fs-3">TẠI SAO LẠI CHỌN CHÚNG TÔI</h2>
            <div class="d-flex justify-content-center">
                <hr>
                <i class="fs-4 fa-solid fa-users"></i>
                <hr>
            </div>

        </div>
        <div class="container">
            <div class="row row-cols-md-4 row-cols-2 py-lg-3">
                <div class="col">
                    <div class="card">
                        <i class="service-icon fa-solid fa-car"></i>
                        <div class="card-header">
                            HƠN 11 NĂM KINH NGHIỆM
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                Với đội ngũ có 11 năm kinh nghiệm trong lĩnh vực cho thuê xe, chúng tôi sẽ cho
                                bạn một dịch vụ tốt nhất.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <i class="service-icon fa-solid fa-business-time"></i>
                        <div class="card-header">
                            TIẾT KIỆM CHI PHÍ VÀ THỜI GIAN
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                Bạn sẽ không mất quá nhiều thời gian quý giá của mình để lang thang tìm kiếm
                                dịch vụ thuê xe.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <i class="service-icon fa-solid fa-truck-fast"></i>
                        <div class="card-header">
                            NHANH NHẤT CÓ THỂ
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                Để không mất nhiều thời gian của các bạn, chúng tôi sẽ có mặt sau 2 phút khi quý
                                khách liên hệ. Làm việc nhanh nhẹn, hiệu quả cao
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <i class="service-icon fa-solid fa-phone-volume"></i>
                        <div class="card-header">
                            HỖ TRỢ TẬN TÂM 24/7
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                AutoCar luôn tận tâm hỗ trợ quý khách 24/7/365. Bất kể là ngày chủ nhật, nghỉ lễ
                                hay tết. Chúng tôi luôn có mặt mỗi khi bạn cần.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<style>


hr {
    width: 10%;
}

.service-icon {
    font-size: 2.5rem;
    padding: 20px;
}

.service .card {
    border: none;
    padding: 10%;
    margin-bottom: 5%;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

}
.service .card:hover{
    transform: scale(1.01);
    transition: ease-in-out 0.3s;
}

.service .card-header {
    border-bottom: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 1.2rem;
}

.card-text {
    color: #434343;
    font-size: 1.1rem;
}
</style>