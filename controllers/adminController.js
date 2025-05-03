const Manufacturer = require('../models/Manufacturer');

exports.addManufacturer = async (req, res) => {
  try {
    const newManufacturer = new Manufacturer(req.body);
    await newManufacturer.save();
    res.status(201).json(newManufacturer);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating manufacturer' });
  }
};

exports.updateManufacturer = async (req, res) => {
  try {
    const updated = await Manufacturer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ msg: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: 'Error updating manufacturer' });
  }
};

exports.deleteManufacturer = async (req, res) => {
  try {
    const deleted = await Manufacturer.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: 'Not found' });
    res.json({ msg: 'Manufacturer deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Error deleting manufacturer' });
  }
};

exports.getAllManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find();
    res.json(manufacturers);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching manufacturers' });
  }
};
