import 'reflect-metadata';
import express from "express";
import cors from "cors";

import { routes } from './routes';

import './database';

const app = express();

app.use(cors());

//para entender requisições do tipo json
app.use(express.json());

// exportando as rotas
app.use(routes);

//inicializa o servidor
app.listen(3000, () => console.log('Server is running'));

