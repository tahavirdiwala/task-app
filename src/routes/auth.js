const express = require("express");
const router = express.Router();
const { createTask, taskList } = require("../controllers/auth");
const {
  isRequestValidated,
  validateCreateTask,
} = require("../validators/auth");

router
  .route("/tasks/create")
  .post(validateCreateTask, isRequestValidated, createTask);

router.route("/tasks").get(taskList);

module.exports = router;
