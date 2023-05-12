import {Request, Response} from 'express';
import PatientServices from '../services/patient';

export const checkIfPatientExists = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {abhaId} = req.params;
    const message = await PatientServices.checkIfPatientExists(abhaId);
    if (message === 'Patient exists') {
      res.status(200).json({exist: true, message});
    } else {
      res.status(200).json({exist: false, message});
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const createPatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      abhaId,
      name,
      gender,
      yearOfBirth,
      monthOfBirth,
      dayOfBirth,
      address,
      mobile,
      healthNumber,
    } = req.body;
    const patient = await PatientServices.createPatient({
      abhaId,
      name,
      gender,
      yearOfBirth,
      monthOfBirth,
      dayOfBirth,
      address,
      mobile,
      healthNumber,
    });
    res.status(200).json({
      message: 'Patient created successfully',
      data: patient,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getPatients = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const patients = await PatientServices.getPatients();
    res
      .status(200)
      .json({message: 'Patients fetched successfully', data: patients});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getPatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {abhaId} = req.params;
    const patient = await PatientServices.getPatient(abhaId);
    if (patient.message === 'Patient does not exist with this Abha-id') {
      res.status(200).json({data: null, message: patient.message});
    } else {
      res.status(200).json({data: patient.data, message: patient.message});
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updatePatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      abhaId,
      name,
      gender,
      yearOfBirth,
      monthOfBirth,
      dayOfBirth,
      address,
      mobile,
      healthNumber,
    } = req.body;
    const patient = await PatientServices.updatePatient({
      abhaId,
      name,
      gender,
      yearOfBirth,
      monthOfBirth,
      dayOfBirth,
      address,
      mobile,
      healthNumber,
    });
    res
      .status(200)
      .json({message: 'Patient updated successfully', data: patient});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deletePatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {abhaId} = req.params;
    await PatientServices.deletePatient(abhaId);
    res.status(200).json({message: 'Patient deleted successfully'});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default {
  checkIfPatientExists,
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
};
