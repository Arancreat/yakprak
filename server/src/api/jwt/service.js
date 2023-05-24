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

export const decodeToken = async (token) => {
    try {
        return jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, decodedToken) => {
                if (err) return null;
                else return decodedToken;
            }
        );
    } catch (error) {
        if (error.status == undefined)
            error = ApiError.InternalServerError(error.message);
        return res.status(error.status).json(error.data);
    }
};
