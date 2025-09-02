// Handle GET request
const handleGetRequest = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "I am get request.",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error handling GET request",
      error: error.message
    });
  }
};

// Handle POST request
const handlePostRequest = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "I am post request.",
      timestamp: new Date().toISOString(),
      data: req.body // Optional: include request body if needed
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error handling POST request",
      error: error.message
    });
  }
};

module.exports = {
  handleGetRequest,
  handlePostRequest
};
