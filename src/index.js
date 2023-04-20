const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/**
 * @param {Request} req;
 * @param {Response} res;
 */

app.get('/', (req, res) => {

	res.send('Hello World');

});


app.listen(5000);