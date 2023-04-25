import * as patientService from '../services/patient';

export const checkIfPatientExists = async (req, res) => {
  try {
    const { abhaId } = req.params
    const patient = await patientService.checkIfPatientExists(abhaId)
    if (!patient) {
      return res.status(200).json({ message: 'Patient does not exist' })
    }
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const createPatient = async (req, res) => {
  try {
    const { abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber } = req.body
    const patient = await patientService.createPatient({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber })
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getPatients = async (req, res) => {
  try {
    const patients = await patientService.getPatients()
    res.status(200).json(patients)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getPatient = async (req, res) => {
  try {
    const { abhaId } = req.params
    const patient = await patientService.getPatient(abhaId)
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const updatePatient = async (req, res) => {
  try {
    const { abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber } = req.body
    const patient = await patientService.updatePatient({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber })
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const deletePatient = async (req, res) => {
  try {
    const { abhaId } = req.params
    await patientService.deletePatient(abhaId)
    res.status(200).json({ message: 'Patient deleted' })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export default {
  checkIfPatientExists,
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient
}
