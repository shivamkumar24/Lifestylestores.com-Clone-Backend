const express = require("express");
const menRouter = express.Router();
const { MenModel } = require("../models/men.model");

// GET
menRouter.get("/", async (req, res) => {
  const { sort, order, category, page } = req.query;

  if (sort === "price" && order && page) {
    if (order === "asc") {
      try {
        const mens = await MenModel.find()
          .sort({ price: +1 })
          .skip(12 * Number(page - 1))
          .limit(12);
        res.status(200).send({ mens });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    } else if (order === "desc") {
      try {
        const mens = await MenModel.find()
          .sort({ price: -1 })
          .skip(12 * Number(page - 1))
          .limit(12);
        res.status(200).send({ mens });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    }
  } else if (sort === "price" && order && category) {
    // Here we check sorting by price and category
    if (order === "asc") {
      try {
        const mens = await MenModel.find({ category: category }).sort({
          price: +1,
        });
        res.status(200).send({ mens });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    } else if (order === "desc") {
      try {
        const mens = await MenModel.find({ category: category }).sort({
          price: -1,
        });
        res.status(200).send({ mens });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    }
  } else if (category && page) {
    try {
      const mens = await MenModel.find({ category: category })
        .skip(12 * Number(page - 1))
        .limit(12);
      res.status(200).send({ mens });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  } else if ((page, sort)) {
    // Here check by page number
    try {
      const mens = await MenModel.find()
        .skip(12 * Number(page - 1))
        .limit(12);
      res.status(200).send({ mens });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }
});

// GET By ID
menRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const mens = await MenModel.findById({ _id: id });
    res.status(200).send({ mens });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// POST
menRouter.post("/add", async (req, res) => {
  try {
    const newMenItem = new MenModel(req.body);
    await newMenItem.save();
    res.status(200).send({ msg: "New men item added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// UPDATE
menRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Upadte Request id: ", id);

  try {
    await MenModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Men item record updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// DELETE
menRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Delete Request id: ", id);

  try {
    await MenModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Men item record deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  menRouter,
};
