import * as express from "express";

import { sequelize } from "./db/dbConnect";



const app = express();
app.use(express.json());  

app.get("/", (req, res) => {
    res.send("Hello World");
});

export { app };