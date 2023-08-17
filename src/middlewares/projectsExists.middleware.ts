import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { ProjectResult } from "../interfaces/projects.interfaces";
import AppError from "../errors/App.error";

export const projectExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { id } = req.params;

    const query: string = `SELECT * FROM "projects" WHERE "developerId" = $1;`;

    const queryResult: ProjectResult = await client.query(query, [id]);

    if (queryResult.rowCount === 0) {
        throw new AppError("Project not found.", 404);
    }

    return next();
};
