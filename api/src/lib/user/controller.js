import User from "./model.js";
import ApiError from "../exception.js";
import logger from "../../utils/logger.js";

const Controller = {
    helloWorld: async (req, res) => {
        res.status(200).json({ message: "Hello world!" });
    },

    getAll: async (req, res) => {
        User.getAll()
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
        const data = req.params;
        User.getById(data)
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

export default Controller;
