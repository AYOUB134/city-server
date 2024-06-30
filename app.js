const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const patientRoutes = require('./routes/patientRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const userRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes'); // Import doctor routes
const errorHandler = require('./utils/errorHandler');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());
app.use(cors()); 

app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/doctors', doctorRoutes); // Use doctorRoutes for /api/v1/doctors

app.use(errorHandler);

module.exports = app;
