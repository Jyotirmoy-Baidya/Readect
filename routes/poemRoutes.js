const express = require("express");
const router = express.Router();
const {
  uploadPoem,
  getAllPoems,
  getPoem,
  updatePoem,
  likePoem,
  unlikePoem,
  dislikePoem,
  getLikedPoems,
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

router
  .route("/:poemId")
  .patch(protect, updatePoem, updateReviewGenreName)
  .delete(protect, deletePoem, deleteReview);

router.route("/:poemId/like").post(protect, likePoem);
router.route("/:poemId/unlike").post(protect, unlikePoem);
router.route("/:poemId/dislike").post(protect, dislikePoem);
router.route("/likedPoems").get(protect, getLikedPoems);

router.route("/testRoute/:poemId").get(protect, testController);

module.exports = router;
