import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (axios.isAxiosError(error)) {
            console.error("Axios error:", error.message);
        } else {
            console.error("Unknown error:", error);
        }
        return Promise.reject(error);
    }
);

export default api;