import {Router} from 'express';
import PatientController from '../controllers/patient';
import {createPatientValidation} from '../middlewares/middleware';

const router: Router = Router();

/**
 * @openapi
 * /patient/checkIfPatientExists/{abhaId}:
 *   get:
 *     summary: Check if patient exists
 *     description: Check if patient exists
 *     parameters:
 *       - in: path
 *         name: abhaId
 *         schema:
 *           type: string
 *         required: true
 *         description: abhaId of the patient
 *     responses:
 *       200:
 *         description: Patient exists
 *       404:
 *         description: Patient does not exist
 *       500:
 *         description: Internal Server Error
 */

router.get(
  '/checkIfPatientExists/:abhaId',
  PatientController.checkIfPatientExists
);

/**
 * @openapi
 * /patient/createPatient:
 *   post:
 *     summary: Create a new patient
 *     description: Create a new patient
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       200:
 *         description: Patient created successfully
 *       500:
 *         description: Internal Server Error
 *     components:
 *       schemas:
 *         Patient:
 *           type: object
 *           required:
 *             - abhaId
 *             - name
 *             - gender
 *             - mobile
 *             - address
 *             - yearOfBirth
 *             - monthOfBirth
 *             - dayOfBirth
 *             - healthNumber
 *           properties:
 *             abhaId:
 *               type: string
 *             name:
 *               type: string
 *             gender:
 *               type: string
 *             mobile:
 *               type: string
 *             address:
 *               type: object
 *               required:
 *                 - line
 *                 - district
 *                 - state
 *                 - pincode
 *               properties:
 *                 line:
 *                   type: string
 *                 district:
 *                   type: string
 *                 state:
 *                   type: string
 *                 pincode:
 *                   type: string
 *             yearOfBirth:
 *               type: number
 *             monthOfBirth:
 *               type: number
 *             dayOfBirth:
 *               type: number
 *             healthNumber:
 *               type: string
 *           example:
 *             abhaId: 123456
 *             name: John Doe
 *             gender: M
 *             mobile: 1234567890
 *             address:
 *               line: 123, Main Street
 *               district: New York
 *               state: New York
 *               pincode: 123456
 *             yearOfBirth: 1990
 *             monthOfBirth: 1
 *             dayOfBirth: 1
 *             healthNumber: 12-1234-1234-1234
 */

router.post(
  '/createPatient',
  createPatientValidation,
  PatientController.createPatient
);

/**
 * @openapi
 * /patient/getPatients:
 *   get:
 *     summary: Get all patients
 *     description: Get all patients
 *     responses:
 *       200:
 *         description: All patients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       500:
 *         description: Internal Server Error
 */

router.get('/allPatients', PatientController.getPatients);

/**
 * @openapi
 * /patient/getPatient/{abhaId}:
 *   get:
 *     summary: Get a patient
 *     description: Get a patient
 *     parameters:
 *       - in: path
 *         name: abhaId
 *         schema:
 *           type: string
 *         required: true
 *         description: abhaId of the patient
 *     responses:
 *       200:
 *         description: Patient
 *       500:
 *         description: Internal Server Error
 *     components:
 *       schemas:
 *         Patient:
 *           type: object
 *           required:
 *             - abhaId
 *             - name
 *             - gender
 *             - mobile
 *             - address
 *             - yearOfBirth
 *             - monthOfBirth
 *             - dayOfBirth
 *             - healthNumber
 *           properties:
 *             abhaId:
 *               type: string
 *             name:
 *               type: string
 *             gender:
 *               type: string
 *             mobile:
 *               type: string
 *             address:
 *               type: object
 *               required:
 *                 - line
 *                 - district
 *                 - state
 *                 - pincode
 *               properties:
 *                 line:
 *                   type: string
 *                 district:
 *                   type: string
 *                 state:
 *                   type: string
 *                 pincode:
 *                   type: string
 *             yearOfBirth:
 *               type: number
 *             monthOfBirth:
 *               type: number
 *             dayOfBirth:
 *               type: number
 *             healthNumber:
 *               type: string
 *           example:
 *             abhaId: 123456
 *             name: John Doe
 *             gender: M
 *             mobile: 1234567890
 *             address:
 *               line: 123, Main Street
 *               district: New York
 *               state: New York
 *               pincode: 123456
 *             yearOfBirth: 1990
 *             monthOfBirth: 1
 *             dayOfBirth: 1
 *             healthNumber: 12-1234-1234-1234
 */

router.get('/getPatient/:abhaId', PatientController.getPatient);

/**
 * @openapi
 * /patient/updatePatient:
 *   put:
 *     summary: Update a patient
 *     description: Update a patient
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       200:
 *         description: Patient updated successfully
 *       500:
 *         description: Internal Server Error
 *     components:
 *       schemas:
 *         Patient:
 *           type: object
 *           required:
 *             - abhaId
 *             - name
 *             - gender
 *             - mobile
 *             - address
 *             - yearOfBirth
 *             - monthOfBirth
 *             - dayOfBirth
 *             - healthNumber
 *           properties:
 *             abhaId:
 *               type: string
 *             name:
 *               type: string
 *             gender:
 *               type: string
 *             mobile:
 *               type: string
 *             address:
 *               type: object
 *               required:
 *                 - line
 *                 - district
 *                 - state
 *                 - pincode
 *               properties:
 *                 line:
 *                   type: string
 *                 district:
 *                   type: string
 *                 state:
 *                   type: string
 *                 pincode:
 *                   type: string
 *             yearOfBirth:
 *               type: number
 *             monthOfBirth:
 *               type: number
 *             dayOfBirth:
 *               type: number
 *             healthNumber:
 *               type: string
 *           example:
 *             abhaId: 123456
 *             name: John Doe
 *             gender: M
 *             mobile: 1234567890
 *             address:
 *               line: 123, Main Street
 *               district: New York
 *               state: New York
 *               pincode: 123456
 *             yearOfBirth: 1990
 *             monthOfBirth: 1
 *             dayOfBirth: 1
 *             healthNumber: 12-1234-1234-1234
 */

router.put(
  '/updatePatient',
  createPatientValidation,
  PatientController.updatePatient
);

/**
 * @openapi
 * /patient/deletePatient/{abhaId}:
 *   delete:
 *     summary: Delete a patient
 *     description: Delete a patient
 *     parameters:
 *       - in: path
 *         name: abhaId
 *         schema:
 *           type: string
 *         required: true
 *         description: abhaId of the patient
 *     responses:
 *       200:
 *         description: Patient deleted successfully
 *       500:
 *         description: Internal Server Error
 *     components:
 *       schemas:
 *         Patient:
 *           type: object
 *           required:
 *             - abhaId
 *             - name
 *             - gender
 *             - mobile
 *             - address
 *             - yearOfBirth
 *             - monthOfBirth
 *             - dayOfBirth
 *             - healthNumber
 *           properties:
 *             abhaId:
 *               type: string
 *             name:
 *               type: string
 *             gender:
 *               type: string
 *             mobile:
 *               type: string
 *             address:
 *               type: object
 *               required:
 *                 - line
 *                 - district
 *                 - state
 *                 - pincode
 *               properties:
 *                 line:
 *                   type: string
 *                 district:
 *                   type: string
 *                 state:
 *                   type: string
 *                 pincode:
 *                   type: string
 *             yearOfBirth:
 *               type: number
 *             monthOfBirth:
 *               type: number
 *             dayOfBirth:
 *               type: number
 *             healthNumber:
 *               type: string
 *           example:
 *             abhaId: 123456
 *             name: John Doe
 *             gender: M
 *             mobile: 1234567890
 *             address:
 *               line: 123, Main Street
 *               district: New York
 *               state: New York
 *               pincode: 123456
 *             yearOfBirth: 1990
 *             monthOfBirth: 1
 *             dayOfBirth: 1
 *             healthNumber: 12-1234-1234-1234
 */

router.delete('/deletePatient/:abhaId', PatientController.deletePatient);

export default router;
