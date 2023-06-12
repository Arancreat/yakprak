import api from "./instance";

export const ApiGetAllSendedResumes = async () => {
    return api
        .get("/sendedResume/all")
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

export const ApiSendResume = async (data) => {
    return api
        .put("/sendedResume/send", data)
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

export const ApiAcceptSendedResume = async (data) => {
    return api
        .put("/sendedResume/accept", data)
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

export const ApiDeclineSendedResume = async (data) => {
    return api
        .delete("/sendedResume/decline", {
            params: {
                resumeId: data.resumeId,
                companyId: data.companyId,
            },
        })
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
