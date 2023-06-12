import api from "./instance";

export const ApiCurrentUserData = async (data) => {
    return api
        .get("/company/all")
        .then((response) => {
            return response;
        })
        .catch((error) => {
            if (error.response) {
                if (error.response.status == 401) {
                    window.location.assign("/401");
                }
                return error.response.status;
            } else if (error.request) {
                return 503;
            } else {
                return 400;
            }
        });
};