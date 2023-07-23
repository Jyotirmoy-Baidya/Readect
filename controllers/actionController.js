const Reader = require("../models/readerModel");
const { Poem, ShortStory, Article } = require("../models/psaModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const mongoose = require("mongoose");
const Review = require("../models/reviewModel");

exports.getAllPoems = catchAsync(async (req, res) => {
  const poems = await Poem.find();

  res.status(200).json({
    status: "success",
    results: poems.length,
    data: { poems },
  });
});

exports.getPoem = catchAsync(async (req, res, next) => {
  const poem = await Poem.findById(req.params.poemId).populate({
    path: "comments",
    select: "comments -genreIdentifier -_id",
  });

  res.status(200).json({
    status: "success",
    poem,
  });
});

exports.uploadPoem = catchAsync(async (req, res, next) => {
  const poemObj = {
    userId: req.reader._id,
    name: req.reader.name,
    ...req.body,
  };
  const poem = await Poem.create(poemObj);
  req.updatedPoemId = poem._id;

  next();
});

exports.updatePoem = catchAsync(async (req, res, next) => {
  const updatedReader = await Poem.findByIdAndUpdate(
    req.params.poemId,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  Object.keys(req.body).forEach((key) => {
    if (key === "title") next();
  });

  res.status(200).json({
    status: "success",
    data: { updatedReader },
  });
});

exports.likePoem = catchAsync(async (req, res, next) => {
  const poem = await Reader.findOneAndUpdate(
    { _id: req.reader._id },
    { $push: { likedPoems: req.body.likedPoemId } },
    {
      runValidators: true,
      returnDocument: "after",
      projection: { likedPoems: 1 },
    }
  );

  res.status(200).json({
    status: "success",
    poem,
  });
});

exports.deletePoem = catchAsync(async (req, res, next) => {
  await Poem.findByIdAndDelete(req.params.poemId);
  next();
});

exports.testController = catchAsync(async (req, res, next) => {
  // const result = await req.reader.poems.findById(req.params.poemId);
  const result = await Reader.findById(req.params.poemId);

  res.status(200).json({
    message: "success",
    data: { result },
  });
});
