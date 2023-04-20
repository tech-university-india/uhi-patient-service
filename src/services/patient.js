const db = require('../models')

const checkIfPatientExists = async (abhaId) => {
  const patient = await db.Patient.findOne({ where: { abhaId } })
  return patient // frontend will be showing the available options in KYC and LINK possiblities
}

const createPatient = async (abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber) => {
  const patient = await db.Patient.create({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber })
  return patient
}

const getPatients = async () => {
  const patients = await db.Patient.findAll()
  return patients
}

const getPatient = async (abhaId) => {
  const patient = await db.Patient.findOne({ where: { abhaId } })
  return patient
}

const updatePatient = async (abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber) => {
  const patient = await db.Patient.update({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber }, { where: { abhaId } })
  return patient
}

const deletePatient = async (id) => {
  await db.Patient.destroy({ where: { id } })
}

module.exports = {
  checkIfPatientExists,
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient
}
