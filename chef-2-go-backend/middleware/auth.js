import jwt from "jsonwebtoken";
import User from "../models/user-model.js";
import asyncHandler from 'express-async-handler';

//Function to Verify JWT Token
const verifyToken = asyncHandler(async (request, response, next) => {
    let token;

    if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')) {
        try {
            token = request.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            request.user = await User.findOne({ "id": decoded.id }).select('-password');

            next();
        } catch (err) {
            console.log(err);
            response.status(401).send({ msg: `Not Authorized` });
        }
    }
    if (!token) {
        response.status(401).send({ msg: `Not Authorized, no Token` });
    }
});

export default verifyToken;