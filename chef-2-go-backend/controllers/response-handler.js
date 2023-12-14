import { response } from "express";

// Sets a successful response with a status code of 200 and sends JSON data.

export const setResponse = (data, response) => {
    response.status(200)
       .json(data);
}
// Sets an error response with a given status code, logs the error message to the console,
// and sends a JSON response with error details.
export const setErrorResponse = (statuscode, err, response) => {
    console.log(`errorMsg: ${err}`);
    response?.status(statuscode)
    .json({
     code: err.code,
     message: err.message
    })
}
// Sets an error response related to signup with a given status code
// and sends a JSON response with the error message.
export const setSignupError = (statuscode, err, response) =>{
    response.status(statuscode)
    .json({
        message: err.message
    })
}