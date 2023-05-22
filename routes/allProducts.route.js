const express = require("express");
const allProductsRouter = express.Router();
const { AllProductsModel } = require("../models/allProducts.model");

// GET
allProductsRouter.get("/", async (req, res) => {
  try {
    const allProducts = await AllProductsModel.find();
    res.status(200).send({ allProducts });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// POST
allProductsRouter.post("/add", async (req, res) => {
  try {
    const newProductItem = new AllProductsModel(req.body);
    await newProductItem.save();
    // await AllProductsModel.insertMany(req.body);
    res.status(200).send({ msg: "New product item added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// UPDATE
allProductsRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Upadte Request id: ", id);

  try {
    await AllProductsModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Product item record updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// DELETE
allProductsRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Delete Request id: ", id);

  try {
    await AllProductsModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Product item record deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  allProductsRouter,
};
