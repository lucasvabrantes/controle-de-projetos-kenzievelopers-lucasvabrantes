import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { Developer, DeveloperResult } from "../interfaces/developer.interfaces";
import AppError from "../errors/App.error";

export const developerIdExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { id } = req.params;

    const queryResult: DeveloperResult = await client.query(
        'SELECT * FROM "developers" WHERE "id" = $1;',
        [id]
    );

    if (!queryResult.rowCount) {
        throw new AppError("Developer not found.", 404);
    }

    return next();
};
