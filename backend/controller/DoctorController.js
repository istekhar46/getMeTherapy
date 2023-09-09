import asyncHandler from 'express-async-handler';
import Doctor from '../models/doctorModel.js';
import { query } from 'express';
import { populate } from 'dotenv';


// @Desc    Get Doctor profile..
// @route   POST /api/Doctors/profile
// @access  private

const getDoctorProfile = asyncHandler(async (req, res) => {

  const doctor = await Doctor.findById(req.user._id).populate("reviews").select('-password')
  res.status(200).json({ doctor });
})

// @Desc    Update Doctor profile..
// @route   PUT /api/Doctors/profile
// @access  private

const updateDoctorProfile = asyncHandler(async (req, res) => {

  const doctor = await Doctor.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).select('-password')

  if (doctor) {

    res.status(200).json({ doctor })

  } else {
    res.status(404)
    throw new Error("Doctor not found")
  }
})


const deleteDoctorProfile = asyncHandler(async (req, res) => {

  const doctor = await Doctor.findByIdAndDelete(req.params.id)

  if (doctor) {

    res.status(200).json(doctor._id)

  } else {
    res.status(404)
    throw new Error("Doctor not found")
  }
})

const getAllDoctors = asyncHandler(async (req, res) => {

  const { query } = req.query;


  let doctors;

  if (query) {
    doctors = await Doctor.find({
      isApproved: "approved",
      $or: [
        { name: { $regex: query, $Option: "i" } },
        { specialization: { $regex: query, $Option: "i" } }
      ],
    }).select('-password')
  }
  else {
    doctors = await Doctor.find({ isApproved: 'approved' }).select('-password')
  }

  if (doctors) {
    res.status(200).json({ doctors });
  }
  else {
    res.status(404)
    throw new Error({ success: false, message: "No Doctors found" });
  }
})

export {
  getDoctorProfile,
  updateDoctorProfile,
  deleteDoctorProfile,
  getAllDoctors
}