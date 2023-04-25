import { Router } from 'express'
const router = Router()
import patientController from '../controllers/patient'

router.get('/checkIfPatientExists/:abhaId', patientController.checkIfPatientExists)
router.post('/createPatient', patientController.createPatient)
router.get('/allPatients', patientController.getPatients)
router.get('/getPatient/:abhaId', patientController.getPatient)
router.put('/updatePatient', patientController.updatePatient)
router.delete('/deletePatient/:abhaId', patientController.deletePatient)

export default router;