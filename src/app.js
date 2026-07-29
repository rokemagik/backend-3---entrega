import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect("mongodb+srv://Emi:emi123456@cluster0.d1txvpu.mongodb.net/ecommerce?retryWrites=true&w=majority");

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter);

const swaggerDocument = YAML.load("./src/docs/Users.yaml");

app.use(
    "/apidocs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

const server = app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

export default app;