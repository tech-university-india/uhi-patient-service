import {Request, Response, NextFunction} from 'express';
import {createPatientValidation as createPatientValidationSchema} from './schemas';

export const createPatientValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {error} = createPatientValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.message);
  }
  next();
};

export default {
  createPatientValidation,
};
