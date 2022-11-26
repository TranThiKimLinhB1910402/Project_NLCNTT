import createApiClient from "./api.service";
class DriverService {
    constructor(baseUrl = "/api/drivers") {
    this.api = createApiClient(baseUrl);
    }
    async getAllDrivers() {
    return (await this.api.get("/")).data;
    }
    async getDriverDay() {
        return (await this.api.get("/getday")).data;
    }
    async createDriver(data) {
    return (await this.api.post("/create-driver", data)).data;
    }
    // async delete(id) {
    // return (await this.api.delete(`/${id}`)).data;
    // }
}
export default new DriverService();
