const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// POST /api/v1/notifications
router.post('/', notificationController.addNotification);

// GET /api/v1/notifications
router.get('/', notificationController.getAllNotifications);

module.exports = router;
