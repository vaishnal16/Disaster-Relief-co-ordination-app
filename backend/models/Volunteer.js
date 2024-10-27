const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true ,lowercase: true,unique: true },
  password: { type: String, required: true },
  resources: [{ type: String }], // Store resources provided by the volunteer
  region: { type: String }, // Region where the volunteer operates
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);
module.exports = Volunteer;
