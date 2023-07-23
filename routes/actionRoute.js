const express = require("express");
const router = express.Router();
const {
  uploadPoem,
  getAllPoems,
  getPoem,
  updatePoem,
  deletePoem,
} = require("../controllers/actionController");
const { protect } = require("../controllers/authController");
const { createReview } = require("../controllers/reviewController");

const reviewRouter = require("./reviewRouter");

router.route("/poem/getAllPoems").get(getAllPoems);
router.route("/poem/getPoem/:poemId").get(protect, getPoem);
router.use("/poem/getPoem/:poemId/reviews", reviewRouter);

router.route("/poem/uploadPoem").patch(protect, uploadPoem, createReview);

router.route("/poem/updatePoem/:fieldName/:poemId").patch(protect, updatePoem);

router.route("/poem/deletePoem/:poemId").delete(protect, deletePoem);

module.exports = router;
