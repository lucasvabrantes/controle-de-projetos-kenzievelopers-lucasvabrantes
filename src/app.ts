import "express-async-errors";
import { handleErrors } from "./middlewares/handleError.middleware";
import express, { Application, json } from "express";
import projectRouter from "./routers/projects.router";
import developerRouter from "./routers/developer.router";
import developerInfosRouter from "./routers/developerInfos.router";

const app: Application = express();
app.use(json());

app.use("/developers", developerRouter);
app.use("/developers", developerInfosRouter);
app.use("/projects", projectRouter);

app.use(handleErrors);

export default app;
