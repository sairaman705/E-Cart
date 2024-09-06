import JWT from "jsonwebtoken";
import userModals from "../modals/userModals.js";

// protected routes :- protecting users
export const requireSignIn = async(req, res, next) => {
    try {
        // validate authenticate user:-
        const decode = JWT.verify(req.headers.authorization, process.env.jwt_secret);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
}

// admin access:-
export const isAdmin = async(req, res, next) => {
    try {
        const user = await userModals.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                message: 'UnAuthorized Admin'
            });
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message:'Error in Admin MiddleWare!'
        });
    }
}
