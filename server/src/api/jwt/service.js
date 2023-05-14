import ApiError from "../exception.js";
import jwt from "jsonwebtoken";

const maxLifeTime = 5 * 60;

export const createToken = async (id, role) => {
    try {
        return jwt.sign({ user: id, role: role }, process.env.JWT_SECRET, {
            expiresIn: maxLifeTime,
        });
    } catch (error) {
        if (error.status == undefined)
            error = ApiError.InternalServerError(error.message);
        return res.status(error.status).json(error.data);
    }
};
