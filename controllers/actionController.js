const Reader = require("../models/readerModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");

exports.uploadPoem = catchAsync(async (req, res) => {
  const poem = await Reader.updateOne(
    { _id: req.reader._id },
    { $push: { poems: req.body } },
    { runValidators: true }
  );

  res.status(200).json({
    message: "success",
    data: { poem },
  });
});

exports.getAllPoems = catchAsync(async (req, res) => {
  try {
    const poems = await Reader.aggregate([
      { $unwind: "$poems" },
      { $sort: { ratingsAverage: 1 } },
      { $project: { poems: 1, name: 1, email: 1, _id: 0 } },
    ]);
    console.log(poems);

    res.status(200).json({
      status: "success",
      data: { poems },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

exports.deletePoem = catchAsync(async (req, res) => {
  const poem = await Reader.updateOne(
    { _id: req.reader._id },
    { $pull: { poems: { _id: { $eq: req.params.poemId } } } }
  );

  res.status(200).json({
    message: "success",
    data: { poem },
  });
});

exports.updatePoem = catchAsync(async (req, res) => {
  let result;
  let poems;
  req.reader.poems.forEach((el) => {
    if (el._id == req.params.poemId) {
      if (req.params.fieldName === "tags") {
        el.tags.push(req.body.tags);
        result = el;
        poems = req.reader.poems;
      } else if (req.params.fieldName === "content") {
        el.content = req.body.content;
        result = el;
        poems = req.reader.poems;
      } else if (req.params.fieldName === "comment") {
        el.comment.push(req.body.comment);
        result = el;
        poems = req.reader.poems;
      } else if (req.params.fieldName === "ratings") {
        el.ratings.push(req.body.ratings);
        let sum = 0;
        el.ratings.forEach((i) => (sum += i));
        let avg = sum / el.ratings.length;
        el.ratingsAverage = avg + "";
        result = el;
        poems = req.reader.poems;
      }
    }
  });

  const updatedReader = await Reader.findByIdAndUpdate(
    req.reader._id,
    { poems },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: { result },
  });
});
