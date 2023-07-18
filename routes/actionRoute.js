const express = require("express");
const router = express.Router();
const {
  uploadPoem,
  getAllPoems,
  updatePoem,
  updatePoemContent,
  updatePoemTags,
  deletePoem,
} = require("../controllers/actionController");

const { protect } = require("../controllers/authController");

router.route("/poem/getAllPoems").get(getAllPoems);
router.route("/poem/uploadPoem").patch(protect, uploadPoem);

router.route("/poem/updatePoem/:fieldName/:poemId").patch(protect, updatePoem);

router.route("/poem/deletePoem/:poemId").delete(protect, deletePoem);

module.exports = router;
