import format from "pg-format";
import {
    DeveloperInfos,
    DeveloperInfosCreate,
    DeveloperInfosResult,
} from "../interfaces/developerInfos.interfaces";
import { client } from "../database";

const create = async (
    payload: DeveloperInfosCreate,
    developerId: string
): Promise<DeveloperInfos> => {
    const queryFormat: string = format(
        `INSERT INTO "developerInfos" 
            ("developerSince", "preferredOS", "developerId") 
        VALUES 
            ($1, $2, $3) 
        RETURNING *;`,
        Object.values(payload)
    );

    const queryResult: DeveloperInfosResult = await client.query(queryFormat, [
        ...Object.values(payload),
        developerId,    
    ]);

    return queryResult.rows[0];
};

export default { create };
