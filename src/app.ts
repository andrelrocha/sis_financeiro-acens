import * as express from "express";

import { sequelize } from "./db/dbConnect";

import { errorHandle400 } from "./middlewares/errors/ErrorHandle400";
import { errorHandle404 } from "./middlewares/errors/ErrorHandle404";
import { errorHandlePagination } from "./middlewares/errors/ErrorHandlePagination";

const app = express();
app.use(express.json());  

app.use(errorHandle400);
app.use(errorHandle404);
app.use(errorHandlePagination);

export { app };