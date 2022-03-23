import { Request, Response } from "express";
import { Empresa } from "../models/Empresa";

class EmpresaController {

    async findAll(req: Request, res: Response) {

    }
    async findOne(req: Request, res: Response) {
        
    }
    async create(req: Request, res: Response) {
        const {nome, email} = req.body;
        const empresa = await Empresa.create({
            nome, email
        });
        return res.status(201).json(empresa)
    }
    async update(req: Request, res: Response) {
        
    }
}

export default new EmpresaController();