import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const routes = Router();

//instancia de controllers
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

//rotas
routes.post('/users', createUserController.handle);

routes.post('/tags', ensureAdmin, createTagController.handle);

export { routes };