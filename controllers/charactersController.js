const Character = require("../models/charactersModel");

exports.getAll = async (req, res) => {
  try {
    const characters = await Character.find();

    res.status(200).json({
      status: "success",
      results: characters.length,
      data: { characters },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: { character },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createOne = async (req, res) => {
  try {
    const newCharacter = req.body;

    await Character.create(newCharacter);

    res.status(201).json({
      status: "success",
      message: "Character created",
      data: newCharacter,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.patchOne = async (req, res) => {
  try {
    const character = await Character.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      status: "success",
      data: { character },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const character = await Character.findByIdAndRemove(req.params.id);

    res.status(404).json({ status: "fail", data: null });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
