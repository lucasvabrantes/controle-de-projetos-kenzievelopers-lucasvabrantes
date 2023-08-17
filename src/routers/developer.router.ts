import { Router } from "express";
import { developerControllers } from "../controllers";
import { emailExists } from "../middlewares/emailExists.middleware";
import { developerIdExists } from "../middlewares/developerIdExists.middleware";

const developerRouter: Router = Router();

developerRouter.post("", emailExists, developerControllers.create);

developerRouter.use("/:id", developerIdExists);

developerRouter.get("/:id", developerControllers.retrieve);
developerRouter.patch("/:id", emailExists, developerControllers.partialUpdate);
developerRouter.delete("/:id", developerControllers.destroy);

export default developerRouter;
