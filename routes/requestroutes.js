const express = require('express');
const router = express.Router();
const { handleGetRequest, handlePostRequest } = require('../controllers/requestController');

// GET request endpoint
router.get('/get-request', handleGetRequest);

// POST request endpoint
router.post('/post-request', handlePostRequest);

module.exports = router;
