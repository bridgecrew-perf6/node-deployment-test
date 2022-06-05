const express = require("express");
const router = express.Router();

const charactersController = require("../controllers/charactersController");

router
  .route("/")
  .get(charactersController.getAll)
  .post(charactersController.createOne);

router
  .route("/:id")
  .get(charactersController.getOne)
  .patch(charactersController.patchOne)
  .delete(charactersController.deleteOne);

module.exports = router;
