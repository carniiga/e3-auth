import bcryptjs from "bcryptjs"

export const encripted = async (password : string) => {
    const salt = await bcryptjs.genSaltSync(10)
    const passwordEncrypted = await bcryptjs.hash(password, salt)
    return passwordEncrypted

}