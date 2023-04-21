const db = require('../models')

const checkIfPatientExists = async (abhaId) => {
  const patient = await db.Patient.findOne({ where: { abhaId } })
  if (patient) {
    return patient
  } else { throw new Error('Patient does not exist') }
}

const createPatient = async ({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber }) => {
  if (!healthNumber.includes('-')) {
    const healthNumberWithHyphen = healthNumber.slice(0, 2) + '-' + abhaId.slice(2, 6) + '-' + abhaId.slice(6, 10) + '-' + abhaId.slice(10, 14)
    healthNumber = healthNumberWithHyphen
  }
  const patient = await db.Patient.create({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber })
  return patient
}

const getPatients = async () => {
  const patients = await db.Patient.findAll()
  return patients
}

const getPatient = async (abhaId) => {
  const patient = await db.Patient.findOne({ where: { abhaId } })
  // check if patient exists
  if (patient) {
    return patient
  } else { throw new Error('Patient does not exist with this Abha-id') }
}

const updatePatient = async ({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber }) => {
  const patient = await db.Patient.update({ name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber }, { where: { abhaId } })
  return patient
}

const deletePatient = async (abhaId) => {
  await db.Patient.destroy({ where: { abhaId } })
}

module.exports = {
  checkIfPatientExists,
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient
}
