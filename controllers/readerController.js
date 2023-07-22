const Reader = require("../models/readerModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createReader = catchAsync(async (req, res) => {
  const newReader = await Reader.create(req.body);
  res.status(201).json({
    status: "success",
    reader: { newReader },
  });
});

exports.getReaders = catchAsync(async (req, res) => {
  const readers = await Reader.find();
  console.log(process.env.dbUserName);
  res.status(200).json({
    status: "success",
    results: readers.length,
    data: { readers },
  });
});

exports.getReader = catchAsync(async (req, res) => {
  const currentReader = await Reader.findById(req.reader._id);
  res.status(200).json({
    status: "success",
    data: { currentReader },
  });
});

exports.deleteReader = catchAsync(async (req, res) => {
  const readers = await Reader.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: { readers },
  });
});
