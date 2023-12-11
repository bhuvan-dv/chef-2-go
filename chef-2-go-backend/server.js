import express from 'express';

import initialize from './app.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const port = process.env.PORT;

initialize(app);

app.listen(port, () => console.log(`Server is listening at port ${port}`));
