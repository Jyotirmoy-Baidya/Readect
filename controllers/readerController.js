const Reader = require("../models/readerModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getReaders = catchAsync(async (req, res) => {
  const readers = await Reader.find();
  res.status(200).json({
    status: "success",
    results: readers.length,
    data: { readers },
  });
});

exports.getReader = catchAsync(async (req, res) => {
  const currentReader = await Reader.findById(req.reader._id)
    .select("-__v -id")
    .populate({
      path: "likedPoems",
      select: "-userId",
    })
    .populate({
      path: "likedShortStories",
      select: "-userId",
    })
    .populate({
      path: "poems",
      select: "name title content tags uploadDate -userId",
    });
  res.status(200).json({
    status: "success",
    data: { currentReader },
  });
});

exports.deleteReader = catchAsync(async (req, res) => {
  const readers = await Reader.findByIdAndDelete(req.reader._id);
  res.status(200).json({
    status: "success",
    data: { readers },
  });
});
