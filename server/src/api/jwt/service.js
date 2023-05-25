import ApiError from "../exception.js";
import jwt from "jsonwebtoken";


export const createToken = async (id, role, tokenMaxAge) => {
    try {
        return jwt.sign({ user: id, role: role }, process.env.JWT_SECRET, {
            expiresIn: tokenMaxAge/1000,
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
