import Joi from 'joi'

const props = {
  name: Joi.string(),
  lastname: Joi.string(),
  email: Joi.string(),
  password: Joi.string()
}

export const createSchema = Joi.object({
  name: props.name.required(),
  lastname: props.lastname.required(),
  email: props.email.required(),
  password: props.password.required()
})

export const loginSchema = Joi.object({
  email: props.email.required(),
  password: props.password.required()
})
