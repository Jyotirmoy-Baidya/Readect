const express = require("express");
const router = express.Router();
const {
  uploadPoem,
  getAllPoems,
  getPoem,
  updatePoem,
  likePoem,
  deletePoem,
  testController,
} = require("../controllers/actionController");
const { protect } = require("../controllers/authController");
const {
  createReview,
  updateReviewGenreName,
  deleteReview,
} = require("../controllers/reviewController");

const reviewRouter = require("./reviewRouter");

router.route("/").get(getAllPoems);
router.route("/getPoem/:poemId").get(protect, getPoem);
router.use("/getPoem/:poemId/reviews", reviewRouter);

router.route("/").post(protect, uploadPoem, createReview);

router.route("/:poemId").patch(protect, updatePoem, updateReviewGenreName);

router.route("/:poemId").delete(protect, deletePoem, deleteReview);

router.route("/likePoem").post(protect, likePoem);

router.route("/testRoute/:poemId").get(protect, testController);

module.exports = router;
