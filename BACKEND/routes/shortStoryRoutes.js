const express = require("express");
const router = express.Router();
const {
  getAllShortStories,
  getShortStory,
  updateShortStory,
  uploadShortStory,
  likeShortStory,
  unlikeShortStory,
  dislikeShortStory,
  getLikedShortStories,
  getReadLaterShortStory,
  readLaterShortStory,
  removefromReadLaterShortStory,
  deleteShortStory,
} = require("../controllers/shortStoryController");
const { protect } = require("../controllers/authController");
const {
  createReview,
  updateReviewGenreName,
  deleteReview,
} = require("../controllers/reviewController");

const reviewRouter = require("./reviewRouter");

router
  .route("/")
  .get(getAllShortStories)
  .post(protect, uploadShortStory, createReview);
router.route("/:shortStoryId").get(protect, getShortStory);
router.use("/getShortStory/:genreId/reviews", reviewRouter);

router
  .route("/:genreId")
  .patch(protect, updateShortStory, updateReviewGenreName)
  .delete(protect, deleteShortStory, deleteReview);

router.route("/:shortStoryId/like").post(protect, likeShortStory);
router.route("/:shortStoryId/unlike").post(protect, unlikeShortStory);
router.route("/:shortStoryId/dislike").post(protect, dislikeShortStory);
router.route("/likedShortStories").get(protect, getLikedShortStories);

router.route("/getReadLater").get(protect, getReadLaterShortStory);
router.route("/:shortStoryId/readLater").post(protect, readLaterShortStory);
router
  .route("/:shortStoryId/removefromReadLater")
  .post(protect, removefromReadLaterShortStory);

module.exports = router;
