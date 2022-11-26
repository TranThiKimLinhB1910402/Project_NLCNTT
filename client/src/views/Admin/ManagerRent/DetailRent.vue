<script>
import RentService from "../../../services/rent.service";
import DriverService from "../../../services/driver.service";

export default {
  data() {
    return {
      rent: {
        car: {},
          noi_khoi_hanh: {
          quan_huyen: ""
        },
        loaixe: {
          so_cho: ""
        }
      },
      drivers: [],
    };
  },
  methods: {

    async getDriverDay() {
      try {
        this.drivers = await DriverService.getDriverDay();
        console.log(this.drivers);
      } catch (error) {
        console.log(error);
      }
    },
    async getId(id) {
      try {
        this.rent = await RentService.get(id);
        this.rent.isDriver = this.rent.ten_tai_xe==null?false:true;
    //     console.log(this.rent.ngaynhan<this.rent.ngaytra)
    //     console.log(this.rent.ngaynhan.substring(this.rent.ngaynhan.indexOf(" ")).replaceAll("/","-"));
    //     console.log(new Date().toDateString("vi-VN", {
    //   timeZone: "Asia/Ho_Chi_Minh",
    // }));
      } catch (error) {
        console.log(error);
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    async onSubmitUpdate(number) {
      if (number == 1) {
        this.rent.status = 1;
      } else if (number == -1) {
        this.rent.status = -1;
      } else this.rent.status = 0;
      try {
        console.log(this.rent);
        await RentService.update(this.rent._id, this.rent);
        alert("Cập nhật thành công");
        this.$router.push({ name: "manager-rent" });
      } catch (error) {
        console.log(error);
      }
    },
    getDate(date){
      return date.substring(date.indexOf(" "))
    }
  },
  created() {
    this.getId(this.$route.params.id);
    this.getDriverDay();
  },
};
</script>
<template>
  <div class="container p-5">
    <h3 class="ms-3">Chi tiết phiếu đăng ký</h3>

    <div class="card m-3 card-detail-rent mt-5">
      <div class="card-header py-4">
        <div class="row">
          <div class="col col-8">
            <span class="me-3 fw-bold">Khách hàng: </span>
            <span class="text-result">{{ rent.hoten }}</span>
          </div>
          <div class="col col-4">
            <span class="me-3 fw-bold">Thời gian đi: </span>
            <span class="text-result">{{ rent.ngaynhan }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col col-8">
            <span class="me-3 fw-bold">Số điện thoại: </span>
            <span class="text-result">{{ rent.sdt }}</span>
          </div>
          <div class="col col-4">
            <span class="me-3 fw-bold">Thời gian trả: </span>
            <span class="text-result">{{ rent.ngaytra }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col col-8">
            <span class="me-3 fw-bold">Lộ trình: </span>
            <span class="text-result">{{ rent.noi_khoi_hanh.quan_huyen }} - {{ rent.noiden }}</span>
          </div>
          <div class="col col-4">
            <span class="me-3 fw-bold">Ghi chú: </span>
            <span class="text-result" v-if="rent.ghichu == null">Không có</span>
            <span class="text-result" v-else>{{ rent.ghichu }}</span>
          </div>
        </div>
      </div>
      <div class="card-body justify-content-center">
          <table class="table table-bordered">
            <thead>
              <th colspan="2">Thông tin chi tiết</th>
            </thead>
            <tbody>
              <tr v-if="this.rent.car.ten_xe">
                <td>Tên xe</td>
                <td>{{ rent.car.ten_xe }}</td>
              </tr>
              <tr v-if="this.rent.car.ten_xe">
                <td>Biển số xe</td>
                <td>{{ rent.car.bien_so }}</td>
              </tr>
              <tr v-if="this.rent.car.ten_xe">
                <td>Số chổ</td>
                <td>{{ rent.car.so_cho }}</td>
              </tr>
              <tr v-else>
                <td>Loại xe</td>
                <td>{{ rent.loaixe.so_cho }}</td>
              </tr>
              <tr>
                <td>Dịch vụ</td>
                <td>
                  {{ rent.ten_dichvu }}
                </td>
              </tr>
              <tr>
                <td>Tài xế</td>
                <td v-if="rent.ten_dichvu == 'Thuê tài xế'" class="d-flex justify-content-center">
                  <select v-if="!rent.isDriver" class="form-select w-50" v-model="this.rent.ten_tai_xe">
                    <template v-for="(driver, index) in drivers" :key="index">
                      <option
                        v-if="driver.phieudangky.length == 0 || 
                        getDate(driver.phieudangky[driver.phieudangky.length - 1].ngaytra) <= getDate(rent.ngaynhan)"
                        :value="driver.full_name">
                        {{ driver.full_name }}
                      </option>
                    </template>
                  </select>
                  <p v-else>{{rent.ten_tai_xe}}</p>

                </td>
                <td v-else>
                  <p>Không có tài xế</p>
                </td>
              </tr>
              <tr>
                <td>Giá thuê</td>
                <td>{{ formatPrice(rent.gia_thue) }} đ</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-end" v-if="this.rent.status == 0">
            <button @click="onSubmitUpdate(-1)" class="btn btn-order w-25 me-3 bg-danger">
              Hủy
            </button>
            <button @click="onSubmitUpdate(1)" class="btn btn-order w-25">
              Xác nhận
            </button>
          </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.card-detail-rent {
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

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
}
</style>
