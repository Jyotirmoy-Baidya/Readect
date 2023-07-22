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
  shortStories: {
    type: [psaSchema],
    default: [],
  },
  articles: {
    type: [psaSchema],
    default: [],
  },
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
  next();
});

readerSchema.methods.ifCorrectPassword = function (
  enteredPassword,
  actualPassword
) {
  return bcrypt.compare(enteredPassword, actualPassword);
};
// readerSchema.post("save", function (doc, next) {
//   console.log("hey there💥", doc);
//   next();
// });

// readerSchema.pre(/^update/, function (next) {
//   console.log("Updating");
//   next();
// });
// readerSchema.post(/^findOneAndUpdate/, function (doc, next) {
//   console.log("Updating post", doc);
//   next();
// });

// readerSchema.post("save", function (doc) {
//   console.log("%s has been saved", doc._id);
// });
const Reader = mongoose.model("Reader", readerSchema);
module.exports = Reader;
