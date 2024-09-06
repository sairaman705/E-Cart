import express from 'express';
import {registerController, loginController, testController} from '../controllers/authControllers.js';
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
// import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

//routing
//register:-
router.post('/register', registerController)
// login:-
router.post('/login', loginController);

// test routes
router.get('/test', requireSignIn, isAdmin, testController)
// router.get('/test', , isAdmin, testController); // 2 middlewares :- requireSignIn-check of token , isAdmin-check of admin 


export default router;

