const express = require('express')
const patientRouter = require('./src/routes/patient')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/**
 * @param {Request} req;
 * @param {Response} res;
 */

app.use('/patient', patientRouter)

app.listen(5000, () => {
  console.log('Server started on port 3000')
})
