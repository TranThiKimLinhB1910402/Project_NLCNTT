const { ObjectId } = require("mongodb");
class StartService {
    constructor(client) {
        this.Start = client.db().collection("starts");
      }
      extractConactData(payload) {
        const start = {
            quan_huyen: payload.quan_huyen,
            so_km: payload.so_km

        };
        // remove undefined fields
        Object.keys(start).forEach(
          (key) => start[key] === undefined && delete start[key]
        );
        return start;
      }

      async getAll(filter) {
        const cursor = await this.Start.find(filter);
        return await cursor.toArray();
    }
}
module.exports = StartService;