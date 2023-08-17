import { NextFunction, Request, Response } from "express";
import { DeveloperInfosResult } from "../interfaces/developerInfos.interfaces";
import { client } from "../database";
import AppError from "../errors/App.error";

export const developerInfosExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { id } = req.params;

    const query: DeveloperInfosResult = await client.query(
        `SELECT * FROM "developerInfos" WHERE "developerId" = $1;`,
        [id]
    );

    if (query.rowCount > 0) {
        throw new AppError("Developer infos already exists.", 409);
    }

    return next();
};
