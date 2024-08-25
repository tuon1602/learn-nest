
import * as bcrypt from 'bcrypt'
const salt = 10


export const hashedPassword = async (plainText:string)=>{
    try{
        return await bcrypt.hash(plainText,salt)
    }
    catch(error){
        console.log(error)
    }
}

export const comparePasswordHelper = async (plainPassword:string,hasedPassword:string)=>{
    try{
        return await bcrypt.compare(plainPassword,hasedPassword)
    }
    catch(error){
        console.log(error)
    }
}
