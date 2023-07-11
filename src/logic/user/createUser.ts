import User from "../../model/userModel/userSchema";
import { generateToken } from "./createToken";
import { encripted } from "./passwordCrypt";

export const createUser = async(user : any ) => {
    const {name , email , password} = user;
    const passwordEncrypted = await encripted(password)
    const newUser = await User.create({name , email ,password: passwordEncrypted });
    const tokenUser = await generateToken({name , email , password})
    return tokenUser
};