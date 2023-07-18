const express = require("express");
const router = express.Router();
const {
  createReader,
  getReaders,
  getReader,
  deleteReader,
} = require("../controllers/readerController");

const { signup, login, protect } = require("../controllers/authController");

router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/").get(getReaders).post(createReader);
router.route("/getReader").get(protect, getReader).delete(deleteReader);

module.exports = router;
