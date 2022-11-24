const UserService = require("../services/user.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.createUser = async (req, res, next) => {
    try {
        const userService = new UserService(MongoDB.client);
        const document = await userService.create(req.body);
        console.log(document);
        return res.send(document);
    } catch(error){
        return next(
            new ApiError(500, "Error while creating")
        );
    }
};
exports.fineOne = async (req, res) => {
    try{
        const userService = new UserService(MongoDB.client);
        const document = await userService.findById(req.params.id);
        if(!document){
            return next(
                new ApiError(404, "Contact Not Found")
            );
        }
        return res.send(document);
    } catch (error){
        return next(
            new ApiError(500, "Error while getAll")
        );
    }
}
exports.getAllUser = async (req, res, next) => {
    let documents = [];
    try {
      const userService = new UserService(MongoDB.client);
      documents = await userService.find({});
    } catch (error) {
      return next(
        new ApiError(500, "An error occurred while creating the contact")
      );
    }
    return res.send(documents);
};
exports.login = async (req, res, next) => {
    try{
        const userService = new UserService(MongoDB.client);
        const document = await userService.login(req.body);
        if(!document){
            return next(new ApiError(404, "Username or Password incorrect"));
        }
        return res.send(document);
    } catch(error){
        return next(
            new ApiError(500, 'Error retrieving user with')
          );
    }
};


