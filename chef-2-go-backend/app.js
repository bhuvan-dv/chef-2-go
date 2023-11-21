import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
// Importing the Recipe index route
import registerRouter from './routes/index.js'
import models from './models/index.js';

const initialize = (app) => {

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    //TODO MongoDB connection
    mongoose.connect('mongodb+srv://mikkilik:Mongodb123456@info6150fall2023.8609v.mongodb.net/recipedb?retryWrites=true&w=majority');
    //TODO Initialize routes
    registerRouter(app);
}

export default initialize;