const bcrypt = require('bcrypt')
const salt = 10


export const hashedPassword = async (plainText:string)=>{
    try{
        return await bcrypt.hash(plainText,salt)
    }
    catch(error){
        console.log(error)
    }
}