import bcryptjs from "bcryptjs"
import User from "../../model/userModel/userSchema"
import { generateToken } from "./createToken"

export const validatePass = async(name : string , password : string) => {
    const userdb = await User.findOne({name : name}) 
    if(userdb){
        const passwordDb = userdb.password
        const validatePass = await bcryptjs.compare(password , `${passwordDb}`)
        if(validatePass){
            const tokenGen = await generateToken(userdb)
         return tokenGen
        }else{
            return "email o contraseña incorrecta"
        }
    } 
   return;
}