import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModals from "../modals/userModals.js";
import jwt from "jsonwebtoken";
import { response } from "express";

export const registerController = async(req, res) => {
    try {
        const {name, email, password, phone, address} = req.body;
        //validations
        if(!name){
            return res.send({error: 'Name is required'});
        }
        if(!email){
            return res.send({error: 'Email is required'});
        }
        if(!password){
            return res.send({error: 'Password is required'});
        }
        if(!phone){
            return res.send({error: 'Phone is required'});
        }
        if(!address){
            return res.send({error: 'Address is required'});
        }

        // check user
        const existingUser = await userModals.findOne({ email });

        // existing user
        if(existingUser){
            return res.status(200).send({
                success: true,
                message: 'Already Registered, Please Login'
            });
        }
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModals({name, email, phone, address, password:hashedPassword}).save();

        res.status(201).send({
            success:true,
            message: 'Registered Successfully !!',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error in registration',
            error
        });
    }
}

export const loginController = async(req, res) => {
    try {
        const {email, password} = req.body;
        // validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid Email or Password !! please try again",
            });
        }

        // check user 
        const user = await userModals.findOne({email})
        if(!user){
            return res.status(404).send({
                success: false,
                message:"Email is not registered"
            });
        }

        const match = await comparePassword(password, user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            });
        }

        // creation of token :-
        const token = jwt.sign({_id: user._id}, process.env.jwt_secret, {expiresIn: "7d"});

        res.status(200).send({
            success:true,
            message:"Login Successfull ",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            }, 
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Login!!, please try again",
            error
        });
    }
}