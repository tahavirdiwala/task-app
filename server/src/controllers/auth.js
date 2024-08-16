const { StatusCodes } = require("http-status-codes");
const TaskModel = require("../models/auth");
const sendResponse = require("../common");

const createTask = async (req, res) => {
  const { name, description, status, dueDate } = req.body;

  const payload = {
    name,
    description,
    status,
    dueDate,
  };

  TaskModel.create(payload).then((_, error) => {
    if (error) {
      res.status(StatusCodes.BAD_REQUEST).json({
        statusCode: StatusCodes.BAD_REQUEST,
        message: error,
      });
    } else {
      res.status(StatusCodes.CREATED).json({
        statusCode: StatusCodes.CREATED,
        message: "Task Created Successfully",
      });
    }
  });
};

const taskList = async (_, response) => {
  new Promise((resolve, reject) => {
    try {
      TaskModel.find().then((data) => {
        resolve(
          sendResponse(
            response,
            StatusCodes.OK,
            "Tasks fetched successfully",
            data
          )
        );
      });
    } catch (error) {
      reject(
        sendResponse(response, StatusCodes.BAD_GATEWAY, "Something Went Wrong")
      );
    }
  });
};

module.exports = { createTask, taskList };
