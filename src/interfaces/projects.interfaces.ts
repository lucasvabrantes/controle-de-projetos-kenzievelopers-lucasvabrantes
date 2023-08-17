import { QueryResult } from "pg";

export type Project = {
    id: number;
    description?: string;
    repository: string;
    startDate: Date;
    endDate?: Date;
    developerId: number;
};

export type ProjectResult = QueryResult<Project>;
export type ProjectCreate = Omit<Project, "id">;
export type ProjectUpdate = Partial<ProjectCreate>;
