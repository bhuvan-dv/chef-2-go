// server.js
import express from 'express';
import initialize from './app.js';
import dotenv from 'dotenv';
import cors from 'cors';
// import paymentRoutes from './payment-route.js';
dotenv.config();

const app = express();
const port = 5000;//  process.env.PORT;

app.use(cors());

app.use(express.json()); 

initialize(app);

app.listen(port, () => console.log(`Server is listening at port ${port}`));
