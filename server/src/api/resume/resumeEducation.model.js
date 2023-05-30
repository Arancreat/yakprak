import { DataTypes, Model } from "sequelize";
import db from "../../database/config.js";
import Resume from "./resume.model.js";

class ResumeEducation extends Model {}

ResumeEducation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        resumeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Resume,
                key: "id",
            },
            onDelete: "CASCADE",
        },
        stage: {
            type: DataTypes.ENUM(
                "unknown", // Неизвестен
                "secondary", // Среднее общее (11 класс)
                "professional", // Среднее профессиональное (колледж)
                "bachelor", // Бакалавр
                "master" // Магистр
            ),
            allowNull: false,
            defaultValue: "unknown",
        },
        institute: {
            type: DataTypes.STRING(60),
            allowNull: false,
            defaultValue: "",
        },
        faculty: {
            type: DataTypes.STRING(60),
            allowNull: false,
            defaultValue: "",
        },
        speciality: {
            type: DataTypes.STRING(60),
            allowNull: false,
            defaultValue: "",
        },
        graduationYear: {
            type: DataTypes.STRING(4),
            allowNull: false,
            defaultValue: "",
        },
    },
    {
        sequelize: db,
        modelName: "ResumeEducation",
        timestamps: false,
    }
);

export default ResumeEducation;
