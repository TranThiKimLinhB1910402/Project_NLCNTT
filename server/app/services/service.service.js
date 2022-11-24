const { ObjectId } = require("mongodb");

class ServiceService {
  constructor(client) {
    this.Service = client.db().collection("services");
  }
  extractConactData(payload) {
    const service = {
        ten_dichvu: payload.ten_dichvu
    };
    // remove undefined fields
    Object.keys(service).forEach(
      (key) => service[key] === undefined && delete service[key]
    );
    return service;
  }

  async create(payload) {
    const service = this.extractConactData(payload);
    const result = await this.Service.insertOne(service);
    return result.value;
  }

  async find(filter) {
    const cursor = await this.Service.find(filter);
    return await cursor.toArray();
  }

  async update(id, payload) {
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    }
    const update = this.extractConactData(payload);
    const result = await this.Service.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
    return result.value;
  }

  async delete(id) {
    const result = await this.Service.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }

}
module.exports = ServiceService;