import { Request, Response } from "express";
import { Candidato } from "../models/index";

class CandidatoController {

    async findAll(req: Request, res: Response) {}

    async findOne(req: Request, res: Response) {}

    async create(req: Request, res: Response) {
        const {nome, email, telefone} = req.body;
        const candidato = await Candidato.create({
            nome, email, telefone
        });
        return res.status(201).json(candidato)
    }

    async update(req: Request, res: Response) {}
}

export default new CandidatoController();