const RouteService = require("../services/route.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

exports.getAll = async (req, res, next) => {
    let documents = [];
    try {
        const route = new RouteService(MongoDB.client);
        documents = await route.find({});
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
    return res.send(documents);
};