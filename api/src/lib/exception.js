import logger from "../utils/logger.js";

export default class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    ToObject() {
        return {
            status: this.status,
            success: 0,
            errors: this.errors,
            data: {},
        };
    }

    static UnauthorizedError() {
        const error = new ApiError(401, "User not authorized");
        const response = error.ToObject();
        response.data = {
            message: error.message,
        };
        return response;
    }

    static BadRequest(message, errors = "") {
        const error = new ApiError(400, message, errors);
        const response = error.ToObject();
        response.data = {
            message: error.message,
        };
        if (response.errors) {
            logger.error(response.errors);
        }
        return response;
    }

    static InternalServerError(errors = "") {
        const error = new ApiError(500, "Internal Server Error", errors);
        const response = error.ToObject();
        response.data = {
            message: error.message,
        };
        if (response.errors) {
            logger.error(response.errors);
        }
        return response;
    }
    
    static NotFound(message, errors = "") {
        const error = new ApiError(400, message, errors);
        const response = error.ToObject();
        response.data = {
            message: error.message,
        };
        if (response.errors) {
            logger.error(response.errors);
        }
        return response;
    }
}
