const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialist: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
