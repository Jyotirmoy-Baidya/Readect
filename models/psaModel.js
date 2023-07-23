const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const psaSchema = new Schema(
  {
    userId: {
      type: Schema.ObjectId,
      required: [true, "Please provide the user Id"],
    },
    name: {
      type: String,
      required: [true, "Please provide the userName"],
    },
    title: {
      type: String,
      required: [true, "This post must have a title"],
    },
    content: {
      type: String,
      required: [true, "This post must have some content"],
    },
    tags: {
      type: [String],
    },
    coverImage: {
      type: String,
    },
    uploadDate: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
    firstUploadTime: {
      type: String,
      default: new Date().toLocaleTimeString(),
    },
    updateTime: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

psaSchema.virtual("comments", {
  ref: "Review",
  foreignField: "genreIdentifier",
  localField: "_id",
});

exports.Poem = mongoose.model("Poem", psaSchema);
exports.ShortStory = mongoose.model("ShortStory", psaSchema);
exports.Article = mongoose.model("Article", psaSchema);
