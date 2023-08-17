import { Request, Response } from "express";
import {
    DeveloperInfos,
    DeveloperInfosCreate,
} from "../interfaces/developerInfos.interfaces";
import { developerInfosServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const developerInfos: DeveloperInfos = await developerInfosServices.create(
        req.body,
        req.params.id
    );
    return res.status(201).json(developerInfos);
};

export default { create };
