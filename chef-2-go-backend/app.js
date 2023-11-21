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
    mongoose.connect("mongodb+srv://chef-2-go-admin:Masters2023@chef-2-go.k7uo2cb.mongodb.net/?retryWrites=true&w=majority");
    //TODO Initialize routes
    registerRouter(app);
}

export default initialize;