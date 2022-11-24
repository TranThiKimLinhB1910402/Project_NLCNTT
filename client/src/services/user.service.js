import createApiClient from "./api.service";
class UserService {
    constructor(baseUrl = "/api/users") {
    this.api = createApiClient(baseUrl);
    }
    async getAllUser() {
    return (await this.api.get("/")).data;
    }
    async createUser(data) {
    return (await this.api.post("/register", data)).data;
    }
    async login(data) {
    return (await this.api.post("/login", data)).data;
    }
    // async delete(id) {
    // return (await this.api.delete(`/${id}`)).data;
    // }
}
export default new UserService();
