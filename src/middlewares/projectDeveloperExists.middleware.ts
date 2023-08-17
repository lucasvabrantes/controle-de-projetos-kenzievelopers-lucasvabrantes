import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { ProjectResult } from "../interfaces/projects.interfaces";
import AppError from "../errors/App.error";

export const projectDeveloperExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { developerId } = req.body;

    const query: string = 'SELECT * FROM "developers" WHERE "id" = $1;';

    const queryResult: ProjectResult = await client.query(query, [developerId]);

    if (!queryResult.rowCount) {
        throw new AppError("Developer not found.", 404);
    }

    return next();
};
