const Manufacturer = require('../models/Manufacturer');

exports.getManufacturers = async (req, res) => {
  try {
    const data = await Manufacturer.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching manufacturers' });
  }
};

exports.getManufacturerById = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);
    if (!manufacturer) return res.status(404).json({ msg: 'Not found' });
    res.json(manufacturer);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
