const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true ,lowercase: true,unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  requests: [{ type: String }], // Store user requests if needed
});

const User = mongoose.model('User', userSchema);
module.exports = User;
