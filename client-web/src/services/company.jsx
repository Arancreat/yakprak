import api from "./instance";

export const ApiGetAllCompanies = async () => {
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

export const ApiGetPage = async ({pageParam = 0}) => {
    return api
        .get(`/company/paginated?page=${pageParam}`)
        .then((response) => {
            return {data: response.data, nextPage: pageParam + 1 };
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

export const ApiCurrentCompanyData = async () => {
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
