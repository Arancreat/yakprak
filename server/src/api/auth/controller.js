import ApiError from "../exception.js";
import user from "../user/model.js";
import bcrypt from "bcrypt";

const controller = {
    signup: async (req, res) => {
        const data = req.body;
        try {
            const salt = await bcrypt.genSalt();
            data.hashed_password = await bcrypt.hash(data.password, salt);
            const userResponse = await user.create(data).then((response) => {
                return response;
            });

            res.status(200).json(userResponse);
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
};

export default controller;
