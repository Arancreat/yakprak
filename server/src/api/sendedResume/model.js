import { DataTypes, Model } from "sequelize";
import db from "../../database/config.js";
import Resume from "../resume/model.js";
import Company from "../company/model.js";

class SendedResume extends Model {}

SendedResume.init(
    {
        resumeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Resume,
                key: "id",
            },
            onDelete: "CASCADE",
        },
        companyId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Company,
                key: "id",
            },
            onDelete: "CASCADE",
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize: db,
        modelName: "SendedResume",
    }
);

export default SendedResume;