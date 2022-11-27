import createApiClient from "./api.service";
class DriverService {
    constructor(baseUrl = "/api/drivers") {
    this.api = createApiClient(baseUrl);
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async getDriver(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async getAllDrivers() {
    return (await this.api.get("/")).data;
    }
    async getDriverDay() {
        return (await this.api.get("/getday")).data;
    }
    async createDriver(data) {
    return (await this.api.post("/", data)).data;
    }
    async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
    }
}
export default new DriverService();
