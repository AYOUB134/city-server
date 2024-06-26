const Notification = require('../models/Notification');
const errorHandler = require('../utils/errorHandler');

// POST /api/v1/notifications
const addNotification = async (req, res) => {
  try {
    const { message } = req.body;
    const newNotification = new Notification({ message });
    const notification = await newNotification.save();
    res.status(201).json(notification);
  } catch (err) {
    errorHandler(err, res);
  }
};

// GET /api/v1/notifications
const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (err) {
    errorHandler(err, res);
  }
};

module.exports = {
  addNotification,
  getAllNotifications,
};
