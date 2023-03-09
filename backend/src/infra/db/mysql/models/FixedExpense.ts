import { DataTypes, Model } from 'sequelize';
import sequelize from './index';
import Account from './Account';

class FixedExpense extends Model {
  declare id: number;
  declare name: string;
  declare amount: number;
  declare category: string;
  declare type: string;
  declare userId: number;
}

FixedExpense.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
  }
}, {
  modelName: 'FixedExpense',
  tableName: 'FixedExpenses',
  timestamps: false,
  underscored: true,
  sequelize: sequelize,
});

Account.hasMany(FixedExpense, { foreignKey: 'userId', as: 'user' });

FixedExpense.belongsTo(Account, { foreignKey: 'userId', as: 'user' });

export default FixedExpense;