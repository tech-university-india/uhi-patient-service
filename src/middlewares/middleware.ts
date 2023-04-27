import * as schemas from './schemas.js'

export const abhaIdValidator = (req, res, next) => {
  const { error } = schemas.abhaIdValidation.validate(req.body)
  if (error) {
    return res.status(400).json(error.message)
  }
  next()
}

export const createPatientValidation = (req, res, next) => {
  const { error } = schemas.createPatientValidation.validate(req.body)
  if (error) {
    return res.status(400).json(error.message)
  }
  next()
}

export default {
  abhaIdValidator,
  createPatientValidation
}
