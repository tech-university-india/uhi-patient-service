import patientService from '../services/patient.js';

export const checkIfPatientExists = async (req, res) => {
  try {
    const { abhaId } = req.params
    const patient = await patientService.checkIfPatientExists(abhaId)
    res.status(200).json({
      message: 'Patient exists', data: {
        abhaId: patient.abhaId,
      }
    })
  } catch (error) {
    if (error.message === 'Patient does not exist') {
      res.status(404).json({ exist: false, message: error.message })
    } else {
      res.status(500).json(error.message)
    }
  }
}

export const createPatient = async (req, res) => {
  try {
    const { abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber } = req.body
    const patient = await patientService.createPatient({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber })
    res.status(200).json({
      message: 'Patient created successfully', data: patient
    })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getPatients = async (req, res) => {
  try {
    const patients = await patientService.getPatients()
    res.status(200).json({ data: patients })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export const getPatient = async (req, res) => {
  try {
    const { abhaId } = req.params
    const patient = await patientService.getPatient(abhaId)
    res.status(200).json({ message: "Patient Exists", data: patient })
  } catch (error) {
    if (error.message === 'Patient does not exist with this Abha-id') { res.status(404).json(error.message) } else {
      res.status(500).json(error.message)
    }
  }
}

export const updatePatient = async (req, res) => {
  try {
    const { abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber } = req.body
    const patient = await patientService.updatePatient({ abhaId, name, gender, yearOfBirth, monthOfBirth, dayOfBirth, address, mobile, healthNumber })
    res.status(200).json({ message: 'Patient updated', data: patient })
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
