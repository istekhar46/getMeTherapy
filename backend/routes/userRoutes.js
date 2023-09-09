import express from 'express'
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getAllUsers, deleteUserProfile } from '../controller/userController.js';
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router()


router.route('/').post(registerUser).get(getAllUsers);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect,getUserProfile);
router.route('/profile/:id').put(protect, updateUserProfile).delete(protect, deleteUserProfile);



export default router;