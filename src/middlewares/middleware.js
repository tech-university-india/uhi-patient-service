const schemas = require('./schemas')

exports.abhaIdValidator = (req, res, next) => {
  const { error } = schemas.abhaIdValidation.validate(req.body)
  if (error) {
    return res.status(400).json(error.message)
  }
  next()
}

exports.createPatientValidation = (req, res, next) => {
  const { error } = schemas.createPatientValidation.validate(req.body)
  if (error) {
    return res.status(400).json(error.message)
  }
  next()
}
