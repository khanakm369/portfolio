
import User from '../model/users.model.js'


export const createUser = async (req , res) => {

    try{

        const newUser = await User.create(req.body);

        res.status(201).json({
            success: true,
            message: "User Registered successfully",
            data: newUser,
        });

    }catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}