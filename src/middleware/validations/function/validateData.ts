import Debug from 'debug'
const debug = Debug('app:Api:Middleware:Validation')

/**
 *
 * @param {object} schema Joi schema to be validated
 * @param {object} data Data to be validated in schema
 */
export default async (schema, data = {}) => {
  if (!schema) {
    debug('A schema is needed for this function to work')
    throw new Error('Failed at input data validation process')
  }
  try {
    await schema.validateAsync(data, { abortyEarly: false })
  } catch (error) {
    debug('Validation process failed, sending a 400 status to client')
    error.status = 400
    throw error
  }
}
