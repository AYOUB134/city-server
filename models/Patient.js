const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Please add a contact number'],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  doctorId: {
    type: String,
    required: [true, 'Please add an doctorId'],
  },

  status: {
    type: String,
    enum: ['in', 'out'],
    default: 'in',
  },
  admissionDate: {
    type: Date,
    default: Date.now,
  },
  dischargeDate: {
    type: Date,
  },
  bill: {
    type: Number,
    required: function() {
      return this.status === 'out'; // Bill is required only when status is 'out'
    },
  },
});

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;
