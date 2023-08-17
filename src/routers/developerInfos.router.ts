import { Router } from "express";
import { developerInfosControllers } from "../controllers";
import { developerInfosExists } from "../middlewares/developerInfosExists.middleware";
import { correctOS } from "../middlewares/correctOS.middleware";
import { developerIdExists } from "../middlewares/developerIdExists.middleware";

const developerInfosRouter: Router = Router();

developerInfosRouter.post(
    "/:id/infos",
    developerIdExists,
    correctOS,
    developerInfosExists,
    developerInfosControllers.create
);

export default developerInfosRouter;
