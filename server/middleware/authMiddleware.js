import JWT from "jsonwebtoken";
import userModel from "../model/userModel.js";

export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user = decode; 
        next(); 
    } catch (error) {
        console.log(error);
    }
};

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access",
            });
        } 
        next();
         
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "Error in admin middleware",
        });
    }
};


