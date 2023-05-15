const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Patient Service API',
    version: '0.0.1',
    description: 'Patient Service API',
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, 'routes/*.ts')],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = {swaggerSpec};
