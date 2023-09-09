import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getAllReviews,
  createReview,
} from "../controller/reviewController.js";

const router = express.Router({mergeParams: true});

router.route("/").get(getAllReviews).post(protect, createReview);

export default router;