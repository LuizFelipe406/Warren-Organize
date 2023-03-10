import { DataTypes, Model } from 'sequelize';
import sequelize from './index';
import Account from './Account';

class Revenue extends Model {
  declare id: number;
  declare name: string;
  declare amount: number;
  declare date: Date;
  declare category: string;
  declare type: string;
  declare userId: number;
}

Revenue.init({
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
  date: {
    type: DataTypes.DATE,
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
  modelName: 'Revenue',
  tableName: 'Revenues',
  timestamps: false,
  underscored: true,
  sequelize: sequelize,
});

Account.hasMany(Revenue, { foreignKey: 'userId' });

Revenue.belongsTo(Account, { foreignKey: 'userId' });

export default Revenue;