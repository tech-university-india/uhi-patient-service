import { Model } from 'sequelize';
export default (sequelize, DataTypes): any => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init({
    abhaId: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    yearOfBirth: DataTypes.NUMBER,
    monthOfBirth: DataTypes.NUMBER,
    dayOfBirth: DataTypes.NUMBER,
    address: DataTypes.JSONB,
    mobile: DataTypes.STRING,
    healthNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};
