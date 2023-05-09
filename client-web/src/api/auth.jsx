import axios from "axios";

const ApiSignup = (data) => {
    const auth = axios.create({
        withCredentials: true,
        baseURL: "http://localhost:8080/api",
    });

    // auth.interceptors.request.use((config) => {
    //     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    //     return config
    // })

    auth.post("/trainee/signup", {
        email: data.email,
        password: data.password,
    })
        .then((res) => {
            if (res.status == 200) console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
};

export default ApiSignup;
