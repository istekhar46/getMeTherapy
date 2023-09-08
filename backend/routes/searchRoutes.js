import express from "express";
import { searchBlogs } from '../controller/searchController.js'


const router = express.Router();

router.get('/blogs', searchBlogs)

export default router;