import format from "pg-format";
import {
    Project,
    ProjectCreate,
    ProjectResult,
    ProjectUpdate,
} from "../interfaces/projects.interfaces";
import { client } from "../database";

const create = async (payload: ProjectCreate): Promise<Project> => {
    const queryFormat: string = format(
        `INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    );

    const queryResult: ProjectResult = await client.query(queryFormat);

    return queryResult.rows[0];
};

const retrieve = async (projectId: string): Promise<Project> => {
    const query: string = `
        SELECT "p"."id" AS "projectId",
        "p"."name" AS "projectName",
        "p". "description" AS "projectDescription",
        "p"."repository" AS "projectRepository",
        "p". "startDate" AS "projectStartDate",
        "p"."endDate" AS "projectEndDate",
        "d"."name" AS "projectDeveloperName"
        FROM "developers" AS "d"
        LEFT JOIN "projects" AS "p"
            ON "d"."id" = "p"."developerId"
        WHERE "p"."id" = $1;
    `;

    const queryResult: ProjectResult = await client.query(query, [projectId]);

    return queryResult.rows[0];
};

const partialUpdate = async (
    developerId: string,
    payload: ProjectUpdate
): Promise<Project> => {
    const queryFormat: string = format(
        `UPDATE "projects" SET(%I) = ROW(%L) WHERE "id" = $1 RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    );

    const queryResult: ProjectResult = await client.query(queryFormat, [
        developerId,
    ]);

    return queryResult.rows[0];
};

export default { create, retrieve, partialUpdate };
