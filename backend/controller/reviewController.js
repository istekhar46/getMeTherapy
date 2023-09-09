import Review from '../models/reviewModel.js';
import Doctor from '../models/doctorModel.js';
import asyncHandler from 'express-async-handler';


// get All reviews


export const getAllReviews = asyncHandler(async (req, res) => {

    const reviews = await Review.find({})

    if (reviews) {
        res.status(200).json({ success: true, message: "succesfull", data: reviews })
    }
    else {
        res.status(404)
        throw new Error("No reviews found")
    }

})

export const createReview = async (req, res) => {

    if (!req.body.doctor) req.body.doctor = req.params.doctorId;
    if (!req.body.user) req.body.user = req.user;

    const review = new Review(req.body)

    try {


        const savedReview = await review.save()


        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview._id },
        });
        res.status(200).json({ success: true, message: "Review submitted", data: savedReview })
    } catch (error) {
        res.status(404)
        throw new Error("Review not submitted")
    }

}