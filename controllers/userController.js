const User = require('../models/User');
const Assignment = require('../models/Assignment');
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.create({ name, email, password, role });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true }).json({ message: 'User registered', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// User login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true }).json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Upload assignment
exports.uploadAssignment = async (req, res) => {
  const { task, adminId } = req.body;
  try {
    const assignment = await Assignment.create({
      userId: req.user._id,
      task,
      admin: adminId,
    });
    res.json({ message: 'Assignment uploaded', assignment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all admins
exports.getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' });
    res.json(admins);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
