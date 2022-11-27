const DriverService = require("../services/driver.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.createDriver = async (req, res, next) => {
    try {
        const driverService = new DriverService(MongoDB.client);
        const document = await driverService.create(req.body);
        console.log('ok');
        console.log(document);
        return res.send(document);
    } catch(error){
        return next(
            new ApiError(500, "Error while creating")
        );
    }
};
exports.update = async (req, res, next) => {
  if(Object.keys(req.body).length === 0){
      return next(new ApiError(400, "Data to update can not be empty"));
  }
  try{
      const driverService = new DriverService(MongoDB.client);
      const document = await driverService.update(req.params.id,req.body);
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
exports.fineOne = async (req, res) => {
  try{
      const driverService = new DriverService(MongoDB.client);
      const document = await driverService.findById(req.params.id);
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
exports.getAllDrivers = async (req, res, next) => {
    let documents = [];
    try {
      const driverService = new DriverService(MongoDB.client);
      documents = await driverService.find({});
    } catch (error) {
      return next(
        new ApiError(500, "An error occurred while creating the contact")
      );
    }
    return res.send(documents);
};
exports.getDriverDay = async (req, res, next) => {
  let documents = [];
  try {
    const driverService = new DriverService(MongoDB.client);
    documents = await driverService.getDriverDay();
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
  return res.send(documents);
};
exports.delete = async (req, res, next)=>{
  try{
      const driverService = new DriverService(MongoDB.client);
      const document = await driverService.delete(req.params.id);
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
