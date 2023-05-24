import ApiError from "../exception.js";
import logger from "../../utils/logger.js";
import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: "Please login" });
            } else {
                next();
            }
        });
    } else {
        return res.status(401).json({ message: "Please login" });
    }
};

export default requireAuth;
