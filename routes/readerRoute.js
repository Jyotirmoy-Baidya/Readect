const express = require("express");
const router = express.Router();
const {
  getReaders,
  getReader,
  deleteReader,
} = require("../controllers/readerController");

const { signup, login, protect } = require("../controllers/authController");

router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/getAllReaders").get(getReaders);
router.route("/").get(protect, getReader).delete(protect, deleteReader);

module.exports = router;
