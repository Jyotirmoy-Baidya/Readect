const express = require("express");
const {
  createReview,
  postComment,
  deleteComment,
  getAllReviews,
  updateComment,
} = require("./../controllers/reviewController");
const { protect } = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router.route("/").post(protect, postComment).delete(protect, deleteComment);

router.route("/:commentId").patch(protect, updateComment);

router.route("/:poemId").get(getAllReviews);

module.exports = router;
