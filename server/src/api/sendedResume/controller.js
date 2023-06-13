import ApiError from "../exception.js";
import { decodeToken } from "../jwt/service.js";
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
    getByJwt: async (req, res) => {
        const token = req.cookies.jwt;
        try {
            const tokenPayload = await decodeToken(token).then((response) => {
                return response;
            });

            if (tokenPayload.role == "company") {
                await SendedResume.findAll({
                    where: { companyId: tokenPayload.user },
                }).then((response) => {
                    return res.status(200).json(response);
                });
            } else if (tokenPayload.role == "trainee") {
                await SendedResume.findAll({
                    where: { resumeId: tokenPayload.user },
                }).then((response) => {
                    return res.status(200).json(response);
                });
            } else return res.status(401).json({ message: "Invalid token" });
        } catch (error) {
            error = ApiError.InternalServerError(
                error.name + "\r\n" + error.stack
            );
            return res.status(error.status).json(error.data);
        }
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
