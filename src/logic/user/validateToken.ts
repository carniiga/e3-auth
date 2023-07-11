import jwt from "jsonwebtoken"
import dotenv  from "dotenv"

export const validate = async (token : string ) => {
    if(token){
        dotenv.config()
    }
    const privateKey = process.env.SECRET_KEY
    const verify = jwt.verify(token , `${privateKey}`)
    if(verify){
        return true
    }else{
        return "token is expired"
    }
    

}