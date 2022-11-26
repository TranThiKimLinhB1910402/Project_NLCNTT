import createApiClient from "./api.service";
class StartService {
    constructor(baseUrl = "/api/starts") {
    this.api = createApiClient(baseUrl);
    }
    async getAll() {
    return (await this.api.get("/")).data;
    }
}
export default new StartService();