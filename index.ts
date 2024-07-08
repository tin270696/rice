import express, { Express, Request, Response } from "express";
import env from "dotenv";
env.config();

import { connect } from  "./config/database";
import clientRoutes from "./routes/client";

connect();

const app: Express = express();
const port: string = `${process.env.PORT}`;

app.set("views", "./views");
app.set("view engine", "pug");

clientRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})