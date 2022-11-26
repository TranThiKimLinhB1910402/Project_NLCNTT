const StartService = require("../services/start.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.getAll = async (req, res, next) => {
    let documents = [];
    try {
        const start = new StartService(MongoDB.client);
        documents = await start.getAll({});
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
    return res.send(documents);
};