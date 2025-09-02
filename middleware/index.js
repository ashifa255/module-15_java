// Custom middleware functions

const logger = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
};

const validateRequest = (req, res, next) => {
  // Sample validation middleware
  if (req.method === 'POST' && !req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is required for POST requests"
    });
  }
  next();
};

module.exports = {
  logger,
  validateRequest
};
