const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const psaSchema = require("./psaModel");
const bcrypt = require("bcryptjs");

const readerSchema = new Schema({
  name: {
    type: String,
    required: [true, "A reader must have a name"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "please provide a valid email"],
    unique: true,
  },
  poems: {
    type: [psaSchema],
    default: [],
  },
  shortStories: [psaSchema],
  articles: [psaSchema],
  books: {
    type: Schema.Types.Mixed,
    default: ["No books uploaded yet"],
  },
  preferenceTags: {
    type: [String],
    default: [],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [8, "The entered password must be at least 8 characters long"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

readerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  console.log("hello");
  next();
});

readerSchema.methods.ifCorrectPassword = function (
  enteredPassword,
  actualPassword
) {
  return bcrypt.compare(enteredPassword, actualPassword);
};
const Reader = mongoose.model("Reader", readerSchema);
module.exports = Reader;
