const CarService = require("../services/car.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");
exports.create = async (req, res, next) => {
    // if(!req.body?.ten_xe){
    //     return next(new ApiError(400, "Name can not be empty"));
    // }
    try {
        if (!req.files) {
            return res.status(500).send({ msg: "file is not found" });
          }
        const carService = new CarService(MongoDB.client);
        const document = await carService.create(req.files.file, req.body);
        
        return res.send(document);
    } catch(error){
        return next(
            new ApiError(500, "Error while creating")
        );
    }
};
exports.getAllDate = async (req, res, next) => {
    let documents = [];
    try{
        console.log('ok');
        const carService = new CarService(MongoDB.client);
        documents = await carService.getAllDate();
    } catch (error){
        return next(
            new ApiError(500, "Error while getAll")
        );
    }
    return res.send(documents);
};
exports.getAll = async (req, res, next) => {
    let documents = [];
    try{
        const carService = new CarService(MongoDB.client);
        const {ten_xe} = req.query;
        if(ten_xe){
            documents = await carService.findByName(ten_xe);
        } 
        else {
            documents = await carService.find({});
        }
    } catch (error){
        return next(
            new ApiError(500, "Error while getAll")
        );
    }
    return res.send(documents);
};
exports.fineOne = async (req, res) => {
    try{
        const carService = new CarService(MongoDB.client);
        const document = await carService.findById(req.params.id);
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
exports.update = async (req, res, next) => {
    if(Object.keys(req.body).length === 0){
        return next(new ApiError(400, "Data to update can not be empty"));
    }
    try{
        const carService = new CarService(MongoDB.client);
        const document = await carService.update(req.params.id,req.body);
        if(!document){
            return next(new ApiError(404,"Contact not found"));
        }
        return res.send({message:"Contact updated"});
    }catch(error){
        return next(
            new ApiError(500, `Error update with id = ${req.params.id}`)
        );
    }
}
exports.delete = async (req, res, next)=>{
    try{
        const carService = new CarService(MongoDB.client);
        const document = await carService.delete(req.params.id);
        if(!document){
            return next(new ApiError(404, "car not found"));
        }
        return res.send({message: "car was deleted successfully"});
    } catch(error){
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