const express = require("express");
const bagRouter = express.Router();
const { BagModel } = require("../models/bag.model");

// GET
bagRouter.get("/", async (req, res) => {
  const { sort, order, category, page } = req.query;

  if (sort === "price" && order && page) {
    if (order === "asc") {
      try {
        const bags = await BagModel.find()
          .sort({ price: +1 })
          .skip(12 * Number(page - 1))
          .limit(12);
        res.status(200).send({ bags });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    } else if (order === "desc") {
      try {
        const bags = await BagModel.find()
          .sort({ price: -1 })
          .skip(12 * Number(page - 1))
          .limit(12);
        res.status(200).send({ bags });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    }
  } else if (sort === "price" && order && category) {
    // Here we check sorting by price and category
    if (order === "asc") {
      try {
        const bags = await BagModel.find({ category: category }).sort({
          price: +1,
        });
        res.status(200).send({ bags });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    } else if (order === "desc") {
      try {
        const bags = await BagModel.find({ category: category }).sort({
          price: -1,
        });
        res.status(200).send({ bags });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    }
  } else if (category && page) {
    try {
      const bags = await BagModel.find({ category: category })
        .skip(12 * Number(page - 1))
        .limit(12);
      res.status(200).send({ bags });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  } else if ((page, sort)) {
    // Here check by page number
    try {
      const bags = await BagModel.find()
        .skip(12 * Number(page - 1))
        .limit(12);
      res.status(200).send({ bags });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }
});

// GET By ID
bagRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const bags = await BagModel.findById({ _id: id });
    res.status(200).send({ bags });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// POST
bagRouter.post("/add", async (req, res) => {
  try {
    const newBagItem = new BagModel(req.body);
    await newBagItem.save();
    res.status(200).send({ msg: "New bag item added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// UPDATE
bagRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Upadte Request id: ", id);

  try {
    await BagModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Bag item record updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// DELETE
bagRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Delete Request id: ", id);

  try {
    await BagModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Bag item record deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  bagRouter,
};
