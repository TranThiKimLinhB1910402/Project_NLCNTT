const { ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");

class UserService{
    constructor(client){
        this.User =client.db().collection("users");
    }
    extractUserData(payload) {
        const user = {
          _id: payload.account.phone,
          full_name: payload.full_name,
          address: payload.address,
          email: payload.email,
          account: {
            phone: payload.account.phone,
            password: payload.account.password,
            role: payload.account.role ?? 0,
          },
        };
         // remove undefined fields
        Object.keys(user).forEach(
            (key) => user[key] === undefined && delete user[key]
        );
        return user;
    }
    async create(payload) {
        const user = this.extractUserData(payload);
        const salt = await bcrypt.genSalt(10);
        // hashed password
        user.account.password = await bcrypt.hash(user.account.password, salt);
        const isExist = await this.User.findOne({ _id: user._id });
        if (!isExist) {
          const result = await this.User.insertOne(user);
          return result;
        }
    }
    async find(filter) {
        const cursor = await this.User.find(filter);
        
        return await cursor.toArray();
    }
    async findById(id){
        return await this.User.findOne({
            _id: id,
        });
    }
    async delete(id) {
        const result = await this.User.findOneAndDelete({
          _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }
    async login(payload){
        // console.log(4);
        const user = await this.User.findOne({
            "account.phone": payload.phone
        });
        if(user){
            // console.log(2);
            const validPassword = await bcrypt.compare(payload.password, user.account.password);
            if(validPassword){
                return user;
            } else{
                return false;
            }
        }
    }
}
module.exports = UserService;