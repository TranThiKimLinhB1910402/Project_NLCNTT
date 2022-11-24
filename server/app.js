const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const carsRouter = require("./app/routes/car.route");
const usersRouter = require("./app/routes/user.route");
const driversRouter = require("./app/routes/driver.route");
const rentsRouter = require("./app/routes/rent.route");
const servicesRouter = require("./app/routes/service.route");
const routeRouter = require("./app/routes/route.route");
const typecarRouter = require("./app/routes/typecar.route");
const fileUpload = require('express-fileupload');

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use("/api/cars", carsRouter);
app.use("/api/users", usersRouter);
app.use("/api/drivers", driversRouter);
app.use("/api/rents", rentsRouter);
app.use("/api/services", servicesRouter);
app.use("/api/routes", routeRouter);
app.use("/api/typecars", typecarRouter);

app.use((req, res, next) =>{
    return next(new ApiError(404, "Resource not found"));
})

app.use((err, req, res, next) =>{
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal server Error",
    });
})

module.exports = app;