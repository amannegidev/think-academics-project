import userModel from '../model/userModel.js';
import JWT from "jsonwebtoken";
import fs from "fs";
import { hashPassword, comparedPassword } from "../helper/authHelper.js";

// REGISTER CONTROLLER ---> 

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;

        if (!name || !email || !password || !phone || !address || !answer) {
            return res.status(422).json({ error: "Please fill all fields" });
        }

        const userExist = await userModel.findOne({ email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        }

        const hashedPassword = await hashPassword(password);

        const user = new userModel({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            answer,
        });

        await user.save();

        return res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong" });
    }
};


// LOGIN CONTROLLER --->  

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Invalid email or password",
            });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered",
            });
        }

        const match = await comparedPassword(password, user.password);
        if (!match) {
            return res.status(401).send({
                success: false,
                message: "Invalid password",
            });
        }

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(200).send({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                address: user.address,
                answer: user.answer,
                phone: user.phone,
                role: user.role
            },
            token,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
        });
    }
};

// FORGOT PASSWORD CONTROLLER ---->
export const forgotPasswordController = async (req,res) => {
try{
    const {email, answer, newPassword} = req.body;
    if (!email){
        res.status(400).send({message: "email is required"});
    }
    if (!newPassword){
        res.status(400).send({message: "password is required"});
    }
    if (!answer){
        res.status(400).send({message: "answer is required"});
    }
    //check
    const user = await userModel.findOne({email, answer});

    //validation
    if(!user){
         return res.status(400).send({
            success:false,
            message:"wrong email or answer"
         });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id,{password:hashed});
    res.status(200).send({
        success:true,
        message:"password reset succefully"
    });
    
} catch(err){
    console.log(err);
    res.status(500).send({
        success:false,
        message:"something went wrong"
    });
}
}

