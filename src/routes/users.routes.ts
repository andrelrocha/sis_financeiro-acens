import { Router } from "express";

import { listAllUsers } from "../useCases/User/listAllUsers";

const usersRoutes = Router();

usersRoutes.get("/", listAllUsers.handle);

export { usersRoutes };