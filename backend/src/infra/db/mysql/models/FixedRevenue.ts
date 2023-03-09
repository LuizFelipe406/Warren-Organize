import { DataTypes, Model } from 'sequelize';
import sequelize from './index';
import Account from './Account';

class FixedRevenue extends Model {
  declare id: number;
  declare name: string;
  declare amount: number;
  declare category: string;
  declare userId: number;
}

FixedRevenue.init({
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
  userId: {
    type: DataTypes.INTEGER,
  }
}, {
  modelName: 'FixedRevenue',
  tableName: 'FixedRevenues',
  timestamps: false,
  underscored: true,
  sequelize: sequelize,
});

Account.hasMany(FixedRevenue, { foreignKey: 'userId' });

FixedRevenue.belongsTo(Account, { foreignKey: 'userId' });

export default FixedRevenue;