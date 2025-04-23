const express = require('express');
const router = express.Router();
const { getAllTechItems } = require('../controllers/techController');

router.get('/', getAllTechItems);

module.exports = router;
