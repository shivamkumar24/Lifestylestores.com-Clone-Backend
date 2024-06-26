const express = require("express");
const kidRouter = express.Router();
const { KidModel } = require("../models/kid.model");

// GET
kidRouter.get("/", async (req, res) => {
  const { sort, order, category, page } = req.query;

  if (sort === "price" && order && page) {
    if (order === "asc") {
      try {
        const kids = await KidModel.find()
          .sort({ price: +1 })
          .skip(12 * Number(page - 1))
          .limit(12);
        res.status(200).send({ kids });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    } else if (order === "desc") {
      try {
        const kids = await KidModel.find()
          .sort({ price: -1 })
          .skip(12 * Number(page - 1))
          .limit(12);
        res.status(200).send({ kids });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    }
  } else if (sort === "price" && order && category) {
    // Here we check sorting by price and category
    if (order === "asc") {
      try {
        const kids = await KidModel.find({ category: category }).sort({
          price: +1,
        });
        res.status(200).send({ kids });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    } else if (order === "desc") {
      try {
        const kids = await KidModel.find({ category: category }).sort({
          price: -1,
        });
        res.status(200).send({ kids });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    }
  } else if (category && page) {
    try {
      const kids = await KidModel.find({ category: category })
        .skip(12 * Number(page - 1))
        .limit(12);
      res.status(200).send({ kids });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  } else if ((page, sort)) {
    // Here check by page number
    try {
      const kids = await KidModel.find()
        .skip(12 * Number(page - 1))
        .limit(12);
      res.status(200).send({ kids });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }
});

// GET By ID
kidRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const kids = await KidModel.findById({ _id: id });
    res.status(200).send({ kids });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// POST
kidRouter.post("/add", async (req, res) => {
  try {
    const newKidsItem = new KidModel(req.body);
    await newKidsItem.save();
    res.status(200).send({ msg: "New kid item added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// UPDATE
kidRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Upadte Request id: ", id);

  try {
    await KidModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Kid item record updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// DELETE
kidRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Delete Request id: ", id);

  try {
    await KidModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Kid item record deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  kidRouter,
};
