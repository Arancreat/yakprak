import api from "./instance";

export const ApiSignup = async (data) => {
    return api
        .post("/company/signup", {
            companyName: data.companyName,
            email: data.email,
            password: data.password,
        })
        .then((response) => {
            return response.status;
        })
        .catch((error) => {
            if (error.response) {
                return error.response.status;
            } else if (error.request) {
                return 503;
            } else {
                return 400;
            }
        });
};

export const ApiLogin = async (data) => {
    return api
        .post("/company/login", {
            email: data.email,
            password: data.password,
        })
        .then((response) => {
            return response.status;
        })
        .catch((error) => {
            if (error.response) {
                return error.response.status;
            } else if (error.request) {
                return 503;
            } else {
                return 400;
            }
        });
};
