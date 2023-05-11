const mongoose = require("mongoose");

const kidSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    img4: { type: String, required: true },
    price: { type: Number, required: true },
    actualPrice: { type: Number, required: true },
    category: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const KidModel = mongoose.model("kids", kidSchema);

module.exports = {
  KidModel,
};
