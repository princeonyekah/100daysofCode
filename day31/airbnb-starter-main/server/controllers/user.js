 import User from "../models/user.js";
 import properties from "../models/properties.js";
 import {createError} from "../error.js";
 import dotenv from "dotenv";
 import bcrypt from "bcrypt"
 import jwt from "jsonwebtoken"

 dotenv.config();

 export const SignUp = async(req, res, next) => {
    try {
        const {email, password, name} = req.body;
        const existinguser = await User.findOne({email}).exec();
        if (existinguser){
            return next(createError(409, "Email is already in use"))
        }

        const salt = bcrypt.genSaltSync(10)
        const hashedPassword =bcrypt.hashSync(password, salt);

        const user = new User({
            name,
            email,
            password:hashedPassword,
        })

    } catch (error) {
        next(error)
    }
 };
 export const SignIn = async(req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
 };