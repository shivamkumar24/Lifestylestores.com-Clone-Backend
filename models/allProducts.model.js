const mongoose = require("mongoose");

const allProcuctsSchema = mongoose.Schema(
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

const AllProductsModel = mongoose.model("allProducts", allProcuctsSchema);

module.exports = {
  AllProductsModel,
};
