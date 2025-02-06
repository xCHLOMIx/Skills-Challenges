const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload, {
    abortEarly:false
})

const signupSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    title:Joi.string().required(),
    password:Joi.string().min(6).required()
})
const signupAdminSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password:Joi.string().min(6).required()
})
exports.validateAdminSignup = validator(signupAdminSchema)
exports.validateSignup = validator(signupSchema)