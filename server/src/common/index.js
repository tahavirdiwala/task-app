const sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
    data: data,
  });
};
module.exports = sendResponse;
