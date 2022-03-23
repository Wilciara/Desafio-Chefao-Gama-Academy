import express from "express";
import EmpresaController from "../controllers/EmpresaController";

const routes = express.Router();

routes.post("/empresa", EmpresaController.create)

export {routes}