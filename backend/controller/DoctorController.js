const Doctor = require('../models/Doctor');
const Appointment = require('../models/appointment');

// Get doctor's profile and associated appointments
const getDoctorProfile = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const doctor = await Doctor.findById(doctorId).populate('appointments');
    
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found.' });
    }

    res.status(200).json(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch doctor profile.' });
  }
};

// Update doctor's profile details
const updateDoctorProfile = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const updateData = req.body;

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      doctorId,
      updateData,
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ error: 'Doctor not found.' });
    }

    res.status(200).json(updatedDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update doctor profile.' });
  }
};

module.exports = {
  getDoctorProfile,
  updateDoctorProfile,
};
