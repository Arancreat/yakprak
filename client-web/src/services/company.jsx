import api from "./instance";

export const ApiCurrentUserData = async () => {
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

export const ApiCurrentCompanyData = async (data) => {
    return api
        .get("/company/currentUser")
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

export const ApiPostCompanyAvatar = async (data) => {
    return api
        .post("/company/upload-avatar", data)
        .then((response) => {
            return response.data;
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

export const ApiPutCompanyProfileData = async (data) => {
    return api
        .put("/company/update", data)
        .then((response) => {
            return response.data;
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