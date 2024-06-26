const express = require('express');
const router = express.Router();
const {
  addPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} = require('../controllers/patientController');
const { updatePatientStatus } = require('../controllers/patientController');

// Routes
router.route('/').post(addPatient).get(getAllPatients);
router.route('/:id').get(getPatientById).put(updatePatient).delete(deletePatient);
router.route('/:id/status').put(updatePatientStatus); // New route for updating patient status

module.exports = router;
