const { ObjectId } = require("mongodb");
class RouteService {
    constructor(client) {
        this.Route = client.db().collection("routes");
      }
      extractConactData(payload) {
        const route = {
            noi_khoi_hanh: payload.noi_khoi_hanh,
            noi_den: payload.noi_den,
            ten_tinh: payload.ten_tinh,
            so_km: payload.so_km

        };
        // remove undefined fields
        Object.keys(route).forEach(
          (key) => route[key] === undefined && delete route[key]
        );
        return route;
      }
    //   async findByKm(payload) {
    //     return await this.Route.findOne({
    //         so_km: km,
    //     });
    // }
      async find(filter) {
        const cursor = await this.Route.find(filter);
        return await cursor.toArray();
    }
}
module.exports = RouteService;