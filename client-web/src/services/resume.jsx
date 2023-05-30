import api from "./instance";

export const ApiGetCurrentTraineeResume = async () => {
    return api
        .get("/resume/getCurrentTraineeResume")
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

export const ApiGetEducationData = async (resumeId) => {
    return api
        .get(`/resume/education/${resumeId}`)
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
