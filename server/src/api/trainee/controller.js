import ApiError from "../exception.js";
import bcrypt from "bcrypt";
import { createToken, decodeToken } from "../jwt/service.js";
import Trainee from "./model.js";

const tokenMaxAge = 1000 * 10 * 60;

const controller = {
    getAll: async (req, res) => {
        await Trainee.findAll({
            attributes: ["id", "email"],
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
        await Trainee.findByPk(id)
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
                await Trainee.findByPk(tokenPayload.user).then((response) => {
                    return res.status(200).json(response);
                });
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

            const newTrainee = await Trainee.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                hashedPassword: hashedPassword,
            });

            const token = await createToken(
                newTrainee.id,
                "trainee",
                tokenMaxAge
            );
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: tokenMaxAge,
                sameSite: "Strict",
            });

            return res.status(200).json({ traineeId: newTrainee.id });
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
            const trainee = await Trainee.findOne({
                where: { email: data.email },
            });
            if (trainee === null) {
                return res
                    .status(403)
                    .json({ message: "Wrong email or password" });
            }

            const auth = await bcrypt.compare(
                data.password,
                trainee.hashedPassword
            );
            if (!auth) {
                return res
                    .status(403)
                    .json({ message: "Wrong email or password" });
            }

            const token = await createToken(trainee.id, "trainee", tokenMaxAge);
            res.cookie("jwt", token, {
                maxAge: tokenMaxAge,
                sameSite: "Strict",
            });

            return res.status(200).json({ traineeId: trainee.id });
        } catch (error) {
            error = ApiError.InternalServerError(error.stack);
            return res.status(error.status).json(error.data);
        }
    },
    putUpdate: async (req, res) => {
        const data = req.body;
        user.update(data)
            .then((response) => {
                return res.status(200).json(response);
            })
            .catch((error) => {
                error = ApiError.InternalServerError(error.stack);
                return res.status(error.status).json(error.data);
            });
    },
};

export default controller;
