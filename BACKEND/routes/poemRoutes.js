const express = require("express");
const router = express.Router();
const {
  uploadPoem,
  getAllPoems,
  getPoem,
  searchPoem,
  updatePoem,
  likePoem,
  unlikePoem,
  dislikePoem,
  getLikedPoems,
  getReadLaterPoem,
  readLaterPoem,
  removefromReadLaterPoem,
  deletePoem,
  testController,
} = require("../controllers/poemController");
const { protect } = require("../controllers/authController");
const {
  createReview,
  updateReviewGenreName,
  deleteReview,
} = require("../controllers/reviewController");

const reviewRouter = require("./reviewRouter");

router.route("/").get(getAllPoems).post(protect, uploadPoem, createReview);
router.route("/:poemId").get(protect, getPoem);
router.use("/getPoem/:genreId/reviews", reviewRouter);

// router.route("/").post(protect, uploadPoem, createReview);
//genreId
router
  .route("/:genreId")
  .patch(protect, updatePoem, updateReviewGenreName)
  .delete(protect, deletePoem, deleteReview);

router.route("/search/:title").get(searchPoem);

router.route("/:poemId/like").post(protect, likePoem);
router.route("/:poemId/unlike").post(protect, unlikePoem);
router.route("/:poemId/dislike").post(protect, dislikePoem);
router.route("/likedPoems").get(protect, getLikedPoems);

router.route("/getReadLater").get(protect, getReadLaterPoem);
router.route("/:poemId/readLater").post(protect, readLaterPoem);
router
  .route("/:poemId/removefromReadLater")
  .post(protect, removefromReadLaterPoem);

router.route("/testRoute/:poemId").get(protect, testController);

module.exports = router;
