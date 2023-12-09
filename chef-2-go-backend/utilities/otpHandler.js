import otpGenerator from "otp-generator"
import crypto from "crypto";

import sendEmail from "./emailHandler.js";
const key = "123";// process.env.OTP_SECRET_KEY; // Key for cryptograpy. Keep it secret

//Function to Create New OTP
export const createNewOTP = (email) => {
    // Generate a 6 digit numeric OTP
    const otp      = otpGenerator.generate(4, {upperCaseAlphabets: false, specialChars: false});
    const ttl      = 2 * 60 * 1000; // otp time to live 2 Minutes in miliseconds
    const expires  = Date.now() + ttl; // otp expires in 2 minutes further from current timestamp
    const data     = `${email}.${otp}.${expires}`; // email.otp.expiry_timestamp => this data is used to hash
    const hash     = crypto.createHmac("sha256",key).update(data).digest("hex"); // creating SHA256 hash of the data
    const fullHash = `${hash}.${expires}`; // Hash.expires, format to send to the user

        // send otp to the registered email.

    sendEmail(email,otp);

    return fullHash;
}

//Function to Verify OTP
export const verifyOTP = (email, hash, otp) => {
    // Seperate Hash value and expires from the hash returned from the user
    let [hashValue, expires] = hash.split(".");
    // Check if expiry time has passed
    let now = Date.now();
    if (now > parseInt(expires)) return false;
    // Calculate new hash with the same key and the same algorithm
    let data = `${email}.${otp}.${expires}`;
    let newCalculatedHash = crypto.createHmac("sha256", key).update(data).digest("hex");
    // Match the hashes
    if (newCalculatedHash === hashValue) {
        return true;
    }

    return false;
}

export default { createNewOTP, verifyOTP };