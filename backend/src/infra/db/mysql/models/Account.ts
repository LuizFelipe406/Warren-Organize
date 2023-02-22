import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Account extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

Account.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  modelName: 'Account',
  tableName: 'Accounts',
  timestamps: false,
  sequelize: sequelize,
});

export default Account;