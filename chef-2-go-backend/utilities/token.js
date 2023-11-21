import jwt from "jsonwebtoken";

//signing tokens 
export const createToken = (_id) => {
    //using _id as in mongoDB user id
    //passing id, jwt secret, expiresTime
   return jwt.sign({ _id, }, "abcd", { expiresIn: '3d' });
}