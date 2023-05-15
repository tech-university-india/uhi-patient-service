const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');

const {swaggerSpec: swaggerSpecs} = require('../swagger');

router.use('', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

export default router;
