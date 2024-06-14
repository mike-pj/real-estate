import User from "../models/userModel.js"
import bcryptjs from 'bcryptjs';

export const register = async (req, res) => {
    const { firstname, lastname, email, password, } = req.body
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User ({ firstname, lastname, email, password: hashPassword });

    try {
        await newUser.save(); 
        res.status(200).json
        ({ message: "user created successfullly" })
    
    } catch (error) {
        res.status(500).json(error.message  )
    }
   

};