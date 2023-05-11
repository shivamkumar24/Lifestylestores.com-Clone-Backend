const express = require("express");
const womenRouter = express.Router();
const { WomenModel } = require("../models/women.model");

// GET
womenRouter.get("/", async (req, res) => {
  try {
    const womens = await WomenModel.find();
    res.status(200).send({ womens });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// POST
womenRouter.post("/add", async (req, res) => {
  try {
    const newWomenItem = new WomenModel(req.body);
    await newWomenItem.save();
    res.status(200).send({ msg: "New women item added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// UPDATE
womenRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Upadte Request id: ", id);

  try {
    await WomenModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Women item record updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// DELETE
womenRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Delete Request id: ", id);

  try {
    await WomenModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Women item record deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  womenRouter,
};
