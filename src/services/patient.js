const db = require('../models')

const checkIfPatientExists = async (abhaId) => {
  const patient = await db.Patient.findOne({ where: { abhaId } })
  return patient // frontend will be showing the available options in KYC and LINK possiblities
}

const createPatient = async (name, email) => {
  const patient = await db.Patient.create({ name, email })
  return patient
}

const getPatients = async () => {
  const patients = await db.Patient.findAll()
  return patients
}

const getPatient = async (id) => {
  const patient = await db.Patient.findOne({ where: { id } })
  return patient
}

const updatePatient = async (id, name, email) => {
  const patient = await db.Patient.update({ name, email }, { where: { id } })
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
