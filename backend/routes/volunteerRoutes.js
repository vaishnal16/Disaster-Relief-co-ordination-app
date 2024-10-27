const express = require('express');
const { registerVolunteer, loginVolunteer } = require('../controllers/volunteerController');
const router = express.Router();

router.post('/register', registerVolunteer);
router.post('/login', loginVolunteer);

module.exports = router;
