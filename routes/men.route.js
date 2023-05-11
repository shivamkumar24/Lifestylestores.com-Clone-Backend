const express = require("express");
const menRouter = express.Router();
const { MenModel } = require("../models/men.model");

// GET
menRouter.get("/", async (req, res) => {
  try {
    const mens = await MenModel.find();
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
