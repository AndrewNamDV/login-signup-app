import { sequelize } from "../sequelize";
import { Model,DataTypes} from "sequelize";

class User extends Model {}
User.init({
   ID: {
     type: DataTypes.INT,
     allowNull: false
   },
   Name: {
    type: DataTypes.VARCHAR(100),
   },
  DateofBirth: {
    type: DataTypes.DATE,
    allowNull:true
  },
  Role_ID: {
    type: DataTypes.INT,
    allowNull:true
  },
  Email: {
    type: DataTypes.VARCHAR(100),
    allowNull: true
  },
  Phone: {
    type: DataTypes.CHAR(11),
    allowNull:true
  }
  }, {
    sequelize,
    modelName:'User'
  });

console.log(User === sequelize.models.User)
