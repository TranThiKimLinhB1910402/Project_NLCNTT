const { ObjectId } = require("mongodb");
class TypeCarService {
    constructor(client) {
        this.TypeCar = client.db().collection("typecars");
      }
      extractConactData(payload) {
        const typecar = {
            _id : payload.so_cho,
            so_cho: payload.so_cho,
            gia_theo_km: payload.gia_theo_km
        };
        // remove undefined fields
        Object.keys(typecar).forEach(
          (key) => typecar[key] === undefined && delete typecar[key]
        );
        return typecar;
      }
      async create(payload){
        const typecar = this.extractConactData(payload);
        const result = await this.TypeCar.insertOne(typecar);
        return result.value;
    }
      async find(filter) {
        const cursor = await this.TypeCar.find(filter);
        return await cursor.toArray();
    }
    // async findById(id) {
    //     return await this.TypeCar.findOne({
    //       _id: id,
    //     });
    // }
}
module.exports = TypeCarService;