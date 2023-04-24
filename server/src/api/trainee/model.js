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
        email_activation_link: {
            type: DataTypes.STRING(255),
        },
        email_code: {
            type: DataTypes.STRING(255),
        },
        email_is_activated: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        hashed_password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(15),
            allowNull: false,
            defaultValue: "",
        },
        phone_is_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize: db,
        modelName: "Trainee",
    }
);

export default Trainee;