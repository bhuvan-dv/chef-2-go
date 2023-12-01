import { response } from "express";


export const setResponse = (data, response) => {
    response.status(200)
       .json(data);
}

export const setErrorResponse = (statuscode, err, response) => {
    console.log(`errorMsg: ${err}`);
    response?.status(statuscode)
    .json({
     code: err.code,
     message: err.message
    })
}

export const setSignupError = (statuscode, err, response) =>{
    response.status(statuscode)
    .json({
        message: err.message
    })
}