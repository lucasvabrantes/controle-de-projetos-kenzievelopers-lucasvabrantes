import { Router } from "express";
import { projectsControllers } from "../controllers";
import { projectExists } from "../middlewares/projectsExists.middleware";
import { projectDeveloperExists } from "../middlewares/projectDeveloperExists.middleware";

const projectRouter: Router = Router();

projectRouter.post("", projectDeveloperExists, projectsControllers.create);
projectRouter.get("/:id", projectExists, projectsControllers.retrieve);
projectRouter.patch(
    "/:id",
    projectExists,
    projectDeveloperExists,
    projectsControllers.partialUpdate
);

export default projectRouter;
