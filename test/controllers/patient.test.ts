import { Request, Response } from 'express';
import patientController from '../../src/controllers/patient';
import patientService from '../../src/services/patient';
import { PatientInstance } from '../../src/models/patient';

describe('Patient Controller', () => {
  describe('checkIfPatientExists', () => {
    it('should return 200 if there was no error', async () => {
      const req = {
        params: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const resolvedValue = {
        abhaId: '1234567890',
      } as unknown as PatientInstance

      jest.spyOn(patientService, 'checkIfPatientExists').mockResolvedValue(resolvedValue);
      await patientController.checkIfPatientExists(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Patient exists', data: {
          abhaId: resolvedValue.abhaId,
        }
      });
    });

    it('should return 404 if the Patient doesnt exist', async () => {
      const req = {
        params: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      jest.spyOn(patientService, 'checkIfPatientExists').mockRejectedValue(new Error('Patient does not exist'));

      await patientController.checkIfPatientExists(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ exist: false, message: 'Patient does not exist' });
    });

    it('should return 500 if the function throws an error', async () => {
      const req = {
        params: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      jest.spyOn(patientService, 'checkIfPatientExists').mockImplementation(() => {
        throw new Error('Error');
      });

      await patientController.checkIfPatientExists(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Error');
    });
  });

  describe('createPatient', () => {
    it('should return 200 when patient was created successfully', async () => {
      const req = {
        body: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const resolvedValue = {
        abhaId: '1234567890',
      } as unknown as PatientInstance;

      jest.spyOn(patientService, 'createPatient').mockResolvedValue(resolvedValue);
      await patientController.createPatient(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Patient created successfully', data: {
          abhaId: resolvedValue.abhaId,
        }
      });
    });

    it('should return 500 if the function throws an error', async () => {
      const req = {
        body: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      jest.spyOn(patientService, 'createPatient').mockImplementation(() => {
        throw new Error('Error');
      });

      await patientController.createPatient(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Error');
    });
  });

  describe('getPatients', () => {
    it('should return 200 when the patients are fetched successfully', async () => {
      const req = {} as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const resolvedValue = [{
        abhaId: '1234567890',
      }] as unknown as PatientInstance[];

      jest.spyOn(patientService, 'getPatients').mockResolvedValue(resolvedValue);
      await patientController.getPatients(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Patients fetched successfully', data: resolvedValue
      });
    });

    it('should return 500 if the function throws an error', async () => {
      const req = {} as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      jest.spyOn(patientService, 'getPatients').mockImplementation(() => {
        throw new Error('Error');
      });

      await patientController.getPatients(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Error');
    });
  });

  describe('getPatient', () => {
    it('should call 200 when the details of the patient are fetched', async () => {
      const req = {
        params: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const resolvedValue = {
        abhaId: '1234567890',
      } as unknown as PatientInstance;

      jest.spyOn(patientService, 'getPatient').mockResolvedValue(resolvedValue);
      await patientController.getPatient(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Patient fetched successfully', data: {
          abhaId: resolvedValue.abhaId,
        }
      });
    });

    it('should return 404 if the Patient doesnt exist', async () => {
      const req = {
        params: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      jest.spyOn(patientService, 'getPatient').mockRejectedValue(new Error('Patient does not exist with this Abha-id'));

      await patientController.getPatient(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith('Patient does not exist with this Abha-id');
    });

    it('should return 500 if the function throws an error', async () => {
      const req = {
        params: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      jest.spyOn(patientService, 'getPatient').mockImplementation(() => {
        throw new Error('Error');
      });

      await patientController.getPatient(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Error');
    });
  });

  describe('updatePatient', () => {
    it('should return 200 when patient details are updated', async () => {
      const req = {
        body: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      const resolvedValue = {
        abhaId: '1234567890',
      } as unknown as PatientInstance;

      jest.spyOn(patientService, 'updatePatient').mockResolvedValue(resolvedValue);
      await patientController.updatePatient(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Patient updated successfully', data: {
          abhaId: resolvedValue.abhaId,
        }
      });
    });

    it('should return 500 if the function throws an error', async () => {
      const req = {
        body: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      jest.spyOn(patientService, 'updatePatient').mockImplementation(() => {
        throw new Error('Error');
      });

      await patientController.updatePatient(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Error');
    });
  });

  describe('deletePatient', () => {
    it('should call patientService.deletePatient', async () => {
      const req = {
        params: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      jest.spyOn(patientService, 'deletePatient').mockResolvedValue(1);
      await patientController.deletePatient(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Patient deleted successfully'
      });
    });

    it('should return 500 if the function throws an error', async () => {
      const req = {
        params: {
          abhaId: '1234567890',
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;

      jest.spyOn(patientService, 'deletePatient').mockImplementation(() => {
        throw new Error('Error');
      });

      await patientController.deletePatient(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith('Error');
    });
  });
});
