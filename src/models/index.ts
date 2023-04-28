import { Sequelize } from 'sequelize';
import { PatientInstance } from './patient';
const env = process.env.NODE_ENV || 'development';
const config = require('../../database/config/config.json')[env];

interface Database {
  sequelize: Sequelize;
  Patient: PatientInstance;
}

export const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db: Database = {
  sequelize,
  Patient: require('./patient').default,
};

export default db;