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






export default router;

