const { ObjectId } = require("mongodb");
class RouteService {
  constructor(client) {
    this.Route = client.db().collection("routes");
  }
  extractConactData(payload) {
    const route = {
      noi_den: payload.noi_den,
      so_km: payload.so_km
    };
    // remove undefined fields
    Object.keys(route).forEach(
      (key) => route[key] === undefined && delete route[key]
    );
    return route;
  }
  async create(payload) {
    const route = this.extractConactData(payload);
    const result = await this.Route.insertOne(route);
    return result;
  }
  async find(filter) {
    const cursor = await this.Route.find(filter);
    return await cursor.toArray();
  }
  async findById(id) {
    return await this.Route.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }

  async update(id, payload) {
    console.log(payload);
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    }
    const update = this.extractConactData(payload);
    const result = await this.Route.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
    return result.value;
  }

  async delete(id) {
    const result = await this.Route.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }
}
module.exports = RouteService;