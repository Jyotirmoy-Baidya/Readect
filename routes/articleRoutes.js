const express = require("express");
const router = express.Router();
const {
  uploadArticle,
  getAllArticles,
  getArticle,
  updateArticle,
  likeArticle,
  unlikeArticle,
  dislikeArticle,
  getLikedArticles,
  getReadLaterArticle,
  readLaterArticle,
  removefromReadLaterArticle,
  deleteArticle,
} = require("../controllers/articleController");
const { protect } = require("../controllers/authController");
const {
  createReview,
  updateReviewGenreName,
  deleteReview,
} = require("../controllers/reviewController");

const reviewRouter = require("./reviewRouter");

router
  .route("/")
  .get(getAllArticles)
  .post(protect, uploadArticle, createReview);
router.route("/getArticle/:articleId").get(protect, getArticle);
router.use("/getArticle/:genreId/reviews", reviewRouter);

router
  .route("/:genreId")
  .patch(protect, updateArticle, updateReviewGenreName)
  .delete(protect, deleteArticle, deleteReview);

router.route("/:articleId/like").post(protect, likeArticle);
router.route("/:articleId/unlike").post(protect, unlikeArticle);
router.route("/:articleId/dislike").post(protect, dislikeArticle);
router.route("/likedArticles").get(protect, getLikedArticles);

router.route("/getReadLater").get(protect, getReadLaterArticle);
router.route("/:articleId/readLater").post(protect, readLaterArticle);
router
  .route("/:articleId/removefromReadLater")
  .post(protect, removefromReadLaterArticle);

module.exports = router;
