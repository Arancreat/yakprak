import { DataTypes, Model } from "sequelize";
import db from "../../database/config.js";
import Trainee from "../trainee/model.js";

class Resume extends Model {}

Resume.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        traineeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Trainee,
                key: "id",
            },
            onDelete: "CASCADE",
        },
        aboutMe: {
            type: DataTypes.STRING(511),
            allowNull: false,
            defaultValue: "",
        },
        skills: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "",
        },
        pros: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "",
        },
        cons: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "",
        },
        languages: {
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue: "",
        },
    },
    {
        sequelize: db,
        modelName: "Resume",
    }
);

export default Resume;
