const Doctor = require('../models/Doctor');

// Get all doctors
exports.getDoctors = async (req, res, next) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json({ success: true, data: doctors });
    } catch (err) {
        next(err);
    }
};

// Get a single doctor
exports.getDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.status(200).json({ success: true, data: doctor });
    } catch (err) {
        next(err);
    }
};

// Add a new doctor
exports.addDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json({ success: true, data: doctor });
    } catch (err) {
        next(err);
    }
};

// Update a doctor
exports.updateDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.status(200).json({ success: true, data: doctor });
    } catch (err) {
        next(err);
    }
};

// Delete a doctor
exports.deleteDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        next(err);
    }
};
