const Joi = require('@hapi/joi')
// Joi validation schema for user registration
const registerValidation = (data)=>{
    const schema = {
        name : Joi.string().min(5).max(100).required(),
        email : Joi.string().min(8).max(355).required().email(),
        password : Joi.string().min(8).max(50).required(),
        
    } 
   return  Joi.validate(data,schema)
}
//Login validation
const loginValidation = (data)=>{
    const schema = {
         
        email : Joi.string().min(8).max(355).required().email(),
        password : Joi.string().min(8).max(50).required()
    }
   return  Joi.validate(data,schema)
}

module.exports.registerValidation = registerValidation 
module.exports.loginValidation = loginValidation