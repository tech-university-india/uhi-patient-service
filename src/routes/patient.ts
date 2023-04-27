import { Router } from 'express'
const router = Router()
import patientController from '../controllers/patient.js'
import validator from '../middlewares/middleware.js'

router.get('/checkIfPatientExists/:abhaId', patientController.checkIfPatientExists)
router.post('/createPatient', validator.createPatientValidation, patientController.createPatient)
router.get('/allPatients', patientController.getPatients)
router.get('/getPatient/:abhaId', patientController.getPatient)
router.put('/updatePatient', validator.createPatientValidation, patientController.updatePatient)
router.delete('/deletePatient/:abhaId', patientController.deletePatient)

export default router;