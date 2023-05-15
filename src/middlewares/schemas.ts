import joi from 'joi';

export const createPatientValidation = joi.object({
  abhaId: joi.string().required(),
  name: joi.string().required(),
  gender: joi.string().valid('M', 'F').required(),
  mobile: joi.string().length(10),
  address: joi
    .object({
      line: joi.string().required().allow(null),
      district: joi.string().required().allow(null),
      state: joi.string().required().allow(null),
      pincode: joi.string().required().allow(null),
    })
    .required(),
  yearOfBirth: joi.number().required(),
  monthOfBirth: joi.number().min(1).max(12).required(),
  dayOfBirth: joi.number().min(1).max(31).required(),
  healthNumber: joi
    .string()
    .regex(/\d{2}-?\d{4}-?\d{4}-?\d{4}$/)
    .required()
    .allow(null),
});

export default {
  createPatientValidation,
};
