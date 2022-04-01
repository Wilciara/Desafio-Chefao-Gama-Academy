import { Request, Response } from "express";
import { Formacao } from "../models/index";

class FormacaoController {

    async findAll(req: Request, res: Response) {}

    async findOne(req: Request, res: Response) {}

    async create(req: Request, res: Response) {
        const { formacao, status, grau, curso, instituicao, data_inicio, data_fim, id_candidato } = req.body;
        const novaFormacao = await Formacao.create({
            formacao, status, grau, curso, instituicao, data_inicio, data_fim, id_candidato
        });
        return res.status(201).json(novaFormacao)
    }

    async update(req: Request, res: Response) {}
}

export default new FormacaoController();