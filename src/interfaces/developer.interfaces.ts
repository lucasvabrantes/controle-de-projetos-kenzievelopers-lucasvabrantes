import { QueryResult } from "pg";

export type Developer = {
    id: number;
    name: string;
    email: string;
};

export type DeveloperResult = QueryResult<Developer>;
export type DeveloperCreate = Omit<Developer, "id">;
export type DeveloperRead = Developer;
export type DeveloperUpdate = Partial<DeveloperCreate>;
