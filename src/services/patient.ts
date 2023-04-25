import db from '../models'

export const checkIfPatientExists = async (abhaId) => {
  const patient = await db.Patient.findOne({ where: { abhaId } })
  return patient // frontend will be showing the available options in KYC and LINK possiblities
}

export const createPatient = async ({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber }) => {
  const patient = await db.Patient.create({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber })
  return patient
}

export const getPatients = async () => {
  const patients = await db.Patient.findAll()
  return patients
}

export const getPatient = async (abhaId) => {
  const patient = await db.Patient.findOne({ where: { abhaId } })
  return patient
}

export const updatePatient = async ({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber }) => {
  const patient = await db.Patient.update({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber }, { where: { abhaId } })
  return patient
}

export const deletePatient = async (id) => {
  await db.Patient.destroy({ where: { id } })
}

export default {
  checkIfPatientExists,
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient
}
