import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const routes = Router();

//instancia de controllers
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimetnController = new CreateComplimentController()

//rotas
routes.post('/tags', ensureAdmin, createTagController.handle);
routes.post('/users', createUserController.handle);
routes.post('/login', authenticateUserController.handle);
routes.post('/compliments', createComplimetnController.handle);

export { routes };