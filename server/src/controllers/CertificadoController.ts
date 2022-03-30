import { Request, Response } from "express";
import { Certificado } from "../models/index";

class CertificadoController {

    async findAll(req: Request, res: Response) {}

    async findOne(req: Request, res: Response) {}

    async create(req: Request, res: Response) {
        const { area_estudo, instituicao, modalidade, data_inicio, data_fim, id_candidato } = req.body;
        const certificado = await Certificado.create({
            area_estudo, instituicao, modalidade, data_inicio, data_fim, id_candidato
        });
        return res.status(201).json(certificado)
    }

    async update(req: Request, res: Response) {}
}

export default new CertificadoController();