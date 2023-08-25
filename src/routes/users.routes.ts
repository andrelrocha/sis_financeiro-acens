import { Router } from "express";

import { listAllUsers } from "../useCases/User/listAllUsers";

const usersRoutes = Router();

usersRoutes.get("/all", (req, res, next) => {
    return listAllUsers.handle(req, res, next);
});

export { usersRoutes };