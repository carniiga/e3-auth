import mongoose from "mongoose";

export const mongoDbconnect = async () => {
    const connect =  await mongoose.connect("mongodb+srv://carniiga:Agustinredbull1234@cluster0.aj7rzd4.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("db is connected"))
    return connect
}
