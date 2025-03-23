import mongoose from "mongoose"
const connectionString = process.env.MONGODB_CONNECTION || "mongodb://localhost:27017/project-khonsu"

export async function connectDB() {
    await mongoose.connect(connectionString)
}

export async function disconnectDB() {
    await mongoose.disconnect()
}

export default mongoose
