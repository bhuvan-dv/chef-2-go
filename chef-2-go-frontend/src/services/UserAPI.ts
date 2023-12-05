import axios from "axios";

const BASE_URL = "http://localhost:5000";

type User = {
    email?: string,
    password: string,
    username?: string,
}

type RegisterUser = User &  {
    role: string,
    isVerified: boolean,
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
    try {
        return axios({
            url: `${BASE_URL}/users`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.error("axios catch error: ", err);
        return [];
    }
};

//Axios API Call to Register New User
export const registerUser = async (form_data : RegisterUser) => {
    return axios({
        url: `${BASE_URL}/users/register`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: form_data
    })
}

//Axios API call for OTP Verification
export const otpVerification = async (form_data : string) => {
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
export const sendOTP = async (form_data : string) => {
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
export const updateUserDetails = async (userId : string, token: string, form_data :RegisterUser) => {
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