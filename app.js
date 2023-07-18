const express = require("express");
const app = express();
const readerRoute = require("./routes/readerRoute");
const actionRoute = require("./routes/actionRoute");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

app.use(express.json());

app.use("/api/v1/reader", readerRoute);
app.use("/api/v1/reader/upload", actionRoute);

app.all("*", (req, res, next) => {
  //   res.status(404).json({
  //     status: "fail",
  //     message: `Can't find ${req.originalUrl} on this server.`,
  //   });
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
