const patientController = require('../../src/controllers/patient')
const patientService = require('../../src/services/patient')

describe('Patient Controller', () => {
  describe('checkIfPatientExists', () => {
    it('should return 200 if there was no error', async () => {
      const req = {
        body: {
          abhaId: '1234567890'
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      const resolvedValue = {
        abhaId: '1234567890'
      }

      jest.spyOn(patientService, 'checkIfPatientExists').mockResolvedValue(resolvedValue)
      await patientController.checkIfPatientExists(req, res)
      expect(res.status).toHaveBeenCalledWith(200)
      expect(res.json).toHaveBeenCalled()
    })

    it('should return 500 if the function throws an error', async () => {
      const req = {
        body: {
          abhaId: '1234567890'
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      jest.spyOn(patientService, 'checkIfPatientExists').mockImplementation(() => {
        throw new Error('Error')
      })

      await patientController.checkIfPatientExists(req, res)
      expect(res.status).toHaveBeenCalledWith(500)
      expect(res.json).toHaveBeenCalled()
    })
  })

  describe('createPatient', () => {
    it('should call patientService.createPatient', async () => {
      const req = {
        body: {
          abhaId: '1234567890'
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      const resolvedValue = {
        abhaId: '1234567890'
      }

      jest.spyOn(patientService, 'createPatient').mockResolvedValue(resolvedValue)
      await patientController.createPatient(req, res)
      expect(res.status).toHaveBeenCalledWith(200)
      expect(res.json).toHaveBeenCalled()
    })

    it('should return 500 if the function throws an error', async () => {
      const req = {
        body: {
          abhaId: '1234567890'
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      jest.spyOn(patientService, 'createPatient').mockImplementation(() => {
        throw new Error('Error')
      })

      await patientController.createPatient(req, res)
      expect(res.status).toHaveBeenCalledWith(500)
      expect(res.json).toHaveBeenCalled()
    })
  })

  describe('getPatients', () => {
    it('should call patientService.getPatients', async () => {
      const req = {}

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      const resolvedValue = [{
        abhaId: '1234567890'
      }]

      jest.spyOn(patientService, 'getPatients').mockResolvedValue(resolvedValue)
      await patientController.getPatients(req, res)
      expect(res.status).toHaveBeenCalledWith(200)
      expect(res.json).toHaveBeenCalled()
    })

    it('should return 500 if the function throws an error', async () => {
      const req = {}

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      jest.spyOn(patientService, 'getPatients').mockImplementation(() => {
        throw new Error('Error')
      })

      await patientController.getPatients(req, res)
      expect(res.status).toHaveBeenCalledWith(500)
      expect(res.json).toHaveBeenCalled()
    })
  })

  describe('getPatient', () => {
    it('should call patientService.getPatient', async () => {
      const req = {
        body: {
          abhaId: '1234567890'
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      const resolvedValue = {
        abhaId: '1234567890'
      }

      jest.spyOn(patientService, 'getPatient').mockResolvedValue(resolvedValue)
      await patientController.getPatient(req, res)
      expect(res.status).toHaveBeenCalledWith(200)
      expect(res.json).toHaveBeenCalled()
    })

    it('should return 500 if the function throws an error', async () => {
      const req = {
        body: {
          abhaId: '1234567890'
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      jest.spyOn(patientService, 'getPatient').mockImplementation(() => {
        throw new Error('Error')
      })

      await patientController.getPatient(req, res)
      expect(res.status).toHaveBeenCalledWith(500)
      expect(res.json).toHaveBeenCalled()
    })
  })

  describe('updatePatient', () => {
    it('should call patientService.updatePatient', async () => {
      const req = {
        body: {
          abhaId: '1234567890'
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      const resolvedValue = {
        abhaId: '1234567890'
      }

      jest.spyOn(patientService, 'updatePatient').mockResolvedValue(resolvedValue)
      await patientController.updatePatient(req, res)
      expect(res.status).toHaveBeenCalledWith(200)
      expect(res.json).toHaveBeenCalled()
    })

    it('should return 500 if the function throws an error', async () => {
      const req = {
        body: {
          abhaId: '1234567890'
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      jest.spyOn(patientService, 'updatePatient').mockImplementation(() => {
        throw new Error('Error')
      })

      await patientController.updatePatient(req, res)
      expect(res.status).toHaveBeenCalledWith(500)
      expect(res.json).toHaveBeenCalled()
    })
  })

  describe('deletePatient', () => {
    it('should call patientService.deletePatient', async () => {
      const req = {
        params: {
          id: '1234567890'
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      const resolvedValue = {}

      jest.spyOn(patientService, 'deletePatient').mockResolvedValue(resolvedValue)
      await patientController.deletePatient(req, res)
      expect(res.status).toHaveBeenCalledWith(200)
      expect(res.json).toHaveBeenCalled()
    })

    it('should return 500 if the function throws an error', async () => {
      const req = {
        params: {
          id: '1234567890'
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      }

      const spy = jest.spyOn(patientService, 'deletePatient').mockImplementation(() => {
        throw new Error('Error')
      })

      await patientController.deletePatient(req, res)
      expect(spy).toHaveBeenCalled()
      expect(res.status).toHaveBeenCalledWith(500)
      expect(res.json).toHaveBeenCalled()
    })
  })
})