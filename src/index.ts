import express from 'express'
import cors from 'cors'
import patientRouter from './routes/patient'
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/patient', patientRouter);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
