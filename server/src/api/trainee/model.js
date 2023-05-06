import { DataTypes, Model } from "sequelize";
import db from "../../database/config.js";

class Trainee extends Model {}

Trainee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING(31),
            allowNull: false,
            defaultValue: "",
        },
        lastName: {
            type: DataTypes.STRING(31),
            allowNull: false,
            defaultValue: "",
        },
        patronymic: {
            type: DataTypes.STRING(31),
            allowNull: false,
            defaultValue: "",
        },
        gender: {
            type: DataTypes.ENUM("unknown", "male", "female"),
            allowNull: false,
            defaultValue: "unknown",
        },
        birthdate: {
            type: DataTypes.DATE,
        },
        country: {
            type: DataTypes.STRING(31),
            allowNull: false,
            defaultValue: "",
        },
        region: {
            type: DataTypes.STRING(31),
            allowNull: false,
            defaultValue: "",
        },
        city: {
            type: DataTypes.STRING(31),
            allowNull: false,
            defaultValue: "",
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        emailCode: {
            type: DataTypes.STRING(255),
        },
        emailCodeDate: {
            type: DataTypes.DATE
        },
        hashedPassword: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(15),
            allowNull: false,
            defaultValue: "",
        }
    },
    {
        sequelize: db,
        modelName: "Trainee",
    }
);

export default Trainee;