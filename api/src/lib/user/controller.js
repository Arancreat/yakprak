import ApiError from "../exception.js";
import user from "./model.js";

const controller = {
    getAll: async (req, res) => {
        user.getAll()
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
        user.getById(data)
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((error) => {
                if (error.status == undefined)
                    error = ApiError.InternalServerError(error.message);
                return res.status(error.status).json(error.data);
            });
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
