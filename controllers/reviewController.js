const Reader = require("../models/readerModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");
const Review = require("../models/reviewModel");

exports.createReview = catchAsync(async (req, res, next) => {
  const reviewObject = {
    genreIdentifier: req.updatedPoemId,
    genreName: req.body.title,
    comments: [],
  };
  const newReview = await Review.create(reviewObject);

  res.status(200).json({
    status: "success",
    data: newReview,
  });
});

exports.getAllReviews = catchAsync(async (req, res) => {
  const reviews = await Review.find({ genreIdentifier: req.params.poemId });
  res.status(200).json({
    status: "success",
    results: reviews.length,
    data: { reviews },
  });
});

exports.postComment = catchAsync(async (req, res, next) => {
  const commentObj = {
    name: req.reader.name,
    email: req.reader.email,
    comment: req.body.comment,
  };
  const Comments = await Review.findOneAndUpdate(
    { genreIdentifier: req.params.poemId },
    { $push: { comments: commentObj } },
    { runValidators: true, returnDocument: "after" }
  );

  res.status(200).json({
    status: "success",
    data: Comments,
  });
});

exports.updateComment = catchAsync(async (req, res, next) => {
  const doc = await Review.find({ genreIdentifier: req.params.poemId });
  let comments;
  doc[0].comments.forEach((comment) => {
    if (comment.email === req.reader.email) {
      comment.comment = req.body.comment;
      comment.updateTime = new Date().toLocaleTimeString();
      comments = doc[0].comments;
    }
  });

  const updatedComments = await Review.findOneAndUpdate(
    { genreIdentifier: req.params.poemId },
    { comments },
    { runValidators: true, returnDocument: "after" }
  );

  res.status(200).json({
    status: "success",
    data: updatedComments,
  });
});

exports.deleteComment = catchAsync(async (req, res) => {
  const result = await Review.findOneAndUpdate(
    { genreIdentifier: req.params.poemId },
    { $pull: { comments: { _id: { $eq: req.params.commentId } } } },
    { runValidators: true, returnDocument: "after" }
  );

  res.status(200).json({
    message: "success",
    data: { result },
  });
});
