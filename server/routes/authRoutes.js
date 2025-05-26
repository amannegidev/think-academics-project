import express from 'express';

import { 
    registerController,
    loginController,
    forgotPasswordController,
} from '../controller/authController.js';

import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";


const router = express.Router();


// Register route
router.post("/register", registerController);


// Login Route (Public)
router.post('/login', loginController);


// forgot password route
router.post('/forgotpass', forgotPasswordController);



//protected User route auth
router.get('/user-auth',requireSignIn,(req,res) =>{
    res.status(200).send({ok:true});
});


//pretected adimn route auth
router.get('/admin-auth',requireSignIn, isAdmin,(req,res) =>{
    res.status(200).send({ok:true});
});


export default router;

