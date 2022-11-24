const DriverService = require("../services/driver.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.createDriver = async (req, res, next) => {
    try {
        const driverService = new DriverService(MongoDB.client);
        const document = await driverService.create(req.body);
        console.log(document);
        return res.send(document);
    } catch(error){
        return next(
            new ApiError(500, "Error while creating")
        );
    }
};
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

