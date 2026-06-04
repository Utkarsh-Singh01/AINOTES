import mongoose from "mongoose";

const connectDb = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Error")
    }
}

export default connectDb