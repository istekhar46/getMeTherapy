import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getDoctorProfile, updateDoctorProfile, deleteDoctorProfile, getAllDoctors } from '../controller/DoctorController.js';  
import reviewRouter from './reviewRoutes.js';

const router = express.Router();


//? nested route

router.use('/:doctorId/reviews', reviewRouter);


router.route('/').get(getAllDoctors);
router.route('/profile').get(protect,getDoctorProfile);
router.route('/profile/:id').put(protect, updateDoctorProfile).delete(protect, deleteDoctorProfile);



export default router;