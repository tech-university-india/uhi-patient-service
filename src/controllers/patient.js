const patientService = require('../services/patient')

const checkIfPatientExists = async (req, res) => {
  try {
    const { abhaId } = req.body
    const patient = await patientService.checkIfPatientExists(abhaId)
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const createPatient = async (req, res) => {
  try {
    const { abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber } = req.body
    const patient = await patientService.createPatient(abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber)
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const getPatients = async (req, res) => {
  try {
    const patients = await patientService.getPatients()
    res.status(200).json(patients)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const getPatient = async (req, res) => {
  try {
    const { abhaId } = req.body
    const patient = await patientService.getPatient(abhaId)
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const updatePatient = async (req, res) => {
  try {
    const { abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber } = req.body
    const patient = await patientService.updatePatient(abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber)
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const deletePatient = async (req, res) => {
  try {
    await patientService.deletePatient(req.params.id)
    res.status(200).json({ message: 'Patient deleted' })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = {
  checkIfPatientExists,
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient
}
