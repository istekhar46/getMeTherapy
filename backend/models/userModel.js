import mongoose from "mongoose";
import bcrypt from 'bcryptjs';


const userSchema = mongoose.Schema
    (
        {
            name: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            phone: { type: Number },
            role: {
              type: String,
              enum: ["patient", "admin", "doctor"],
              default: "patient",
            },
            gender: { type: String, enum: ["male", "female", "other"] },
            appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
        },
        {
            timestamps: true
        }
    )

// hashing the password using one of hooks presented on the schema that is pre and post ... 

// here we are using the normal function because of 'this' keyword ..
userSchema.pre('save', async function (next) {

    //use isModified method of the pre() hook to check for the password change ..
    if (!this.isModified('password')) { next() }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.matchPassword = async function (enteredPassword){
        return await bcrypt.compare(enteredPassword, this.password);
}



const User = mongoose.model('User', userSchema);

export default User;
