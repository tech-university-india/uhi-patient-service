import { Router } from 'express'
const router = Router()
import patientController from '../controllers/patient'

router.get('/checkIfPatientExists/:abhaId', patientController.checkIfPatientExists)
router.post('/create', patientController.createPatient)
router.get('/patients', patientController.getPatients)
router.get('/get/:abhaId', patientController.getPatient)
router.put('/update/:abhaId', patientController.updatePatient)
router.delete('/delete/:abhaId', patientController.deletePatient)

export default router;