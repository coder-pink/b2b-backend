const express = require('express');
const { getManufacturers, getManufacturerById } = require('../controllers/manufacturerController');
const {auth} = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/manufacturers', auth, getManufacturers);
router.get('/manufacturer/:id', auth, getManufacturerById);

module.exports = router;
