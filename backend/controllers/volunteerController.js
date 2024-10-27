const Volunteer = require('../models/Volunteer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register Volunteer
exports.registerVolunteer = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const volunteer = await Volunteer.create({ username, email, password: hashedPassword });
    
    const token = jwt.sign({ id: volunteer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'Volunteer registered', token, volunteer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login Volunteer
exports.loginVolunteer = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const volunteer = await Volunteer.findOne({ email });
    if (!volunteer || !(await bcrypt.compare(password, volunteer.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: volunteer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, volunteer: { id: volunteer._id, username: volunteer.username } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
