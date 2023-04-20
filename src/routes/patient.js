const router = require('express').Router()
const patientController = require('../controllers/patient')

router.get('/checkIfPatientExists/:email', patientController.checkIfPatientExists)
router.post('/create', patientController.createPatient)
router.get('/get', patientController.getPatients)
router.get('/get/:id', patientController.getPatient)
router.put('/update/:id', patientController.updatePatient)
router.delete('/delete/:id', patientController.deletePatient)

module.exports = router
