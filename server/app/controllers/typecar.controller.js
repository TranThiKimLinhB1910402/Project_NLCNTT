const TypeCarService = require("../services/typecar.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");
exports.create = async (req, res, next) => {
    try {
        const typeCarService = new TypeCarService(MongoDB.client);
        const document = await typeCarService.create(req.body);
        console.log(document);
        return res.send(document);
    } catch(error){
        return next(
            new ApiError(500, "Error while creating")
        );
    }
};
exports.getAll = async (req, res, next) => {
    let documents = [];
    try {
        const typecar = new TypeCarService(MongoDB.client);
        documents = await typecar.find({});
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
    return res.send(documents);
};
// exports.fineOne = async (req, res) => {
//     try{
//         const typecar = new TypeCarService(MongoDB.client);
//         const document = await typecar.findById(req.params.id);
//         if(!document){
//             return next(
//                 new ApiError(404, "Contact Not Found")
//             );
//         }
//         return res.send(document);
//     } catch (error){
//         return next(
//             new ApiError(500, "Error while getAll")
//         );
//     }
// }