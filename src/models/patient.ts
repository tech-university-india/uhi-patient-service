// istanbul ignore file
import { Model, Optional } from 'sequelize';
import { DataTypes } from 'sequelize';
import { sequelize } from './index';

export interface PatientAttributes {
  abhaId: string;
  name: string;
  gender: string;
  yearOfBirth: number;
  monthOfBirth: number;
  dayOfBirth: number;
  address: object;
  mobile: string;
  healthNumber: string;
}

export interface PatientCreationAttributes extends Optional<PatientAttributes, 'abhaId'> { }

export interface PatientInstance
  extends Model<PatientAttributes, PatientCreationAttributes>,
  PatientAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  findOne(options: object): Promise<PatientInstance>;
  destroy: (options?: any) => Promise<any>;
  findAll(): Promise<PatientInstance[]>;
  create: (values: PatientAttributes, options?: any) => Promise<PatientInstance>;
}

const Patient = sequelize.define<PatientInstance>('Patient', {
  abhaId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yearOfBirth: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  monthOfBirth: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dayOfBirth: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  healthNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Patient;
