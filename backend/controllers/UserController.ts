import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import User from '../models/User';
import generateToken from '../utils/generateToken';

// @Desc Get all users
// @Route /api/auth
// @Method GET
export const getAll = asyncHandler(async (req: Request, res: Response) => {

    const users = await User.find({}).select('-password');
    res.status(201).json({ success: true, count: users.length, users });

})

// @Desc Login 
// @Route /api/auth/
// @Method POST
export const login = asyncHandler (async (req: Request, res: Response) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(email, password)
    if(!user) {
        res.status(401);
        throw new Error("User not found");
    }

    if(await user.comparePassword(password)) {

        res.status(201).json({ success: true, user: {
            id: user._id,
            email: user.email,
            username: user.username,
            token: generateToken(user._id)
        }})

    } else {
        res.status(401);
        throw new Error("Email or password incorrect");
    }

})

// @Desc Register
// @Route /api/auth/register
// @Method POST
export const register = asyncHandler(async (req: Request, res: Response) => {

    const { email, username, password } = req.body;
    console.log(email, username, password)
    const user = new User({
        email, username, password
    });

    await user.save();

    res.status(201).json({ success: true, user: {
        email: user.email,
        username: user.username,
        token: generateToken(user._id)
    } });

})