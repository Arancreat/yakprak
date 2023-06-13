import api from "./instance";

export const ApiCurrentUserData = async () => {
    return api
        .get("/trainee/currentUser")
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

export const ApiGetTrainee = async (traineeId) => {
    return api
        .get(`/trainee/id/${traineeId}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            if (error.response) {
                if (error.response.status == 401) {
                    return error.response.status;
                }
                return error.response.status;
            } else if (error.request) {
                return 503;
            } else {
                return 400;
            }
        });
};

export const ApiPostAvatar = async (data) => {
    return api
        .post("/trainee/upload-avatar", data)
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

export const ApiPutProfileData = async (data) => {
    return api
        .put("/trainee/update", data)
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
