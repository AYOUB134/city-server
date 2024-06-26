const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const patientRoutes = require('./routes/patientRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const userRoutes =require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());

app.use(cors()); // Use CORS middleware

app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1/users', userRoutes); // Use userRoutes for /api/v1/users


app.use(errorHandler);

module.exports = app;

