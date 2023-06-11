import { DataTypes, Model } from "sequelize";
import db from "../../database/config.js";

class Company extends Model {}

Company.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        companyName: {
            type: DataTypes.STRING(30),
            allowNull: false,
            defaultValue: "",
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "",
        },
        category: {
            type: DataTypes.STRING(30),
            allowNull: false,
            defaultValue: "none",
        },
        country: {
            type: DataTypes.STRING(30),
            allowNull: false,
            defaultValue: "Россия",
        },
        region: {
            type: DataTypes.STRING(30),
            allowNull: false,
            defaultValue: "Республика Саха (Якутия)",
        },
        city: {
            type: DataTypes.STRING(30),
            allowNull: false,
            defaultValue: "Якутск",
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
            type: DataTypes.DATE,
        },
        hashedPassword: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(15),
            allowNull: false,
            defaultValue: "",
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "/files/avatar_default.jpg",
        },
    },
    {
        sequelize: db,
        modelName: "Company",
    }
);

export default Company;
