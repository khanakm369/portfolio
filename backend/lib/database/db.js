import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        .then(console.log("Database Connection Established"))
    }
    catch(err)
    {
        console.log("There is an error in Database" , err)
    }
}

export default connectDB