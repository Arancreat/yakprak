import ApiError from "../exception.js";
import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                return res.status(401).json({ message: "Please login" });
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        return res.status(401).json({ message: "Please login" });
    }
};

export default requireAuth;
