import { Router } from 'express';
import PatientController from '../controllers/patient';
import { createPatientValidation } from '../middlewares/middleware';

const router: Router = Router();

router.get('/checkIfPatientExists/:abhaId', PatientController.checkIfPatientExists);
router.post('/createPatient', createPatientValidation, PatientController.createPatient);
router.get('/allPatients', PatientController.getPatients);
router.get('/getPatient/:abhaId', PatientController.getPatient);
router.put('/updatePatient', createPatientValidation, PatientController.updatePatient);
router.delete('/deletePatient/:abhaId', PatientController.deletePatient);

export default router;