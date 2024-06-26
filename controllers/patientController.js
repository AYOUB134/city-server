const Patient = require('../models/Patient');
const errorHandler = require('../utils/errorHandler');

// POST /api/v1/patients
// POST /api/v1/patients
const addPatient = async (req, res) => {
  try {
    const { name, contactNumber, address } = req.body;
    const newPatient = new Patient({ name, contactNumber, address, bill: null }); // Set bill to null initially
    const patient = await newPatient.save();
    res.status(201).json(patient);
  } catch (err) {
    errorHandler(err, res);
  }
};



// GET /api/v1/patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    errorHandler(err, res);
  }
};

// GET /api/v1/patients/:id
const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ msg: 'Patient not found' });
    }
    res.json(patient);
  } catch (err) {
    errorHandler(err, res);
  }
};

// PUT /api/v1/patients/:id
const updatePatient = async (req, res) => {
  try {
    const { name, contactNumber, address, bill, status } = req.body; // Include status in the destructuring
    let patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ msg: 'Patient not found' });
    }
    
    // Update patient fields
    patient.name = name;
    patient.contactNumber = contactNumber;
    patient.address = address;
    patient.bill = bill;

    // Handle status change logic
    if (patient.status !== 'out' && status === 'out') {
      patient.dischargeDate = new Date(); // Set discharge date to current date and time
    }
    patient.status = status; // Update status field
    
    patient = await patient.save();
    res.json(patient);
  } catch (err) {
    errorHandler(err, res);
  }
};



// DELETE /api/v1/patients/:id
const deletePatient = async (req, res) => {
  try {
    let patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ msg: 'Patient not found' });
    }
    await patient.remove();
    res.json({ msg: 'Patient removed' });
  } catch (err) {
    errorHandler(err, res);
  }
};

// PUT /api/v1/patients/:id/status
const updatePatientStatus = async (req, res) => {
  try {
    const { status, bill } = req.body;
    let patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ msg: 'Patient not found' });
    }
    patient.status = status; // Update status
    if (status === 'out') {
      patient.bill = bill; // Set bill only when status is 'out'
      patient.dischargeDate = new Date(); // Set discharge date when patient status changes to 'out'
    }
    patient = await patient.save();
    res.json(patient);
  } catch (err) {
    errorHandler(err, res);
  }
};


module.exports = {
  addPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
  updatePatientStatus,
};
