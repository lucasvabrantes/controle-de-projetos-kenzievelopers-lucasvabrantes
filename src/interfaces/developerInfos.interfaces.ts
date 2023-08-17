import { QueryResult } from "pg";

export type DeveloperInfos = {
    id: number;
    developerSince: Date;
    preferredOS: "Windows" | "Linux" | "MacOS";
    developerId: number;
};

export type DeveloperInfosResult = QueryResult<DeveloperInfos>;
export type DeveloperInfosCreate = Omit<DeveloperInfos, "id">;
