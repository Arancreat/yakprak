import ApiError from "../exception.js";
import bcrypt from "bcrypt";
import Trainee from "./model.js";

const controller = {
    getAll: async (req, res) => {
        await Trainee.findAll()
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((error) => {
                if (error.status == undefined)
                    error = ApiError.InternalServerError(error.message);
                return res.status(error.status).json(error.data);
            });
    },
    getById: async (req, res) => {
        const id = req.params.id;
        await Trainee.findByPk(id)
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((error) => {
                if (error.status == undefined)
                    error = ApiError.InternalServerError(error.message);
                return res.status(error.status).json(error.data);
            });
    },
    signup: async (req, res) => {
        const data = req.body;
        try {
            const salt = await bcrypt.genSalt();
            data.hashed_password = await bcrypt.hash(data.password, salt);

            const newTrainee = await Trainee.create({
                email: data.email,
                hashed_password: data.hashed_password,
            });

            res.status(200).json(newTrainee);
        } catch (error) {
            if (error.status == undefined)
                error = ApiError.InternalServerError(error.message);
            return res.status(error.status).json(error.data);
        }
    },
    login: async (req, res) => {
        const data = req.body;
        try {
            console.log("User log in:");
            console.log(data);
            res.status(200).json(data);
        } catch (error) {
            if (error.status == undefined)
                error = ApiError.InternalServerError(error.message);
            return res.status(error.status).json(error.data);
        }
    },
    update: async (req, res) => {
        const data = req.body;
        user.update(data)
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((error) => {
                if (error.status == undefined)
                    error = ApiError.InternalServerError(error.message);
                return res.status(error.status).json(error.data);
            });
    },
};

export default controller;
