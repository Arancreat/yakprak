import ApiError from "../exception.js";
import bcrypt from "bcrypt";
import { createToken, decodeToken } from "../jwt/service.js";
import Company from "./model.js";
import { uploadSingleImage } from "../upload/service.js";

const tokenMaxAge = 1000 * 60 * 60;

const controller = {
    getAll: async (req, res) => {
        await Company.findAll({
            attributes: ["id", "companyName", "description", "category", "avatar"],
        })
            .then((response) => {
                return res.status(200).json(response);
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
    getById: async (req, res) => {
        const id = req.params.id;
        await Company.findByPk(id)
            .then((response) => {
                return res.status(200).json(response);
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
    getCurrentUser: async (req, res) => {
        const token = req.cookies.jwt;
        try {
            const tokenPayload = await decodeToken(token).then((response) => {
                return response;
            });
            if (tokenPayload) {
                if (tokenPayload.role == "company") {
                    await Company.findByPk(tokenPayload.user).then((response) => {
                        return res.status(200).json(response);
                    });
                }
                else return res.status(401).json({ meessage: "Incorrect token" });
            } else return res.status(401).json({ meessage: "Incorrect token" });
        } catch (error) {
            error = ApiError.InternalServerError(
                error.name + "\r\n" + error.stack
            );
            return res.status(error.status).json(error.data);
        }
    },
    postSignup: async (req, res) => {
        const data = req.body;
        try {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(data.password, salt);

            const newCompany = await Company.create({
                companyName: data.companyName,
                email: data.email,
                hashedPassword: hashedPassword,
            });

            const token = await createToken(
                newCompany.id,
                "company",
                tokenMaxAge
            );

            res.cookie("jwt", token, {
                maxAge: tokenMaxAge,
                sameSite: "Strict",
            });
            res.cookie("role", "company", {
                maxAge: tokenMaxAge,
                sameSite: "Strict",
            });

            return res.status(200).json({ companyId: newCompany.id });
        } catch (error) {
            error = ApiError.InternalServerError(
                error.name + "\r\n" + error.stack
            );
            return res.status(error.status).json(error.data);
        }
    },
    postLogin: async (req, res) => {
        const data = req.body;
        try {
            const company = await Company.findOne({
                where: { email: data.email },
            });
            if (company === null) {
                return res
                    .status(403)
                    .json({ message: "Wrong email or password" });
            }

            const auth = await bcrypt.compare(
                data.password,
                company.hashedPassword
            );
            if (!auth) {
                return res
                    .status(403)
                    .json({ message: "Wrong email or password" });
            }

            const token = await createToken(company.id, "company", tokenMaxAge);
            
            res.cookie("jwt", token, {
                maxAge: tokenMaxAge,
                sameSite: "Strict",
            });
            res.cookie("role", "company", {
                maxAge: tokenMaxAge,
                sameSite: "Strict",
            });

            return res.status(200).json({ companyId: company.id });
        } catch (error) {
            error = ApiError.InternalServerError(error.stack);
            return res.status(error.status).json(error.data);
        }
    },
    postUploadAvatar: async (req, res) => {
        uploadSingleImage(req, res, (err) => {
            try {
                Company.update(
                    { avatar: "/files/" + req.file.filename },
                    { where: { id: req.body.id } }
                );

                res.status(200).json({ path: "/files/" + req.file.filename });
            } catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    },
    putUpdate: async (req, res) => {
        const data = req.body;
        const company = await Company.update(
            {
                companyName: data.companyName,
                description: data.description,
                category: data.category,
                phone: data.phone,
            },
            { where: { id: data.id } }
        )
            .then((response) => {
                return res
                    .status(200)
                    .json({ message: "Профиль успешно обновлен" });
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
};

export default controller;
