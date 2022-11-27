const { ObjectId } = require("mongodb");

class RentService {
  constructor(client) {
    this.Rent = client.db().collection("rents");
    this.Route = client.db().collection("routes");
  }
  extractConactData(payload) {
    const rent = {
      hoten: payload.hoten,
      id_user: payload.id_user,
      sdt: payload.sdt,
      ngaynhan: payload.ngaynhan,
      ngaytra: payload.ngaytra,
      ghichu: payload.ghichu,
      status: payload.status,
      noi_khoi_hanh: payload.noi_khoi_hanh,
      noiden: payload.noiden,
      loaixe: {
        so_cho: payload.loaixe.so_cho,
        gia_km: payload.loaixe.gia_km
      },
      car: {
        ten_xe: payload.car.ten_xe,
        bien_so: payload.car.bien_so,
        so_cho: payload.car.so_cho,
        gia_thue_ngay: payload.car.gia_thue_ngay
      },
      ten_dichvu: payload.ten_dichvu,
      gia_thue: payload.gia_thue,
      ten_tai_xe: payload.ten_tai_xe ?? null
    };
    // remove undefined fields
    Object.keys(rent).forEach(
      (key) => rent[key] === undefined && delete rent[key]
    );
    return rent;
  }
  async getKm(){
    const result = await this.Rent.aggregate([
      {
          $lookup: {
            from: "routes",
            localField: "noiden",
            foreignField: "noi_den",
            as: "sokm",
          },
      },
      
  ])
  return await result.toArray();
  }
  async create(payload) {
    payload.ngaynhan = new Date(payload.ngaynhan).toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    })
    payload.ngaytra = new Date(payload.ngaytra).toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    })
    const service = this.extractConactData(payload);
    const result = await this.Rent.insertOne(service);
    console.log(result);
    return result.insertedId;
  }

  async find(filter) {
    const cursor = await this.Rent.find(filter);
    return await cursor.toArray();
  }
  async findById(id) {
    return await this.Rent.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }
  async findByPhone(phone) {
    return await this.Rent.find({
    sdt: phone
    }).toArray();
}
  async update(id, payload) {
    console.log(payload);
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    }
    const update = this.extractConactData(payload);
    const result = await this.Rent.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
    return result.value;
  }

  async delete(id) {
    const result = await this.Rent.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }

}
module.exports = RentService;