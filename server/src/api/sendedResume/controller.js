import ApiError from "../exception.js";
import SendedResume from "./model.js";

const controller = {
    getByResume: async (req, res) => {
        const resumeId = req.query.resumeId;
        await SendedResume.findAll({ where: { resumeId: resumeId } })
            .then((response) => {
                return res.status(200).json(response);
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
    getByCompany: async (req, res) => {
        const companyId = req.query.companyId;
        await SendedResume.findAll({ where: { companyId: companyId } })
            .then((response) => {
                return res.status(200).json(response);
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
    send: async (req, res) => {
        const data = req.body;
        await SendedResume.create({
            resumeId: data.resumeId,
            companyId: data.companyId,
        })
            .then((response) => {
                return res.status(200).json({ message: "Резюме отправлено" });
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
    accept: async (req, res) => {
        const data = req.body;
        await SendedResume.update(
            {
                status: true,
            },
            {
                where: {
                    resumeId: data.resumeId,
                    companyId: data.companyId,
                },
            }
        )
            .then((response) => {
                return res.status(200).json({ message: "Резюме принято" });
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
    decline: async (req, res) => {
        const resumeId = req.query.resumeId;
        const companyId = req.query.companyId;
        await SendedResume.destroy({
            where: {
                resumeId: resumeId,
                companyId: companyId,
            },
        })
            .then((response) => {
                return res.status(200).json({ message: "Резюме отклонено" });
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
};

export default controller;
