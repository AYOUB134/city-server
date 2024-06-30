const express = require('express');
const {
    getDoctors,
    getDoctor,
    addDoctor,
    updateDoctor,
    deleteDoctor
} = require('../controllers/doctorController');

const router = express.Router();

router
    .route('/')
    .get(getDoctors)
    .post(addDoctor);

router
    .route('/:id')
    .get(getDoctor)
    .put(updateDoctor)
    .delete(deleteDoctor);

module.exports = router;
