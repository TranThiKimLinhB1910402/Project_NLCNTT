import createApiClient from "./api.service";
class RouteService {
    constructor(baseUrl = "/api/routes") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
        }
    async getRoute(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async createRoute(data) {
        return (await this.api.post("/", data)).data;
        }
}
export default new RouteService();