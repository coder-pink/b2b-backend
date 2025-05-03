const express = require('express');
const {

  addManufacturer,
  updateManufacturer,
  deleteManufacturer,
  getAllManufacturers
} = require('../controllers/adminController');

const { auth } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/manufacturer', auth, getAllManufacturers);
router.post('/manufacturer', auth, addManufacturer);
router.put('/manufacturer/:id', auth, updateManufacturer);
router.delete('/manufacturer/:id', auth, deleteManufacturer);

module.exports = router;
