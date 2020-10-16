import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import errorHandler from './errors/handler';
import routes from './routes';

import './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uplouds', express.static(path.join(__dirname, '..', 'uplouds')));
app.use(errorHandler);

console.log('rodando em: http://localhost:3333');
app.listen(3333);