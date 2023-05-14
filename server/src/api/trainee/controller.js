import ApiError from "../exception.js";
import bcrypt from "bcrypt";
import { createToken } from "../jwt/service.js";
import Trainee from "./model.js";

const controller = {
    getAll: async (req, res) => {
        await Trainee.findAll({
            attributes: ["id", "email"],
        })
            .then((response) => {
                const cookies = req.cookies;
                console.log(cookies);

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
    postSignup: async (req, res) => {
        const data = req.body;
        try {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(data.password, salt);

            const newTrainee = await Trainee.create({
                email: data.email,
                hashedPassword: hashedPassword,
            });

            const token = await createToken(newTrainee.id);
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24,
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

            const token = await createToken(trainee.id);
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24,
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
