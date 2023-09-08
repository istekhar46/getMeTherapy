import express from "express";
import {deleteBlogs, getBlogs, postBlogs, publicBlogs, updateBlogs} from '../controller/blogController.js';
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('/',publicBlogs);
router.route('/userblogs').get(protect,getBlogs).post(protect,postBlogs);
router.route('/userblogs/:id').put(protect,updateBlogs).delete(protect,deleteBlogs)


export default router;