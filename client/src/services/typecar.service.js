import createApiClient from "./api.service";
class TypeCarService {
    constructor(baseUrl = "/api/typecars") {
    this.api = createApiClient(baseUrl);
    }
    async getAll() {
    return (await this.api.get("/")).data;
    }
}
export default new TypeCarService();