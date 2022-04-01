import { Request, Response } from "express";
import { Experiencia } from "../models/index";

class ExperienciaController {

    async findAll(req: Request, res: Response) {}

    async findOne(req: Request, res: Response) {}

    async create(req: Request, res: Response) {
        const { empresa, cargo, data_inicio, data_fim, modalidade, id_candidato } = req.body;
        const experiencia = await Experiencia.create({
            empresa, cargo, data_inicio, data_fim, modalidade, id_candidato
        });
        return res.status(201).json(experiencia)
    }

    async update(req: Request, res: Response) {}
}

export default new ExperienciaController();