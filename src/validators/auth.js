const { check, validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const validateCreateTask = [
  check("name").notEmpty().withMessage("name cannot be empty"),
  check("dueDate").custom((value) => {
    const dueDate = new Date(value);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (dueDate <= today) {
      throw new Error("DueDate should be a future date");
    }
    return true;
  }),
];

const isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.array().length > 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      statusCode: StatusCodes.BAD_REQUEST,
      message: errors.array()[0].msg,
    });
  }
  next();
};

module.exports = {
  validateCreateTask,
  isRequestValidated,
};
