import {Schema , model } from "mongoose";

const productSchema = new Schema ({
    name : String,
    price : Number, 
    description : String,
    imgUrl : String


},{
    timestamps : true 
})

export default model("Products" , productSchema)