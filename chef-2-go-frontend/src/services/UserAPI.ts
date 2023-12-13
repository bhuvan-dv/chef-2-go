import axios from "axios";
import axiosInstance from "./axios";
const BASE_URL = process.env.BASE_URL || "http://localhost:5000";
const path = "users/";

type User = {
    email?: string,
    password: string,
    username?: string,
    role?: "chef" | "customer" | "admin",
    name?: string,
    _id?: string,
    imageUrl?: string,
}

export type RegisterUser = User &  {
    isVerified: boolean,
    token: string,
};

const headers = { 'content-type': 'application/json' };

export const loginUserService = async (form_data: User) => {
    try {
        return axios({
            url: `${BASE_URL}/users/login`,
            method: "POST",
            headers: headers,
            data: form_data
        })
    }
    catch (error: any) {
        return error.response.data;

    }
}


//AXIOS API Call for retrieving all Users
export const getAllRegisteredUsers = async () => {
        return axiosInstance.get(path);
};


//Axios API Call to Register New User
export const registerUser = async (form_data : FormData) => {
    return axios({
        url: `${BASE_URL}/users/signup`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: form_data
    })
}

//Axios API call for OTP Verification
export const otpVerification = async (form_data : FormData) => {
    return axios({
        url: `${BASE_URL}/users/email`,
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        data: form_data
    })
}

//Axios API call for Sending OTP
export const sendOTP = async (form_data : FormData) => {
    return axios({
        url: `${BASE_URL}/users/email`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: form_data
    })
}

//Axios API Call to Update User details
export const updateUserDetails = async (userId : string | undefined, token: string, form_data :RegisterUser) => {
    return axios({
        url: `${BASE_URL}/users/${userId}`,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        data: form_data
    })
}

//Axios API Call to Delete User
export const deleteUser = async (userId : string, token: string) => {
    return axios({
        url: `${BASE_URL}/users/${userId}`,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

export const deleteProfile = async (userId : string) => {
    return axiosInstance.delete(path+"/profile/"+userId);
    
}

export const getChefDetails = async (userId : string) => {
    return axiosInstance.get(path+"/profile/"+userId);
    
}