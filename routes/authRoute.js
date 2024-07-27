import express from 'express';
import {registerController, loginController} from '../controllers/authControllers.js';

const router = express.Router();

//routing
//register:-
router.post('/register', registerController)

// login:-
router.post('/login', loginController);

export default router;

