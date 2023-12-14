import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL || "http://localhost:5000",
    headers: {
        "content-type": "application/json",
    },
});

export default axiosInstance;
