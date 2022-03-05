import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router();

//instancia de controllers
const createUserController = new CreateUserController();

//rotas
routes.post('/users', createUserController.handle);


export { routes };