const express = require("express");
const beautyRouter = express.Router();
const { BeautyModel } = require("../models/beauty.model");

// GET
beautyRouter.get("/", async (req, res) => {
  const { sort, order, category, page } = req.query;

  if (sort === "price" && order && category) {
    // Here we check sorting by price and category
    if (order === "asc") {
      try {
        const beauties = await BeautyModel.find({ category: category }).sort({
          price: +1,
        });
        res.status(200).send({ beauties });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    } else if (order === "desc") {
      try {
        const beauties = await BeautyModel.find({ category: category }).sort({
          price: -1,
        });
        res.status(200).send({ beauties });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    }
  } else if (category) {
    // Here we check category wise
    try {
      const beauties = await BeautyModel.find({ category: category });
      res.status(200).send({ beauties });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  } else if (sort === "price" && order) {
    // Here we check sorting by price
    if (order === "asc") {
      try {
        const beauties = await BeautyModel.find().sort({ price: +1 });
        res.status(200).send({ beauties });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    } else if (order === "desc") {
      try {
        const beauties = await BeautyModel.find().sort({
          price: -1,
        });
        res.status(200).send({ beauties });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    }
  } else if (page) {
    // Here check by page number
    try {
      const beauties = await BeautyModel.find()
        .skip(12 * Number(page - 1))
        .limit(12);
      res.status(200).send({ beauties });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  } else {
    try {
      const beauties = await BeautyModel.find();
      res.status(200).send({ beauties });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }
});

// POST
beautyRouter.post("/add", async (req, res) => {
  try {
    const newBeautyItem = new BeautyModel(req.body);
    await newBeautyItem.save();
    res.status(200).send({ msg: "New beauty item added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// UPDATE
beautyRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Upadte Request id: ", id);

  try {
    await BeautyModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Beauty item record updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// DELETE
beautyRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Delete Request id: ", id);

  try {
    await BeautyModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Beauty item record deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  beautyRouter,
};
