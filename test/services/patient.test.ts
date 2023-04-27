/* eslint-disable no-unused-vars */
import patientService from '../../src/services/patient'
import db from '../../src/models'

describe('Patient Service', () => {
  describe('checkIfPatientExists', () => {
    it('should return a patient', async () => {
      jest.spyOn(db.Patient, 'findOne').mockResolvedValue({
        id: 1,
        abhaId: '1234567890',
        name: 'John Doe',
        gender: 'MALE',
        yearOfBirth: 1990,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      }
      )
      const patient = await patientService.checkIfPatientExists('1234567890')

      expect(patient).toEqual({
        id: 1,
        abhaId: '1234567890',
        name: 'John Doe',
        gender: 'MALE',
        yearOfBirth: 1990,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      })
    })
    it('should throw an error if patient does not exist', async () => {
      jest.spyOn(db.Patient, 'findOne').mockResolvedValue(null)
      await expect(patientService.checkIfPatientExists('1234567890')).rejects.toThrow('Patient does not exist')
    })
  })
  describe('createPatient', () => {
    it('should create a patient', async () => {
      jest.spyOn(db.Patient, 'create').mockResolvedValue({
        id: 1,
        abhaId: '1234567890',
        name: 'John Doe',
        gender: 'MALE',
        yearOfBirth: 1990,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      })
      const patient = await patientService.createPatient({
        abhaId: '1234567890',
        name: 'John Doe',
        gender: 'MALE',
        yearOfBirth: 1990,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      })
      expect(patient).toEqual({
        id: 1,
        abhaId: '1234567890',
        name: 'John Doe',
        gender: 'MALE',
        yearOfBirth: 1990,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      })
    })
  })
  describe('getPatients', () => {
    it('should return all patients', async () => {
      jest.spyOn(db.Patient, 'findAll').mockResolvedValue([{
        id: 1,
        abhaId: '1234567890',
        name: 'John Doe',
        gender: 'MALE',
        yearOfBirth: 1990,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      },
      {
        id: 2,
        abhaId: '33333333',
        name: 'Kartik Goel',
        yearOfBirth: 2000,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      }])
      const patients = await patientService.getPatients()
      expect(patients).toEqual([{
        id: 1,
        abhaId: '1234567890',
        name: 'John Doe',
        gender: 'MALE',
        yearOfBirth: 1990,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      },
      {
        id: 2,
        abhaId: '33333333',
        name: 'Kartik Goel',
        yearOfBirth: 2000,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      }])
    })
  })
  describe('getPatient', () => {
    it('should return a patient for a particular id', async () => {
      jest.spyOn(db.Patient, 'findOne').mockResolvedValue({
        id: 2,
        abhaId: '33333333',
        name: 'Kartik Goel',
        yearOfBirth: 2000,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      })
      const patient = await patientService.getPatient(2)
      expect(patient).toEqual({
        id: 2,
        abhaId: '33333333',
        name: 'Kartik Goel',
        yearOfBirth: 2000,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      })
    })
    it('should throw an error if patient does not exist with ABHA-id', async () => {
      jest.spyOn(db.Patient, 'findOne').mockResolvedValue(null)
      await expect(patientService.getPatient(2)).rejects.toThrow('Patient does not exist with this Abha-id')
    }
    )
  })
  describe('updatePatient', () => {
    it('should update a patient for a particular id', async () => {
      jest.spyOn(db.Patient, 'update').mockResolvedValue([1, [{
        id: 2,
        abhaId: '33333333',
        name: 'Kartik Goel',
        yearOfBirth: 2000,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      }]])
      const patient = await patientService.updatePatient({
        abhaId: '1234567890',
        name: 'John Doe',
        gender: 'MALE',
        yearOfBirth: 1990,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      })
      expect(patient).toEqual([1, [{
        id: 2,
        abhaId: '33333333',
        name: 'Kartik Goel',
        yearOfBirth: 2000,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: '123 Main St',
        mobile: '1234567890',
        healthNumber: '123456789'
      }]])
    })
  })
  describe('deletePatient', () => {
    it('should delete a patient for a particular id', async () => {
      jest.spyOn(db.Patient, 'destroy').mockResolvedValue([1])
      const patient = await patientService.deletePatient(2)
      expect(patient).toBe([1])
    })
  })
})
