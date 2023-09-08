import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @Desc    Auth user/set token
// @route   POST /api/users/auth
// @access  public

const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            gender: user.gender,
        });
    } else {
        res.status(400)
        throw new Error('invalid email or password');
    }

})

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// @Desc    register User..
// @route   POST /api/users
// @access  public

const registerUser = asyncHandler(async (req, res) => {

    // destructure data from the req body...
    const { name, email, password, role, gender } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400)
        throw new Error('user already exist')
    }

    const user = await User.create({
        name,
        email,
        password, //?this password is hashed in user model with schema method called pre()
        role,
        gender
        
    })

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            gender: user.gender,
        });
    } else {
        res.status(400)
        throw new Error('invalid user data');
    }
})

//!11111111111111111111111111111111111111111111111111111



// @Desc    Logout User..
// @route   POST /api/users/logout
// @access  public

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(200).json({ message: "User logged out" })
})

// @Desc    Get User profile..
// @route   POST /api/users/profile
// @access  private

const getUserProfile = asyncHandler(async (req, res) => {
    const user ={
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    }
    res.status(200).json({user});
})

// @Desc    Update User profile..
// @route   PUT /api/users/profile
// @access  private

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if(req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        })

    }else{
        res.status(404)
        throw new Error("User not found")
    }
})


export {
    authUser, registerUser, logoutUser, getUserProfile, updateUserProfile
}