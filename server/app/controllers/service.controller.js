const Service = require("../services/service.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
    try {
        const service = new Service(MongoDB.client);
        const document = await service.create(req.body);
        return res.send(document);
    }
    catch (error) {
        return next(
            new ApiError(500, "Error while creating")
        );
    }
};

exports.getAll = async (req, res, next) => {
    let documents = [];
    try {
        const service = new Service(MongoDB.client);
        documents = await service.find({});
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
    return res.send(documents);
};

// exports.fineOne = async (req, res) => {
//     try{
//         const carService = new CarService(MongoDB.client);
//         const document = await carService.findById(req.params.id);
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

exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }
    try {
        const service = new Service(MongoDB.client);
        const document = await service.update(req.params.id, req.body);
        if (!document) {
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send({ message: "Contact updated" });
    } catch (error) {
        return next(
            new ApiError(500, `Error update with id = ${req.params.id}`)
        );
    }
}

exports.delete = async (req, res, next) => {
    try {
        const service = new Service(MongoDB.client);
        const document = await service.delete(req.params.id);
        if (!document) {
            return next(new ApiError(404, "car not found"));
        }
        return res.send({ message: "car was deleted successfully" });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete car with id=${req.params.id}`
            )
        );
    }
};

// exports.deleteAll = (req, res) => {
//     res.send({message: "deleteAll"});
// }