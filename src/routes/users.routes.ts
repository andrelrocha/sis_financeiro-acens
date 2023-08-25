import { Router } from "express";

import { listUsers } from "../useCases/User/listUsers";
import { listAllUsers } from "../useCases/User/listAllUsers";
import { listUserById } from "../useCases/User/listUserById";

const usersRoutes = Router();

usersRoutes.get("/", (req, res, next) => {
    return listUsers.handle(req, res, next);
});

usersRoutes.get("/all", (req, res, next) => {
    return listAllUsers.handle(req, res, next);
});

usersRoutes.get("/:id", (req, res, next) => {
    return listUserById.handle(req, res, next);
});

export { usersRoutes };