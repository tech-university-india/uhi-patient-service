import db from '../models';
import { PatientInstance } from '../models/patient';

export const checkIfPatientExists = async (abhaId: string): Promise<any> => {
  let patient = await db.Patient.findOne({ where: { abhaId } });
  if (!patient) {
    throw new Error('Patient does not exist');
  }
  return "Patient exists";
};

interface PatientInfo {
  abhaId: string;
  name: string;
  gender: string;
  yearOfBirth: number;
  monthOfBirth: number;
  dayOfBirth: number;
  address: object;
  mobile: string;
  healthNumber: string;
}

export const createPatient = async (patientInfo: PatientInfo): Promise<PatientInstance> => {
  let { abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber } = patientInfo;
  const patientExists = await db.Patient.findOne({ where: { abhaId } });
  if (patientExists) {
    throw new Error('Patient already exists with this Abha-id');
  }

  if (healthNumber.indexOf('-') === -1) {
    healthNumber = `${healthNumber.slice(0, 2)}-${healthNumber.slice(2, 6)}-${healthNumber.slice(6, 10)}-${healthNumber.slice(10, 14)}`;
  }

  const patient = await db.Patient.create({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber });
  return patient;
};

export const getPatients = async (): Promise<PatientInstance[]> => {
  const patients = await db.Patient.findAll();
  return patients;
};

export const getPatient = async (abhaId: string): Promise<PatientInstance> => {
  const patient = await db.Patient.findOne({ where: { abhaId } });
  if (patient) {
    return patient;
  } else {
    throw new Error('Patient does not exist with this Abha-id');
  }
};

export const updatePatient = async (patientInfo: PatientInfo): Promise<PatientInstance> => {
  const { abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber } = patientInfo;
  await db.Patient.update({ name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber }, { where: { abhaId } });
  const patient = await db.Patient.findOne({ where: { abhaId } });
  return patient;
};

export const deletePatient = async (abhaId: string): Promise<number> => {
  const patient = await db.Patient.findOne({ where: { abhaId } });
  if (!patient) {
    throw new Error('Patient does not exist');
  }
  await db.Patient.destroy({ where: { abhaId } });
  return 1;
};

export default {
  checkIfPatientExists,
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient
};
