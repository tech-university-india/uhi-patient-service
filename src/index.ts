import express from 'express';
import cors from 'cors';
import patientRouter from './routes/patient';
import apiDocs from './routes/apiDocs';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/patient', patientRouter);
app.use('/api-docs', apiDocs);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
