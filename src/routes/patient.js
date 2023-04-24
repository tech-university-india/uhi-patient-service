const router = require('express').Router()
const patientController = require('../controllers/patient')
const { abhaIdValidator, createPatientValidation } = require('../middlewares/middleware')

router.get('/checkIfPatientExists', abhaIdValidator, patientController.checkIfPatientExists)
router.post('/create', createPatientValidation, patientController.createPatient)
router.get('/getPatients', patientController.getPatients)
router.get('/getPatient', abhaIdValidator, patientController.getPatient)
router.put('/update', abhaIdValidator, patientController.updatePatient)
router.delete('/delete', abhaIdValidator, patientController.deletePatient)

module.exports = router
