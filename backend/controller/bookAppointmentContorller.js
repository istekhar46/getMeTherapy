import asyncHandler from 'express-async-handler';
import Appointment from '../models/appointmentModel.js';
import Doctor from '../models/doctorModel.js';
import User from '../models/userModel.js';


// get All reviews


export const getAllAppointments = asyncHandler(async (req, res) => {

    const appointments = await Appointment.find({})

    if (appointments) {
        res.status(200).json({ success: true, message: "succesfull", data: appointments })
    }
    else {
        res.status(404)
        throw new Error("No appointment found")
    }
})

export const createAppointment = async (req, res) => {

    if (!req.body.doctor) req.body.doctor = req.params.doctorId;
    if (!req.body.user) req.body.user = req.user;

    const appointment = new Appointment(req.body)

    try {


        const savedAppointment = await appointment.save()


        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { appointments: savedAppointment._id },
        });
        await User.findByIdAndUpdate(req.user, {
            $push: { appointments: savedAppointment._id },
        });
        res.status(200).json({ success: true, message: "appointment Booked", data: savedAppointment })
    } catch (error) {
        res.status(404)
        throw new Error("Appointment booking failed")
    }

}