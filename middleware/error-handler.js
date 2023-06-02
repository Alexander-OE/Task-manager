const { CustomAPIError } = require("../errors/custom-error");

// Custom error handler
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  // console.log(err);
  return res.status(err.status).json({ msg: 'Something went wrong, please try again' });
};

module.exports = errorHandlerMiddleware;
