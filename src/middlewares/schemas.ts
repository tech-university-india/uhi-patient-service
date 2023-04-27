import joi from 'joi'

export const createPatientValidation = joi.object({
  abhaId: joi.string().required(),
  name: joi.string().required(),
  gender: joi.string().valid('M', 'F').required(),
  mobile: joi.string().regex(/^91-?\d{10}$/).required(),
  address: joi.object({
    line: joi.string().required(),
    district: joi.string().required(),
    state: joi.string().required(),
    pincode: joi.string().required()
  }).required(),
  yearOfBirth: joi.number().required(),
  monthOfBirth: joi.number().min(1).max(12).required(),
  dayOfBirth: joi.number().min(1).max(31).required(),
  healthNumber: joi.string().regex(/\d{2}-?\d{4}-?\d{4}-?\d{4}$/).required()
})

export default {
  createPatientValidation
}
