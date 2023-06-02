const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
        // we are passing the error to the next-middleware(custom error handler)
      next(error);
    }
  };
};

module.exports = asyncWrapper;
