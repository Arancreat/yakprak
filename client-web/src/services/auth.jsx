import axios from "axios";

const auth = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080/api",
});

export const ApiSignup = async (data) => {
    return auth
        .post("/trainee/signup", {
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
    return auth
        .post("/trainee/login", {
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
