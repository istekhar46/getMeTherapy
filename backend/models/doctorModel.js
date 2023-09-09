import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const DoctorSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number },
    ticketPrice: { type: Number },
    role: {
        type: String,
    },

    // Fields for doctors only
    specialization: { type: String },
    qualifications: {
        type: Array,
    },

    experiences: {
        type: Array,
    },

    bio: { type: String, maxLength: 50 },
    about: { type: String },
    timeSlots: { type: Array },
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
    averageRating: {
        type: Number,
        default: 0,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
    isApproved: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
    },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

DoctorSchema.pre('save', async function (req, res, next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

DoctorSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const Doctor = mongoose.model("Doctor", DoctorSchema);
export default Doctor;
