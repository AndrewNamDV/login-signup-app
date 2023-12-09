import { sequelize } from "../sequelize";
import {Model,DataTypes} from "./user"

class Book extends Model {}
Book.init({
    ID: {
        type:DataTypes.INTERGER,
        allowNull: true  
    },
    Name:{
        type:DataTypes.VARCHAR(200),
        allowNull: false
    },
    PublishDate:{
        type:DataTypes.DATEONLY,
    },
    Author:{
        type:DataTypes.STRING,
        allowNull:false  
    },
})