const express = require("express");
const router = express.Router();
const { createTask, taskList } = require("../controllers/auth");
const {
  isRequestValidated,
  validateCreateTask,
} = require("../validators/auth");

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get a list of all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Tasks fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Bad Request
 *         content:
 *          application/json:
 *            example:
 *             error:
 *              message: "Bad Request"
 */
//Get All Tasks

router.route("/tasks").get(taskList);

/**
 * @swagger
 * /tasks/create:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       description: Task object to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: date
 *               dueDate:
 *                 type: date
 *             example:
 *                name: "learning javascript"
 *                description: "some long description...."
 *                dueDate: 2024/08/16
 *                status: "Pending"
 *     responses:
 *       201:
 *         description: Task Created Successfully
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Invalid request
 */

router
  .route("/tasks/create")
  .post(validateCreateTask, isRequestValidated, createTask);

module.exports = router;
