const { ObjectId } = require("mongodb");

class CarService {
    constructor(client) {
        this.Car = client.db().collection("cars");
        this.Rent = client.db().collection("rents");
    }
    
    extractConactData(payload){
        const car = {
            _id: payload.bien_so,
            ten_xe: payload.ten_xe,
            bien_so: payload.bien_so,
            nam_sx: payload.nam_sx,
            so_cho: payload.so_cho,
            loai_may: payload.loai_may,
            gia_thue_ngay: payload.gia_thue_ngay,
            gia_thue_theo_km: payload.gia_thue_theo_km,
            mau_xe: payload.mau_xe,
            tg_dang_kiem: payload.tg_dang_kiem,
            favorite: payload.favorite,
            ten_hang: payload.ten_hang,
            hinh_anh: payload.hinh_anh
        };
        Object.keys(car).forEach(
            (key) => car[key] === undefined && delete car[key]
        );
        return car;
    }
    async getDay(bs){
        const result = await this.Car.aggregate([
            {
              $lookup: {
                from: "rents",
                let: { bienso: "$bien_so" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $and: [
                          { $eq: ["$car.bien_so", "$$bienso"] },
                          { $eq: ["$$bienso", bs] },
                        ],
                      },
                    },
                  },
                ],
                as: "days",
              },
            },
            { $unwind: "$days" },
          ])
        return await result.toArray();
    }
    async create(file,payload){
        const car = this.extractConactData({...payload, hinh_anh: file.name});
        const fs = require('fs');
        let folderPath = "D:\\PTUDWEB\\thueoto_chinh\\client\\src\\assets\\images\\products";
        try {
            
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }
            
        } catch (err) {
            console.error(err);
        }
        console.log(file.name);
        file.mv(`${folderPath}/${file.name}`, function (err) {
            if (err) {
                console.log(err)
                return res.status(500).send({ msg: "Error occured" });
            }
        });
        const isExist = await this.Car.findOne({ _id: car._id });
        if (!isExist) {
          const result = await this.Car.insertOne(car);
          return result.value;
        }
    }
    async find(filter) {
        const cursor = await this.Car.find(filter);
        return await cursor.toArray();
        }
    async findByName(ten_xe) {
        return await this.find({
        ten_xe: { $regex: new RegExp(ten_xe), $options: "i" },
        });
    }
    async findById(id) {
        return await this.Car.findOne({
            _id: id,
        });
    }
    async delete(id){
        const result = await this.Car.findOneAndDelete({
            _id: id,
        });
        return result.value;
    }
    async update(id, payload){
        const filter = {
            _id: id,
        }
        const update = this.extractConactData(payload);
        const result = await this.Car.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after"}
        );
        return result.value;
    }
        
}

module.exports = CarService;