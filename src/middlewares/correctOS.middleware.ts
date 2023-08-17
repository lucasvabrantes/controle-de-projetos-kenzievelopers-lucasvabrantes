import { NextFunction, Request, Response } from "express";
import { DeveloperInfosResult } from "../interfaces/developerInfos.interfaces";
import { client } from "../database";
import AppError from "../errors/App.error";

export const correctOS = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const OS = req.body.preferredOS;

    if (OS !== "Windows" && OS !== "Linux" && OS !== "MacOS") {
        throw new AppError("Invalid OS option.", 400);
    }

    return next();
};
