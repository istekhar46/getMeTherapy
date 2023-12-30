import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getAllAppointments,
  createAppointment,
} from "../controller/bookAppointmentContorller.js";

const router = express.Router({mergeParams: true});

router.route("/").get(getAllAppointments).post(protect, createAppointment);

export default router;