import { Request, Response } from "express";
import { Project } from "../interfaces/projects.interfaces";
import { projectsServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const project: Project = await projectsServices.create(req.body);
    return res.status(201).json(project);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const project: Project = await projectsServices.retrieve(req.params.id);
    return res.status(200).json(project);
};

const partialUpdate = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const project: Project = await projectsServices.partialUpdate(
        req.params.id,
        req.body
    );
    return res.status(200).json(project);
};

export default { create, retrieve, partialUpdate };
