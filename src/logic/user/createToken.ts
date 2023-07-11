import jwt from "jsonwebtoken";
import dotenv from "dotenv"



export const generateToken = async(user : any) => {
    const  {name , email , password} = user;
    if(process.env.NODE_ENV !== "production"){
        dotenv.config()
    }
    const privateKey = process.env.SECRET_KEY;
    const genToken =  jwt.sign({name , email , password} , `${privateKey}` , {expiresIn : "1h"})
    return genToken
}