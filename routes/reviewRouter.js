const express = require("express");
const {
  createReview,
  postComment,
  deleteComment,
  getAllReviews,
} = require("./../controllers/reviewController");
const { protect } = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.route("/").post(protect, postComment).delete(protect, deleteComment);

router.route("/:poemId").get(getAllReviews);

module.exports = router;
