import express from "express";
import CandidatoController from "../controllers/CandidatoController";
import EmpresaController from "../controllers/EmpresaController";

export const routes = express.Router();


// Informações básicas
routes.post("/candidato", CandidatoController.create);

// // Sobre você
// routes.put("/candidato/sobre", CandidatoController.update);

// // Resumo das qualificações
// routes.post("/candidato/qualificacoes", CandidatoController.create);
// routes.put("/candidato/qualificacoes", CandidatoController.update);

// // Formação acadêmica
// routes.post("/candidato/formacao", CandidatoController.create);
// routes.put("/candidato/formacao", CandidatoController.update);

// // Cursos e certificados
// routes.post("/candidato/certificados", CandidatoController.create);
// routes.put("/candidato/certificados", CandidatoController.update);

// // Experiências profissionas
// routes.post("/candidato/experiencias", CandidatoController.create);
// routes.put("/candidato/experiencias", CandidatoController.update);

// // O que busca em uma empresa?
// routes.post("/candidato/experiencias", CandidatoController.create);
// routes.put("/candidato/experiencias", CandidatoController.update);



routes.post("/empresa", EmpresaController.create);


