import patientService from '../../src/services/patient';
import db from '../../src/models';

describe('Patient Service', () => {
  describe('checkIfPatientExists', () => {
    it('should return "Patient exists" if patient exists', async () => {
      jest
        .spyOn(db.Patient, 'findOne')
        .mockResolvedValueOnce('Patient exists' as any);
      const result = await patientService.checkIfPatientExists('123');
      expect(result).toEqual('Patient exists');
    });

    it('should throw an error if patient does not exist', async () => {
      jest.spyOn(db.Patient, 'findOne').mockResolvedValueOnce(null as any);
      await expect(patientService.checkIfPatientExists('123')).rejects.toThrow(
        'Patient does not exist'
      );
    });
  });

  describe('createPatient', () => {
    it('should create a patient', async () => {
      jest.spyOn(db.Patient, 'findOne').mockResolvedValueOnce(null as any);
      jest
        .spyOn(db.Patient, 'create')
        .mockResolvedValueOnce('Patient Created Successfully' as any);
      const result = await patientService.createPatient({
        abhaId: '123',
        name: 'John Doe',
        gender: 'M',
        yearOfBirth: 1990,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: {},
        mobile: '123',
        healthNumber: '123',
      });
      expect(result).toEqual('Patient Created Successfully');
    });

    it('should throw an error if patient already exists', async () => {
      jest
        .spyOn(db.Patient, 'findOne')
        .mockResolvedValueOnce('Patient exists' as any);
      await expect(
        patientService.createPatient({
          abhaId: '123',
          name: 'John Doe',
          gender: 'M',
          yearOfBirth: 1990,
          monthOfBirth: 1,
          dayOfBirth: 1,
          address: {},
          mobile: '123',
          healthNumber: '123',
        })
      ).rejects.toThrow('Patient already exists with this Abha-id');
    });

    it('should format health number if it does not have dashes', async () => {
      jest.spyOn(db.Patient, 'findOne').mockResolvedValueOnce(null as any);
      jest
        .spyOn(db.Patient, 'create')
        .mockResolvedValueOnce('Patient Created Successfully' as any);
      const result = await patientService.createPatient({
        abhaId: '123',
        name: 'John Doe',
        gender: 'M',
        yearOfBirth: 1990,
        monthOfBirth: 1,
        dayOfBirth: 1,
        address: {},
        mobile: '123',
        healthNumber: '12345678901234',
      });
      expect(result).toEqual('Patient Created Successfully');
    });
  });

  describe('getPatients', () => {
    it('should return all patients', async () => {
      jest
        .spyOn(db.Patient, 'findAll')
        .mockResolvedValueOnce(['Patient 1', 'Patient 2'] as any);
      const result = await patientService.getPatients();
      expect(result).toEqual(['Patient 1', 'Patient 2']);
    });

    it('should return an empty array if no patients exist', async () => {
      jest.spyOn(db.Patient, 'findAll').mockResolvedValueOnce([] as any);
      const result = await patientService.getPatients();
      expect(result).toEqual([]);
    });
  });

  describe('getPatient', () => {
    it('should return a patient', async () => {
      jest.spyOn(db.Patient, 'findOne').mockResolvedValueOnce('Patient' as any);
      const result = await patientService.getPatient('123');
      expect(result).toEqual('Patient');
    });

    it('should throw an error if patient does not exist', async () => {
      jest.spyOn(db.Patient, 'findOne').mockResolvedValueOnce(null as any);
      await expect(patientService.getPatient('123')).rejects.toThrow(
        'Patient does not exist'
      );
    });
  });

  describe('updatePatient', () => {
    it('should update a patient', async () => {
      jest.spyOn(db.Patient, 'update').mockResolvedValueOnce('Patient' as any);
      jest.spyOn(db.Patient, 'findOne').mockResolvedValueOnce('Patient' as any);
      const result = await patientService.updatePatient({
        abhaId: '123',
        name: 'John',
        gender: 'M',
        yearOfBirth: 2001,
        monthOfBirth: 12,
        dayOfBirth: 7,
        address: {},
        mobile: '8317261525',
        healthNumber: '12345',
      });
      expect(result).toEqual('Patient');
    });
  });

  describe('deletePatient', () => {
    it('should delete a patient', async () => {
      jest.spyOn(db.Patient, 'findOne').mockResolvedValueOnce('Patient' as any);
      jest.spyOn(db.Patient, 'destroy').mockResolvedValueOnce(1 as any);
      const result = await patientService.deletePatient('123');
      expect(result).toEqual(1);
    });

    it('should throw an error if patient does not exist', async () => {
      jest.spyOn(db.Patient, 'findOne').mockResolvedValueOnce(null as any);
      await expect(patientService.deletePatient('123')).rejects.toThrow(
        'Patient does not exist'
      );
    });
  });
});
