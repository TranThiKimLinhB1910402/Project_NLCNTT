import createApiClient from "./api.service";
class RouteService {
    constructor(baseUrl = "/api/routes") {
    this.api = createApiClient(baseUrl);
    }
    async getAll() {
    return (await this.api.get("/")).data;
    }
}
export default new RouteService();