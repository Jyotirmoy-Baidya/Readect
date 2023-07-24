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

exports.follow = catchAsync(async (req, res, next) => {
  //Update followings
  const result = await Reader.findByIdAndUpdate(
    req.reader._id,
    {
      $inc: { followingCount: 1 },
      $push: { followings: req.params.followId },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  //Update followers
  await Reader.findByIdAndUpdate(
    req.params.followId,
    {
      $inc: { followerCount: 1 },
      $push: { followers: req.reader._id },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    message: "success",
    data: { result },
  });
});

exports.getFollowers = catchAsync(async (req, res, next) => {
  const result = await Reader.findById(req.reader._id)
    .select("followers followerCount")
    .populate({
      path: "followers",
      select: "name followingCount followerCount",
    });

  res.status(200).json({
    message: "success",
    data: { result },
  });
});

exports.getFollowings = catchAsync(async (req, res, next) => {
  const result = await Reader.findById(req.reader._id)
    .select("followings followingCount")
    .populate({
      path: "followings",
      select: "name followingCount followerCount",
    });

  res.status(200).json({
    message: "success",
    data: { result },
  });
});
