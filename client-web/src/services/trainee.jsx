import api from "./instance";

export const ApiCurrentUserData = async (data) => {
    return api
        .get("/trainee/currentUser")
        .then((response) => {
            return response;
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
