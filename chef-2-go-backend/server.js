import express from 'express';

import initialize from './app/app.js';

const app = express();

const port = 5000;

initialize(app);

app.listen(port, () => console.log(`Server is listening at port ${port}`));
